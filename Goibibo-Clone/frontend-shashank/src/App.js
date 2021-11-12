
import './App.css';
import { Inputbar } from './components/inputbar';
import { Flight } from './components/flightdetails';
import {Switch ,Route ,Link} from 'react-router-dom';
import { Seat } from './components/seatpicker';
import {Footer} from './components/footer';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route path="/" exact>
        <Inputbar/>
        </Route>
      </Switch >


      <Switch >
        <Route path="/flights" exact>
      <Flight/>
        </Route>
      </Switch >

      <Seat/>
      
      <Footer/>
    
    </div>
  );
}


export default App;
