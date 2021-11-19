
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Menu from './components/NavBar'
import  ItemList from './components/ItemListContainer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faShoppingCart)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <ItemList />
    </div>
  );
}

export default App;
