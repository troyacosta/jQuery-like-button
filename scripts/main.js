'use strict';

var likeButton = $('#likeButton');
var resetButton = $('#resetButton');
var count = 1;


likeButton.on('click', function() {
    if (count === 1) {
        likeButton.html(count + ' LIKE');
    } else {
        likeButton.html(count + ' LIKES');
    }
    count++;
});
resetButton.on('click', function() {
	count = 1;
	likeButton.html('0 LIKES');
});
