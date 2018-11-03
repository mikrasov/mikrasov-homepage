---
title: "Introduction to Pandas"
featuredImage: "./featured-image.png"
---

Pandas? As in the bear?

Turns out [Pandas](https://pandas.pydata.org/) is an awesome python library for data analysis. If you were like me 5 years a go you may groan at learning another tool. You need to analyze some data right *now* and you don't have time for learning a brand new thing. Besides you can do it all through lists dicts and loops anyway right? 

Well turns out, if you want to save yourself an incredible amount of time and write very little code then there may be a better way. So lets introduce you to pandas.

##Getting Pandas
First things first. Lets get some python data tools. [Numpy](http://www.numpy.org/) is the foundation of pandas which contains many tools for efficiently dealing with arrays. [Pandas](https://pandas.pydata.org/) is what we are here to learn about. [Matplotlib](https://matplotlib.org/) is an optional but awesome library for quickly plotting your results.

To install all 3 in your terminal run:
```bash
$ pip install numpy pandas matplotlib 

```


##Importing Data
First off lets get some data. I was working on a project recently that looked at political expenditure data. So let us start there. ProPublica has a treasure trove of their [site](https://projects.propublica.org/represent/expenditures). Start by downloading [2016 Q1 (detail)](https://projects.propublica.org/congress/assets/staffers/2016Q1-house-disburse-detail.csv). 

If on linux run
```bash
$ wget https://projects.propublica.org/congress/assets/staffers/2016Q1-house-disburse-detail.cs
```
Next let us create a python file and import the data.


```python
import pandas as pd

df = pd.read_csv("2016Q1-house-disburse-detail.csv")
print("Read %i Rows %i columns\n"%df.shape)
print(df.dtypes)
    
```

What we should get back is:
```
Read 103132 Rows 15 columns

BIOGUIDE_ID      object
OFFICE           object
QUARTER          object
CATEGORY         object
DATE             object
PAYEE            object
START DATE       object
END DATE         object
PURPOSE          object
AMOUNT           object
YEAR             object
TRANSCODE        object
TRANSCODELONG    object
RECORDID         object
RECIP (orig.)    object
dtype: object
```

*df* is our [data frame](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.html), for our purposes think of it like a 2D table that contains our data. [read_csv](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html) is a helpful function that reads in a CSV file.
[df.shape](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.shape.html#pandas.DataFrame.shape) describes the dimensions of our table. In this case 103132 rows x 15 columns. [df.dtypes](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.dtypes.html#pandas.DataFrame.dtypes) gives us info about the types of data stored in each col. In this case it is all strings represented by the type object. 

Having all strings isn't particularly great as we can't do a lot of stats with strings.

##Smarter Import
So why is our data all strings. Lets debug.
```python
print(df["AMOUNT"])
```

Here we are selecting only the *AMOUNT* column of the data frame, and printing that to the screen.
Pandas is smart so it shows us a portion of the 100k+ rows.

The first 5 rows look like this:

```
0       380.00
1     6,666.67
2    25,666.67
3    18,333.33
4    26,250.00
...
```

Notice they all look like decimal numbers, but have a comma. Because pandas in international it does not assume commas always means thousands. But we can fix this!

Before that lets also look at *START DATE* and  *END DATE* .
```python
print(df[ ["START DATE","END DATE"] ]).head(5)
```

This time we select two columns by passing in a list of column names. Since we are only interested in first 5 rows, this time we specify this via the head(5) method.

```
     START DATE  END DATE
   0   01/29/16  02/28/16
   1   02/01/16  03/31/16
   2   01/03/16  03/31/16
   3   01/03/16  03/31/16
   4   01/28/16  03/31/16
```

We can see that these columns are actually dates. So lets fix this in our import as well.


```python
import pandas as pd

df = pd.read_csv("2016Q1-house-disburse-detail.csv", thousands=',')
print("Read %i Rows %i columns\n"%df.shape)
print(df.dtypes)
```

This time we tell *read_csv* that we will use the comma to represent thousands, and that *START DATE* and *END DATE* are dates.  In the results we can see that amount is now a float, and the start and ending dates are date time  objects.

``` 
Read 103132 Rows 15 columns

BIOGUIDE_ID              object
OFFICE                   object
QUARTER                  object
CATEGORY                 object
DATE                     object
PAYEE                    object
START DATE       datetime64[ns]
END DATE         datetime64[ns]
PURPOSE                  object
AMOUNT                  float64
YEAR                     object
TRANSCODE                object
TRANSCODELONG            object
RECORDID                 object
RECIP (orig.)            object
dtype: object
```

## Doing Basic Stats
So far we have been simply massaging the data into a manipulable form. Lets see where Pandas really shines. First lets take the **Sum** of all the expenditures made by the offices of the house of representative in Q1 of 2016.

```python
print(df["AMOUNT"].sum())
```

Done! Turns out they spent **$300671748.0** of taxpayer money. 

Lets do some basic stats. We could call methods like [max()](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.max.html#pandas.DataFrame.max), [min()](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.max.html#pandas.DataFrame.min), [mean()](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.max.html#pandas.DataFrame.mean) etc.. or we can do all this in one go.

```python
print(df["AMOUNT"].describe())
```

Shows us all the summary statistics
```
count    1.031320e+05
mean     2.915407e+03
std      4.908566e+04
min     -1.639993e+06
25%      5.000000e+01
50%      2.132900e+02
75%      8.330000e+02
max      6.959509e+06
Name: AMOUNT, dtype: float6
```

##Conditional Selectors
Say we wanted to see all the expenditures for the two weeks around the 2016 inauguration that happened on *Jan 20*.

```python
select = (df['START DATE'] >= '2016-1-13') & (df['END DATE'] <= '2016-1-27' )
inaug = df[select]
print( inaug["AMOUNT"].sum() )
```

Here we select rows that mach our condition using *df['START DATE'] >= '2016-1-13')* and *(df['END DATE'] <= '2016-1-27' )*. Each of these selectors returns a *103132 x 1* array of boolean values that signify if a particular row matches that condition. As we have two boolean columns we use the **&** operator to combine them into a single selector we name *select*. 

We pass this selector into our data frame using *df[select]* which returns our target rows. We then select the *AMOUNT* column and sum it. 

From this we see that for the 2 weeks around the inauguration the house spent Now we are starting to see how pandas can do some heavy lifting.


##Grouping Data

Lets say we wanted to figure out which office spent the most money in Q1 of 2016. We will need to group the expenditures by office.

First lets group by office and sum.
```python
print(df.groupby("OFFICE")["AMOUNT"].sum())
```

Here groupby() creates a special type of intermediate data frame which allows us to specify how the grouped data should be aggregated. In this case we are taking the sum of all the expenditures of a particular office.

```
OFFICE
ADMIN AND OPS                        38037.13
ARMED SERVICES COMMITTEE           1843698.35
BCDR EXERCISES ACTIVITY               1114.24
                                     ...     
TECHNICAL ASSISTANTS                108526.77
TECHNOLOGY INFRASTRUCTURE           155392.74
TRANSPORTATION-INFRASTRUCTURE      2106081.47
VETERANS' AFFAIRS                   840660.36
Name: AMOUNT, Length: 537, dtype: float64

```

Now lets find the maximum expenditure in this group.
```python
print(df.groupby("OFFICE")["AMOUNT"].sum().max())
```

Turns out it was **$61709651.71** but which office spent it?

```python
print(df.groupby("OFFICE")["AMOUNT"].sum().idxmax())
```

Because groupby automatically assigns an id to each row (like a database), we can use the *idxmax()* method on the grouped data to find the id of the maximum row in the group. In this case it is the office of **GOVERNMENT CONTRIBUTIONS**. 

I don't know that much about the organizational structure of the house of representatives to find that interesting. I think I would rather know what congressman spent the most.

Thankfully in this dataset the field *BIOGUIDE_ID* is set for each representative and empty otherwise. However as *BIOGUIDE_ID* is a string field it is not preserved after we group the data (as summing strings is poorly defined). So instead lets add it to our groupby.

```python
print(df.groupby( ["BIOGUIDE_ID","OFFICE"])["AMOUNT"].sum().idxmax())

```

Here we are passing a list of columns to our groupby. As offices without an elected representative don't have a BIOGUIDE_ID, they have a NaN (Not a Number) value and are automatically omitted from the group.

So now we find out that **HON. PEDRO R. PIERLUISI** is the representative with the highest spending during that time period and we can find more info about him on ProPublica by using his  of **P000596**. Hmm turns out he was the Resident Commissioner of Puerto Rico a non voting position in the house.


## Wrap Up
So that is it for now. If people find this type of tutorial helpful, I will come back and make more posts on saving time with Pandas.
