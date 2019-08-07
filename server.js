// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/diabeatit");
mongoose.set('useFindAndModify', false);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});






// ----------------------------------------------------------------------------------------------------
// INSTRUCTIONS AND ADDITIONAL NOTES

/*
.gitignore file

For when uploading folder to a GitHub repository.

Create .gitignore file at start of project and include inside it the following lines of code:
node_modules
.DS_Store

It's good practice to always include node_modules in the .gitignore file because this folder can get huge.
We have coded to "require" npm install of any packages necessary for this node app, so if someone clones this repo from
GitHub, all they have to do is npm install any necessary packages for the app to work. Therefore the node_modules folder 
doesn't need to be uploaded to GitHub.



------------------------------------------------------------
COMMAND LINE commands

Before running server.js file in node, install package dependencies listed in package.json
by typing either of the following into the command line:
// npm i            // this is just a shorthand version of npm install
// npm install

Make sure you have run npm i TWICE: Once while in the project root folder directory (where there is one package.json file),
and the the second time in the "client" folder directory (where there is the other package.json file).
The root folder package.json file is for the npm packages that are necessary for the server side files,
The client folder package.json file is for the npm packages that are necessary for the client side (front end side) files.



--------------------
Starting up and running MongoDB with React in a Full Stack App (when running app locally):

In a new command line window, type into the command line 
(This can be from any location of the computer, root level or otherwise. 
For mongod, you don’t necessarily have to be in the project folder):
// mongod

MongoDB must be running first before running the React Full Stack App.



--------------------
Create a Mongo DB database in Robo 3T (when running app locally):

Create an empty database called 'diabeatit' in Robo 3T.

The Schemas inside the models folder will be run automatically by Mongoose when running the app ('npm start')
so no extra local configuration in Robo 3T necessary besides creating the empty database with the name 'diabeatit'.



--------------------
To start the React Full Stack App (when running app locally):

While in the project directory in the command line 
(this must be a separate command line window to the command line window that has mongod running)
type the following to start the React Full Stack App:
// npm start

(for React, use npm start in the command line instead of node server)

The React App will open up automatically in the Chrome Browser



--------------------
Deployment to Heroku and adding mLab plugin to use MongoDB:

The React Full Stack App must first be in a git repository.

From the command line, navigate to the folder where the React Full Stack App resides locally,
then type:
// npm run build

What “npm run build” is doing is the app looks into the package.json file and looks at 
the “scripts” section and runs the “build” line.



Then:
// heroku create    (This creates the app on Heroku.com)



Then:
// git add .
// git commit -m "Enter here commit message of your choice"
// git push heroku master



Adding mLab plugin to use MongoDB on Heroku:
On Heroku, go to the newly created app folder, click the resources tab,
and then add mLab in the Add-ons section.



--------------------
If you need to exit at any point, type into the command line:
// control c



*/