export default function createStore(reducer){
// your code here!

  let state;
  let listeners = [];

  const getState = function(){
    return state;
  }

  const dispatch = function(action){
    state = reducer(state, action);
    listeners.forEach(function(listener){
      return listener();
    })
  }

  dispatch({})

  const subscribe = function(listener){
    listeners.push(listener);
  }
    

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }

}
