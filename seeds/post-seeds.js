const { Post } = require('../models');

const postData = [
    {
        title: "El Salvador makes bitcoin legal tender!",
        post_content: "El Salvador President Bukele passes bill through Congress officially making Bitcoin legal tender in the country!",
        user_id: 3
    },
    {
        title: "Red Sox win to keep pace with division",
        post_content: "The American League is in a tight pennant race as summer heats up and the Red Sox are positioned amongst the leage leaders.",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2

    },
    {
        title: "Bruins lose game 4",
        post_content: "Series now tied at 2-2 as we head into game 5 at the garden.",
        user_id: 5
    },
    {
        title: "Udemy Courses on sale!",
        post_content: "Popular Udemy courses by Colt Steele and Andrew Mead are 85% off the original price!  Get 'em while you can at these great prices!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;