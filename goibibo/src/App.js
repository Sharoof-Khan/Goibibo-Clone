import logo from './logo.svg';
import './App.css';
import { Test } from './components/carousel';
// import { O } from './components/main';
import { Offer } from './components/OfferCarousel';
import { ProductCarousel } from './components/ProductCarousel';




function App() {
  return (
    <div className="App">

      <Offer />
      < ProductCarousel/>

      
     
      
    </div>
  );
}

export default App;
