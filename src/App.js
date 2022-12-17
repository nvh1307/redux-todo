import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todos';

import {Provider} from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>


    <div className="App">
      <Navbar></Navbar>
      <Todo></Todo>
    </div>
    </Provider>
  );
}

export default App;
