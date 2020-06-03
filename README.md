# async-dispatch middleware
[![npm](https://img.shields.io/npm/v/async-dispatch.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/async-dispatch)

> async-dispatch is a middleware can be added with no time to privilage the asynchronous into your store

For more informatiom about the future of redux-logger, check out the [discussion here](https://github.com/IbrahimShamma99/asynDispatch-middleware/issues).

## Table of contents
* [Install](#install)
* [Usage](#usage)
* [License](#license)

## Install
`npm i --save async-dispatch`

## Usage
```javascript
import asyncDispatchMiddleware from "async-dispatch";
import { createStore } from "redux";
import { applyMiddleware } from "redux";

const store = createStore(
  rootReducer,
    applyMiddleware(asyncDispatchMiddleware)
);
// Note passing middleware as the third argument requires redux@>=3.1.0
```


## To Do
- [ ] Adding typeScript types

## License
MIT