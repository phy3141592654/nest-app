const mongoose = require('mongoose');
const config = require('config');

const mongooseClient = () => {
  mongoose.connect(
    config.get('mongo').url,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: config.get('mongo').serverSelectionTimeoutMS
    }
  )
    .then(() => {
      console.log('Connected to MongoDB.');
    })
    .catch(err => {
      console.error(err);
    });

  return mongoose;
};
export default mongooseClient();