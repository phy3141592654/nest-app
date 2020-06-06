import mongooseClient from '../mongoose';

export default (() => {
    const users = new mongooseClient.Schema({
        name: { type: String },
        email: { type: String, required: true }
    }, {
        timestamps: true
    });
    return mongooseClient.model('users', users, 'users');
})();