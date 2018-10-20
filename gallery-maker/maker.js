const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const opn = require('opn');
const url = require('url');
const http = require('http')
const request = require('request');
const download = require('image-downloader')

const SCOPES = ['https://www.googleapis.com/auth/photoslibrary.sharing', 'https://www.googleapis.com/auth/photoslibrary.readonly'];
const CREDENTIALS_PATH = 'gallery-maker/credentials.json';
const TOKEN_PATH = 'gallery-maker/token.json';
const GALLERY_DATA_PATH = 'gallery-maker/gallery.json'

var oAuth2Client;
var albums = [];


function slugify(text)
{
  var cls = text.toString()
    .replace(/[^\w\s]/gi, '')

  return "20YY-MM-DD "+cls
}


// Load client credentials from a local file.
fs.readFile(CREDENTIALS_PATH, (err, content) => {
  if (err) return console.log('Error loading client credentials from file:', err);

  //Parse credentials
  var credentials = JSON.parse(content)
  const {client_secret, client_id, redirect_uri} = credentials.web;
  oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);



  askForToken(oAuth2Client)
});

function setAccessToken(code) {
  oAuth2Client.getToken(code, (err, token) => {
    if (err) return console.error('Error retrieving access token', err);
    oAuth2Client.setCredentials(token);
    // Store the token to disk for later program executions
    generateGallery()
  });

}

function askForToken(oAuth2Client){
  const requestHandler = (request, response) => {
    var q = url.parse(request.url, true);

    if(q.pathname === "/") {
      console.log(q.query.code)
      setAccessToken(q.query.code)
      response.end("Done!");
    }
    else{
      response.end("unknown page");
    }
  }
  const port = 8001
  const server = http.createServer(requestHandler)


  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  server.listen(port, (err) => {
    if (err) {return console.log('something bad happened', err)}
    console.log(`server is listening on ${port}`)
  })
  opn(authUrl);
}

function generateGallery() {
  reqAlbums()
}



function reqAlbums(nextPageToken){
  var url_target  = "https://photoslibrary.googleapis.com/v1/sharedAlbums?pageSize=50";

  if(nextPageToken !== undefined){
    url_target+="&pageToken="+nextPageToken
  }

  console.log(url_target)
  request(
    {
      url: url_target,
      headers: { 'Authorization': 'Bearer ' + oAuth2Client.credentials.access_token }
    },
    function(error, response, body) {
      data = JSON.parse(body)
      albums = albums.concat(data.sharedAlbums)
      //console.log(data)

      if(data.nextPageToken === undefined) {
        downloadImages()
        fs.writeFile(GALLERY_DATA_PATH, JSON.stringify(albums), (err) => {
          console.log(err)
        });
        console.log("Saved Gallery")
      }
      else{
        reqAlbums(data.nextPageToken)

      }
    }
  );
}


function downloadImages(){
  const download = require('image-downloader')


  emptyDir("./static/gallery")

  albums.map(album => {

    if(album.title === undefined) return;

    target = './static/gallery/'+slugify(album.title)
    if (!fs.existsSync(target)){
      fs.mkdirSync(target);
    }


    var fileContent = "---\n" +
      "title: \""+album.title+"\"\n" +
      "featuredImage: \"./featured-image.png\" \n" +
      "album: \"\"\n" +
      "---\n" +
      "TEST";
    fs.writeFile(target+"/post.md", fileContent, (err) => {
      if (err) throw err;
    });

    // Download to a directory and save with the original filename
    const options = {
      url: album.coverPhotoBaseUrl,
      dest: target+"/featured-image.png"
    }

    download.image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    })
    .catch((err) => {
      console.error(err)
    })

  })

  console.log("Done!")

}


function emptyDir(dirPath) {
  try { var files = fs.readdirSync(dirPath); }
  catch(e) { return; }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);

    }
};
