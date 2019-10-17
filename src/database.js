const mongoose = require('mongoose');

mongoose.connect('YOUR_MONGO_URI_GOES_HERE', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'))
    .catch(e => console.log(e));
