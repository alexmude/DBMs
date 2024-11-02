// Return the person with the most tweets

db.tweet.aggregate([
    { $group: { _id: "$user.screen_name", tweet_count: { $sum: 1 } } },
    { $sort: { tweet_count: -1 } },
    { $limit: 1 }
]);