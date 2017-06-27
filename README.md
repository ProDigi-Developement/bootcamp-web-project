Project Boilerplate
=====================

A minimal and light dev environment for ProDigi bootcamp


Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [Material UI](material-ui.com)


### Exercises 

Branch randomuser_checkpoint
Add email field in Card Component
Add avatar image to Card Component
http://www.material-ui.com/#/components/card look at CardHeader properties to add avatar
Create person bio text for CardText component inside PersonCardComponent
Replace the Lorem Ispum text with something like This person lives at {address} and his DOB is {DOB}