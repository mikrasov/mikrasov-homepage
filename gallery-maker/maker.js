const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const opn = require('opn');
const url = require('url');
const http = require('http')


const SCOPES = ['https://www.googleapis.com/auth/photoslibrary.readonly'];
const CREDENTIALS_PATH = 'gallery-maker/credentials.json';
const TOKEN_PATH = 'gallery-maker/token.json';



var oAuth2Client;

// Load client secrets from a local file.
fs.readFile(CREDENTIALS_PATH, (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content));
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials) {
  const {client_secret, client_id, redirect_uri} = credentials.web;
  oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return askForToken(oAuth2Client);
    oAuth2Client.setCredentials(JSON.parse(token));
    generateGallery()
  });
}

function setAccessToken(code) {

  oAuth2Client.getToken(code, (err, token) => {
    if (err) return console.error('Error retrieving access token', err);
    oAuth2Client.setCredentials(token);
    // Store the token to disk for later program executions
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
      if (err) console.error(err);
      console.log('Token stored to', TOKEN_PATH);
    });
  });
  generateGallery()
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
  console.log(oAuth2Client)
}

///?code=4/eQDmoGQQasm2O4qtbDqzNikUN5wqLFyUQomWYJyIjtl66U6-71h1_im6vBVd4kc5Vysi2GmLW2aSwXm4fYPoiho&scope=https://www.googleapis.com/auth/photoslibrary.readonly
