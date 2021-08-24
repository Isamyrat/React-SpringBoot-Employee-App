
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
function App() {
  return (
    <div>
      <Router>
        <div className="container">
          < HeaderComponent />

          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent} />
              <Route path="/employees" component={ListEmployeeComponent} />
              <Route path="/add-employee" component={CreateEmployeeComponent} />
              <ListEmployeeComponent />
            </Switch>
          </div>
          < FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
