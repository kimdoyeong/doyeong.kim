import { createStore as reduxCreateStore } from "redux"
import reducer from './reducer';
function createStore() {
  return reduxCreateStore(reducer, process.env.NODE_ENV === 'development' && (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
}


export default createStore;