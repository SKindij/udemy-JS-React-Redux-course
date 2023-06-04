# Hero Admin Panel

## Getting Started

&emsp; This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### [cra-template-redux](https://github.com/reduxjs/redux-templates/tree/master/packages/cra-template-redux) - official Redux+JS template for Create React App
+ init: ``npx create-react-app hero-admin-panel-2 --template redux``
+ go: ``cd hero-admin-panel-2``

+ build: ``npm i bootstrap``
+ build: ``npm i sass``
+ build: ``npm i react-transition-group``
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

```javascript
"scripts": {
    "start": "concurrently \"react-scripts start\" \"npx json-server heroes.json --port 3001\"",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

- - -

### reduxjs/toolkit
web: https://redux-toolkit.js.org/introduction/getting-started#whats-included
* ``import { configureStore } from '@reduxjs/toolkit';``
  + reducer
  + middleware (_actionCreatorInvariant, immutableStateInvariant, thunk, serializableStateInvariant_)
  + devTools
* ``import { createAction, createReducer } from '@reduxjs/toolkit'``
  + builder.addCase
  + builder.addMatcher
  + builder.addDefaultCase
* ``import { createAction } from '@reduxjs/toolkit'``
  + actionCreator.match
* import { createSlice } from '@reduxjs/toolkit'
  + initialState
  + reducers
  + extraReducers

- - -

```javascript
"dependencies": {
    "@reduxjs/toolkit": "^1.9.5",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.4.3",
    "bootstrap": "^5.3.0",
    "classnames": "^2.3.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.7",
    "react-scripts": "^5.0.1",
    "react-transition-group": "^4.4.5",
    "redux-thunk": "^2.4.2",
    "reselect": "^4.1.8",
    "sass": "^1.62.1",
    "uuid": "^9.0.0",
    "web-vitals": "^2.1.4"
  },
```

- - -

### Available Scripts

+ run: ``npm start``
  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - The page will reload when you make changes.
+ run: ``npm run build``
  - Builds the app for production to the `build` folder.
  - The build is minified and the filenames include the hashes.



















