# big-burger
You are in for a treat! It is Covid-season so our speak-easy-kissing booth is hiding as a burger shop. Using MySQL, Node, Express, Handlebars and ORM to create a Kissing Booth app where you can add a name of someone you want to kiss, kiss that person again, or delete that person out of the list after you are done kissing them. This project is deployed on Heroku. The user input's name will be display on the left, when the kiss button is clicked, that person's name is moved to the right. Let's migle! 


## Demo-video 

[Demo Video]()  

![Site Picture](public/assets/img/mainpage.png)


## Heroku-Deployed

[Deployed Link]()  

# Table of Contents 
[Tittle](#big-buger)

[Demo Video](#Demo-video )

[Heroku](#Heroku-Deployed)

[Table of Contents](#Table-of-Content)

[Description of Page Building](#Description-of-Page-Building)

[Code Snippet](#Code-Snippet)

[Technologies Used](#Technologies-Used)

[Author](#Author)

[License](#License)


## Description of Page Building 
* Install dependencies packages using npm install, which inclues express, mysql, express-handlebars
* Create folders. Make sure to export modules so files can be used in different places.   
* In datase folder, create table with id, name, and boolean value.
* In config folder, add connection and orm files. Connection file sets up MySQL connection; orm file contains helper functions for SQL syntax.
* Burger.js file in models folder then import the ORM to create functions that will interact with the database.
* Controler file import the model to use its database functions. It creates all our routes and set up logic within those routes where required.


* Public folder
  <ul> 
  <li> Contain javasctip file which activates buttons and send request as well as reload the page to update user input 
  <li> Css file to decorate the page 
  <li> Image file with all the images for background and interface 
  </li>
  </ul>


* Views folder has all the handlebars files, which is the interface of the webstie 

* Server.js file 
  <ul> 
  <li> Serve static content for the app from the "public" directory in the application directory.
  <li> Set Handlebars.
  <li> Parse application body as JSON
  <li>Import routes and give the server access to them.
  <li> Start our server so that it can begin listening to client requests.
  </li>
  </ul>



## Code Snippet
Install npm package: express, mysql, express-handlebars

Required variables 
``` Javascript
var mysql = require("mysql");
var connection = require(`../config/connection.js`);
var express = require(`express`);
var router = express.Router();
var orm = require(`../config/orm.js`);
var PORT = process.env.PORT || 8080;
var app = express();
```

Sets up the Express app to handle data parsing
``` Javascript
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
```

Set routes to handle when user "visit" the page 
``` Javascript
router.get(`/`, (req, res) => {
  burger.all(data => {
    var hbsObject = {
      burger: data
    };
    res.render(`index`, hbsObject);
  });
});

router.post(`/api/burgers`, (req, res) => {
  burger.create([`burger_name`], [req.body.name], result => {
    res.json({ id: result.insertId });
  });
});

```
Add orm object to create helper functions for SQL syntax
``` Javascript
var orm = {
  selectAll(tableInput, cb) {
    var queryString = `SELECT * FROM ${ tableInput };`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
```

Make Connecion with database 
``` Javascript 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});
```


## Technologies Used
- Node - an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.
  * [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/)
- Git - version control system to track changes to source code
  * [Git](https://git-scm.com/)
- GitHub - hosts repository that can be deployed to GitHub Pages
  * [Github](https://github.com/)
- Express - a Node js web application server framework, which is specifically designed for building single-page, multi-page, and hybrid web applications
  * [Express](http://expressjs.com/en/api.html#express)

- Handlebars - uses a template and an input object to generate HTML or other text formats.
  * [Handlebars](https://handlebarsjs.com/guide/)
- -MySQL Database Service - a fully managed database service to deploy cloud-native applications.
  * [MySQL](https://dev.mysql.com/doc/workbench/en/)
## Author

* **B Tram Vu** 

- [Link to Portfolio Site](https://vubao2303.github.io/portfolio/)
- [Link to Github](https://github.com/vubao2303)
- [Link to LinkedIn](https://www.linkedin.com/in/tram-vu-866250121/)

## License

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.