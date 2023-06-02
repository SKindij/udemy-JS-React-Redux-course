# Hero Admin Panel

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
+ init: ``npx create-react-app hero-admin-panel``
+ go: ``cd hero-admin-panel``

### Getting Started
+ build: ``npm i bootstrap``
+ build: ``npm i sass``
> CDN links 
> * ``https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css``
> * ``https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js``
+ build: ``npm i redux react-redux``
+ build: ``npm i classnames``
  - web: https://www.npmjs.com/package/classnames
  - A simple JavaScript utility for conditionally joining classNames together.
+ build: ``npm i -D concurrently``
  - web: https://www.npmjs.com/package/concurrently
  - Run multiple commands concurrently. 
+ build: ``npm i uuid``
  - web: https://www.npmjs.com/package/uuid
  - For the creation of RFC4122 UUIDs
+ build: ``npm install -g json-server``
  - Install JSON Server
  - web: https://www.npmjs.com/package/json-server
  - POST, PUT or PATCH request should include Content-Type: application/json header

```javascript
"scripts": {
    "start": "concurrently \"react-scripts start\" \"npx json-server heroes.json --port 3001\"",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

### Available Scripts

+ run: ``npm start``
  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - The page will reload when you make changes.
+ run: ``npm run build``
  - Builds the app for production to the `build` folder.
  - The build is minified and the filenames include the hashes.
