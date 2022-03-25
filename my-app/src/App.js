import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <ItemCount/>
    </div>
  )
}


export default App;
