import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import Routes from './Routes';
import { TOKEN } from './storage/actions';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
