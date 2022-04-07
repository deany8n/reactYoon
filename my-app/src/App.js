
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'







function App() {
  return (
    <div className="App">
      <Navbar/>
   <ItemDetailContainer/>
      
    </div>
  )
}


export default App;
