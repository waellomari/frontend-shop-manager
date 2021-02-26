import Products from './components/Products';
import './App.css';

function App() {
  return (
  <>
    <h1 className="font-weight-bolder App">Home Page</h1>
    <nav className="navbar navbar-dark bg-dark" >
      <a href='#!' className="navbar-brand " >Our Products</a>
    </nav>
    <Products className= 'container'/>
  </>

  );
}



export default App;
