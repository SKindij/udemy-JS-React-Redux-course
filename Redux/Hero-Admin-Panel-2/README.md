# Hero Admin Panel

## Getting Started

&emsp; This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### [cra-template-redux](https://github.com/reduxjs/redux-templates/tree/master/packages/cra-template-redux) - official Redux+JS template for Create React App
+ init: ``npx create-react-app hero-admin-panel-2 --template redux``
+ go: ``cd hero-admin-panel-2``

+ build: ``npm i bootstrap``
+ build: ``npm i sass``
+ build: ``npm i classnames``
  - web: https://www.npmjs.com/package/classnames
  - A simple JavaScript utility for conditionally joining classNames together.
+ build: ``npm i -D concurrently``
  - web: https://www.npmjs.com/package/concurrently
  - Run multiple commands concurrently. 
+ build: ``npm i uuid``
  - web: https://www.npmjs.com/package/uuid
  - For the creation of RFC4122 UUIDs
+ build: ``npm install reselect``
  - web: https://github.com/reduxjs/reselect
  - A library for creating memoized "selector" functions. 
+ build: `npm install redux-thunk```
  - web: https://github.com/reduxjs/redux-thunk
  -  It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

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



















