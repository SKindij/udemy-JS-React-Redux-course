## JSON Server
Full fake REST API for front-end developers who need a quick back-end for prototyping and mocking.<br>
``npm install json-server --save-dev``
> + create a **db.json file** with menu data
> + start JSON Server => ``npx json-server db.json``
>    * Resources
>        - http://localhost:3000/menu
>        - http://localhost:3000/requests
>    * Home
>        - http://localhost:3000
> + if you make POST, PUT, PATCH or DELETE requests, 
> changes will be automatically and safely saved to db.json using **lowdb**






