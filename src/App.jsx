import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderForm from './components/OrderForm';
import Success from './components/Success';

function App() {
  

  return (
    <>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/order" component={OrderForm}/>
            <Route path="/success" component={Success}/>
        </Switch>
    </>
  )
}

export default App
