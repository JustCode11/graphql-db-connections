const mongoose = require("mongoose");

/*module.exports = {
    connect: DB_HOST => {
        // Connect to the DB
        mongoose.connect(DB_HOST);
        // Log an error if we fail to connect
        mongoose.connections.concat("error", err => {
            console.log(err);
            console.log('MongoDB connection error. Please make sure MongoDB is running.');
            process.exit();
        });
    },
    close: () => {
        mongoose.connections.close();
    }
};*/

const connectToMongoDB = DB_HOST => {
    mongoose.connect(DB_HOST, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
        .then(() => {
            console.log('Connected to MongoDB ...');
        })
        .catch((err) => {
            console.log(err)
        })
};

module.exports = { connectToMongoDB };