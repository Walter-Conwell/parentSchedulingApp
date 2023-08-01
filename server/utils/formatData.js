// Stringifies all of the children objects inside the data set
const stringifyChildData = ( data ) => {
    if ( data[0] ){ // Detects if data is an array
        for ( let i = 0; i < data.length; i++ ) {
            for ( let j = 0; j < data[i].children.length; j++ ) {
                delete data[i].children[j]._id;
                data[i].children[j] = JSON.stringify(data[i].children[j]);
            }
        }
    } else {
        for ( let i = 0; i < data.children.length; i++ ) {
            delete data.children[i]._id;
            data.children[i] = JSON.stringify(data.children[i]);
        }
    }
    return data;
};

const stringifyCommentData = ( data ) => {
    if ( data[0] ){ // Detects if data is an array
        for ( let i = 0; i < data.length; i++ ) {
            for ( let j = 0; j < data[i].comments.length; j++ ) {
                // delete data[i].comments[j]._id;
                data[i].comments[j] = JSON.stringify(data[i].comments[j]);
            }
        }
    } else {
        for ( let i = 0; i < data.comments.length; i++ ) {
            // delete data.comments[i]._id;
            data.comments[i] = JSON.stringify(data.comments[i]);
        }
    }
    return data;
};

module.exports = { stringifyChildData, stringifyCommentData };
