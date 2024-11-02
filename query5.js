// Extract unique user information and insert the returned data into a new collection called "User"

db.tweet.aggregate([
    {
        $group: {
            _id: "$user.id",
            user_id_str: { $first: "$user.id_str" },
            screen_name: { $first: "$user.screen_name" },
            name: { $first: "$user.name" },
            location: { $first: "$user.location" },
            description: { $first: "$user.description" },
            followers_count: { $first: "$user.followers_count" },
            friends_count: { $first: "$user.friends_count" },
            listed_count: { $first: "$user.listed_count" },
            created_at: { $first: "$user.created_at" },
            favourites_count: { $first: "$user.favourites_count" },
            geo_enabled: { $first: "$user.geo_enabled" },
            verified: { $first: "$user.verified" },
            statuses_count: { $first: "$user.statuses_count" },
            profile_image_url: { $first: "$user.profile_image_url" },
            profile_banner_url: { $first: "$user.profile_banner_url" },
            // Add any other user fields you want to keep
        }
    },
    { $out: "Users" }
]);

/* creattion of a new Tweets_Only collection, that doesn't 
embed the user information, but instead references it using the user id */

db.tweet.aggregate([
    {
        $project: {
            _id: 1,
            created_at: 1,
            id: 1,
            id_str: 1,
            text: 1,
            truncated: 1,
            entities: 1,
            metadata: 1,
            source: 1,
            in_reply_to_status_id: 1,
            in_reply_to_status_id_str: 1,
            in_reply_to_user_id: 1,
            in_reply_to_user_id_str: 1,
            in_reply_to_screen_name: 1,
            geo: 1,
            coordinates: 1,
            place: 1,
            contributors: 1,
            is_quote_status: 1,
            retweet_count: 1,
            favorite_count: 1,
            favorited: 1,
            retweeted: 1,
            possibly_sensitive: 1,
            lang: 1,
            // Reference user by ID only
            user_id: "$user.id"
        }
    },
    { $out: "Tweets_Only" }
]);