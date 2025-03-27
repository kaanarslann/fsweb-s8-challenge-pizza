import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderForm from './components/OrderForm';
import Success from './components/Success';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({});

  return (
    <>
        <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/order">
              <OrderForm setFormData={setFormData}/>
            </Route>
            <Route path="/success">
              <Success formData={formData}/>
            </Route> 
        </Switch>
    </>
  )
}

export default App
