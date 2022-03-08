import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [{name: 'kimchi', price: '50'}, {name: 'lechuga', price: '67'}, { name: 'tomate', price: '32'}]

function App() {
  return (
    <div className="App">
      <Navbar/>
      {products.map(product => (<Product name={product.name} price={product.price} />))}
    </div>
  );
}

export default App;
