const { User } = require('../models');

const userData = [
    {
        username: "abalcom23",
        email: "abalcom23@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "rbalcom23",
        email: "rbalcom23@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "kmloeffler",
        email: "kmloeffler@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "aneloe",
        email: "aneloe@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "sloef",
        email: "loef0202@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "ellie_b",
        email: "ellieb18@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;