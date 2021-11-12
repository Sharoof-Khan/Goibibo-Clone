
import './App.css';

import Checkout from './Components/Checkout/Checkout';
import { Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div >
      <Route path="/flight">
        <Navbar />
        </Route>
      <Route path="/checkout">
        {/* <Navbar /> */}
        <Checkout />
      </Route>
    </div>
  );
}

export default App;


