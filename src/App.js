import './App.css'

import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
//import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path = "/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
