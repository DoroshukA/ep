const mongoose = require('mongoose');
const config = require('./config/db');


mongoose.connect(config.db);

mongoose.connect.on('connected', () => {
    console.log("OK")
});

mongoose.connect.on('error', (err) => {
    console.log(":(((((")
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));