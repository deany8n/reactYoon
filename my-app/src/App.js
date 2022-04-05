
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';






function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  )
}


export default App;
