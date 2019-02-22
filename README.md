Heroku Link: https://project-bracketri.herokuapp.com/

# Bracketri
![](client/public/assets/Bracketri.JPG)


# Build a Bracket
* This application allow users to create/edit/delete tournaments.(Up to 16)
* Users can create a profile with user authenication. *Please don't use your actual password*
* Users can advance round by round picking the team to advance.
* Includes a stat tracking feature, where user can input 3 statistical category for every matchup
* Users can delete a tournament.

The front-end uses React, React Semantic.
The back-end uses Node.JS, MongoDB, Express, and React Passort. 
* React Passport packages: axios, bcryptjs, jsonwebtoken, mongoose, passport, react-router-dom, validator  


# How to run the app

You will need to have the following installed run the app:

* Node.js
* Express
* Moment
* Mongoose
* Axios


## Deployment

Clone the repository:

``` bash
$ git clone https://github.com/trilemaestro92/bracketri.git
```
``` bash
$ cd bracketri 
```
``` bash
$ yarn install
```
``` bash
$ cd client && yarn install
```
``` bash
$ cd .. && yarn start
```



