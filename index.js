var path = require('path');
var fs = require('fs');

/** Set this to the file that has been outputted from IMGSTG **/
var INPUT_FILE = './data/members.html';
/** Set this to the file that will be outputted from the program **/
var OUT_FILE = './output/members.csv';

/** Set this to the column that firstNames are listed in (first column is column 0) **/
var firstNameCol = 1;
/** Set the column the lastNames are listed in **/
var lastNameCol = 4;
/** Set the column the emails are listed in **/
var emailCol = 12;

'use strict'
var env = require('jsdom').env;
env(path.resolve(INPUT_FILE), function (errors, window) {
	if (errors) {
		console.error(errors);
	}
	var out = '';
	var $ = require('jquery')(window);
	$('tr').not(':first').each(function( index ){
		$children = $(this).children();
		var firstName = $children[firstNameCol].textContent;
		var lastName = $children[lastNameCol].textContent;
		var email = $children[emailCol].textContent;
		out += firstName + ',' + lastName + ',' + email + '\n';
	});
	fs.writeFile(path.resolve(OUT_FILE), out, 'utf8', function(err){
		if (err) {
			console.error(err);
		}
	});
});
