// Return the top 10 people that got more retweets in average, after tweeting more than 3 times

db.tweet.aggregate([
    {
        $group: {
            _id: "$user.screen_name",
            average_retweets: { $avg: "$retweet_count" },
            tweet_count: { $sum: 1 }
        }
    },
    { $match: { tweet_count: { $gt: 3 } } },
    { $sort: { average_retweets: -1 } },
    { $limit: 10 }
]);