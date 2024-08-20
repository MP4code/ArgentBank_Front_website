import { Provider } from 'react-redux'
import { store } from './data/store.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      </div>
    </Provider>
  );
}

export default App;
