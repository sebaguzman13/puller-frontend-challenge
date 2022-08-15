import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RouterSwitch } from './routes/RouterSwitch';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <RouterSwitch />
      </BrowserRouter>
    </div>
  );
}

export default App;
