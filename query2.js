// Return the top 10 screen_names by their number of followers.

db.tweet.aggregate([
    {
        $group: {
            _id: "$user.screen_name",
            followers_count: { $first: "$user.followers_count" }
        }
    },
    { $sort: { followers_count: -1 } },
    { $limit: 10 }
]);