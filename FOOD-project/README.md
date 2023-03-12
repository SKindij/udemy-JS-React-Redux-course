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

## Axios
Promise based HTTP client for the browser and node.js.<br>
``npm install axios``
> + you can import the library using import or require approach
>     - ``import axios, {isCancel, AxiosError} from 'axios';``
>     - ``import axios from 'axios';``
>     - ``const axios = require('axios');``
> + Using jsDelivr CDN (ES5 UMD browser module):
>     - ``<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>``

## cdnjs
free and open-source CDN service - makes it faster and easier to load library files on your websites


## Web Storage
**localStorage** is a property of the global object of the browser (window). It can be accessed as window.localStorage or just localStorage.<br>
> 1. in Google Chrome open DevTools (F12)
> 2. go to the **"Resources"** tab 
> 3. in left panel you will see the localStorage for this domain and all the values that it contains

For each domain, your browser creates its own localStorage object, and it can only be edited or viewed on that domain.
> ``localStorage.setItem('myKey', 'myValue');``


