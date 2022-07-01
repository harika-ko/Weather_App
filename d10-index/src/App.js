import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import GetWeather from './Components/GetWeather';

function App() {
  return (
    <div className='main-class'>
      <div className="center">
        <div id="cloud"></div>
      </div>

      <div className="container">
        <div className="sunny"></div>
      </div>
      <div className="header">
        <GetWeather />
      </div>
    </div>
  );
}

export default App;
