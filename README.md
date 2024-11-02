# DBMs
Performing some queries on a document database called "tweet". A database for tweets in the social media X.

# How to run it 
Download the tweets generated during the 2020 ieeevis Conference  https://johnguerra.co/viz/influentials/ieeevis2020/ieeevis2020Tweets.dump.bz2. and unzip the file.

After extraction you should have a .dump

Import the file using mongoimport:
mongoimport -h localhost:27017 -d ieeevisTweets -c tweet --file ieeevis2020Tweets.dump

In your MongoDB Compass, Open the MongoDB shell and run the queries

# Query1.js
Return the number of tweets that are not retweeted or replied 

# Query2.js
Return the top 10 screen_names by their number of followers.

# Query3.js
Return the person with the most tweets

# Query4.js
Return the top 10 people that got more retweets in average, after tweeting more than 3 times

# Query5.js
Extract unique user information and insert the returned data into a new collection called "User" & create a new Tweets_Only collection, that doesn't embed the user information, but instead references it using the user id. 



