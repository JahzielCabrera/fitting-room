const mongoose = require('mongoose');

const { NOTES_APP_HOST, NOTES_APP_DATABASE } = process.env;
const MONGODB_URI = `${NOTES_APP_HOST}/${NOTES_APP_DATABASE}`;

//const MONGODB_URI = ``;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
