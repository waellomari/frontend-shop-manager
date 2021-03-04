
import './App.css';
import {useState } from 'react'
import ProductsPage from './components/pages/ProductsPage';
import ProductDetailsPage from './components/pages/ProductDetailsPage';
import HeaderPage from './components/pages/HeaderPage';
import FooterPage from './components/pages/FooterPage'
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//import ProductsDetailsPage from './components/pages/ProductDetailsPage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const ProtectedRoute = (props) => {
    if (!loggedIn) return <Redirect to="/login" />
    return <Route {...props} />
  };

  return (
  <Router>
    <HeaderPage />
    
    <Switch>

      <Route path='/login'>
        <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Route>
      <ProtectedRoute path='/products' component={ProductsPage} />
      <ProtectedRoute path='/products/:productId' component={ProductDetailsPage} />
    </Switch>

    <FooterPage />
  </Router>

  );
}



export default App;
