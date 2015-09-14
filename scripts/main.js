'use strict';

var likeButton = $('#likeButton');
var count = 1;


likeButton.on('click', function() {
    if (count === 1) {
        likeButton.html(count + ' LIKE');
    } else {
        likeButton.html(count + ' LIKES');
    }
    count++;
});
