# gulpheadsup
Insight to how to start using gulp as a build pipleline

## Steps to Work with
	$ npm install
Installs Node Modules required mentioned in dependencies list and devDependencies list

##
	$ gulp
This will trigger default task in gulpfile.js file
##
	$ gulp build
This will do a complete build pipeline which concatenates and minifies/uglifies css/js and images files and injects to html file.
This will create a dist folder, try running index.html file from dist folder
##
	$ gulp jshint
This will show if you commit any mistakes while coding Javascript files