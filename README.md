# IMGSTG to CSV

Takes member data outputted from [IMGSTG](http://www.imgstg.com/) and converts it to.CSV format so that it can be imported into MailChimp. We use it for the [Northern United Hockey Club](http://nuhc.org.nz), written in [Node.js](https://nodejs.org/)

First set the vars in index.js

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

Then run the following commands;

    npm install
    node index

### License

[WTFPL](http://www.wtfpl.net/)
