// Stringifies all of the children objects inside the data set
const formatProfileData = ( data ) => {
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

module.exports = { formatProfileData };
