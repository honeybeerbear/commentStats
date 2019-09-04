const { Comment } = require('./models');

const commentJson = {
    author:'test',
    permlink:'123',
    parent_permlink:'par_permlink',
    tags:['sct', 'zzan'],
    app:['steem ver0.1'],
};

Comment.create(commentJson).then(() => {
    console.log('success');
}).catch((e) => {
    console.log('error');
    console.log(e);
});