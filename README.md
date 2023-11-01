1. Initialize json with npm init -y

2. Install sass with npm install sass

3. create .gitignore and add node_modules

4. create scss folder in which we will compile our sass

5. add   "sass:build": "sass --no-source-map scss:css" to scripts in package.json

6. create root html file or html.index file in root of project and add to the heads <link rel="stylesheet" href="css/styles.css">

7. add     "sass:watch": "sass --no-source-map --watch scss:css" to scripts in package.json. Now you can run npm run sass:watch in terminal to watch sass

8. run npm i bootstrap, add <link rel="stylesheet" href="css/bootstrap.css" /> to html file head

9. create js folder and script.js file, add the file to index.html

10. create bootstrap.scss file in scss folder

11. add @import '../node_modules/bootstrap/scss/bootstrap.scss'. Now we can add our custom styles and they will overwrite bootstraps defaults, make sure your custom styles go above the @import line. Go into node_modules/bootstrap/scss/_variables.scss to line 300 to see bootstrap defaults...

12. add <link rel="stylesheet" href="css/bootstrap.css"> in index.html above our other css styles link

13. go into node_modules/bootstrap/dist/js and copy bootstrap.bundle.min.js and paste into js folder

14. include <script src="js/bootstrap.bundle.min.js"></script> in  root html above other script

15. download font-awesome with npm i @fortawesome/fontawesome-free

16. create fontawesome.scss file in scss folder and add
@import '../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
@import '../node_modules/@fortawesome/fontawesome-free/scss/brands.scss';
@import '../node_modules/@fortawesome/fontawesome-free/scss/solid.scss';


17. add <link rel="stylesheet" href="css/fontawesome.css"> above other css links in root html

18. run npm run sass:build to create fontawesome.css file in css folder

19. go into node_modules/@fortawesome and copy the webfonts folder and paste it into the root of your project




