
import './App.css';
import { useState } from 'react'
import ProductsProvider from "./context/ProductsProvider";
import ProductsPage from './components/pages/ProductsPage';
import ProductDetailsPage from './components/pages/ProductDetailsPage';
import HeaderPage from './components/pages/HeaderPage';
import FooterPage from './components/pages/FooterPage'
import LoginPage from './components/pages/LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegistrationForm from './components/pages/RegistrationForm';
//import ProductsDetailsPage from './components/pages/ProductDetailsPage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  const ProtectedRoute = (props) => {
    if (!loggedIn) return <Redirect to="/login" />
    return <Route {...props} />
  };

  return (
  <div>
    <HeaderPage loggedIn={loggedIn}/>
    <ProductsProvider>
      <Switch>

        <Route path='/login'>
          <LoginPage/>
        </Route>
        <Route path='/register' component={RegistrationForm}>
          
        </Route>
        <ProtectedRoute path='/products' component={ProductsPage} exact />
        <ProtectedRoute path='/products/:search' component={ProductDetailsPage} exact />

      </Switch>
    </ProductsProvider>
    <FooterPage />
  </div>

  );
}



export default App;
