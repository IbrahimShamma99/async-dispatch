var asyncDispatchMiddleware = function asyncDispatchMiddleware(store) {
  return function (next) {
    return function (action) {
      var syncActivityFinished = false;
      var actionQueue = [];

      function flushQueue() {
        actionQueue.forEach(function (a) {
          return store.dispatch(a);
        }); // flush queue

        actionQueue = [];
      }

      function asyncDispatch(asyncAction) {
        actionQueue = actionQueue.concat([asyncAction]);

        if (syncActivityFinished) {
          flushQueue();
        }
      }

      var actionWithAsyncDispatch = Object.assign({}, action, {
        asyncDispatch: asyncDispatch
      });
      next(actionWithAsyncDispatch);
      syncActivityFinished = true;
      flushQueue();
    };
  };
};

export default asyncDispatchMiddleware;
