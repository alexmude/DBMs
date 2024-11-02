// Return the number of tweets that are not retweeted or replied 

db.tweet.countDocuments({
    in_reply_to_status_id: null,
    retweeted_status: { $exists: false }
});