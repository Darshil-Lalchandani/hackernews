import './App.css'

import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Ask from './pages/Ask'
import Show from './pages/Show'
import Jobs from './pages/Jobs'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Switch>
      <Route exact path = "/">
        <Home />
      </Route>
      <Route exact path = "/newest">
        <New />
      </Route>
      <Route exact path = "/ask">
        <Ask />
      </Route>
      <Route exact path = "/show">
        <Show />
      </Route>
      <Route exact path = "/jobs">
        <Jobs />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
