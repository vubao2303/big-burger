# big-burger
You are in for a treat! It is Covid-season so our speak-easy-kissing booth is hiding as a burger shop. 


## Demo-video 

[Demo Video]()  

![Site Picture]()


## Heroku-Deployed

[Deployed Link]()  

# Table of Contents 
[Tittle](#)

[Demo Video](#Demo-video )

[Heroku](#Heroku-Deployed)

[Table of Contents](#Table-of-Content)

[Description of Page Building](#Description-of-Page-Building)

[Code Snippet](#Code-Snippet)

[Technologies Used](#Technologies-Used)

[Author](#Author)

[License](#License)


## Description of Page Building 
* Install dependencies packages using npm install, which inclues 
* Create folders. Make sure to export modules so files can be used in different places.   
* In datase folder, create table with id, name, and boolean value.
* In config folder, add connection and orm files. Connection files set up MySQL connection; orm file contain helper functions for SQL syntax.
* Burger.js file in models table then import the ORM to create functions that will interact with the database.
* Controler file import the model to use its database functions. It creates all our routes and set up logic within those routes where required.


* Public folder
  <ul> 
  <li> Contain javasctip file which activates buttons and send request as well as reload the page to get the updated user input 
  <li> Css file to decorate the page 
  <li> Image file with all the imgages for background and interface 
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
Install npm package 
npm install express

Required variables 
``` Javascript

```

Sets up the Express app to handle data parsing
``` Javascript

```

Set routes to handle when user "visit" the page 
``` Javascript

```

do this because 
``` Javascript 

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


## Author

* **B Tram Vu** 

- [Link to Portfolio Site](https://vubao2303.github.io/portfolio/)
- [Link to Github](https://github.com/vubao2303)
- [Link to LinkedIn](https://www.linkedin.com/in/tram-vu-866250121/)

## License

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.