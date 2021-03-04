import { NavLink } from 'react-router-dom';
  

function HeaderPage () {
    return(
        <>
            <h1 className="font-weight-bolder App p-4">Shop Manager</h1>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4" >
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li className='nav-item'>
                            <NavLink to='./' className="nav-link" >Main</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='./products' className="nav-link " >Our Products</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='./login' className="nav-link " >Login</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex justify-content-end">
                        <input to='./products/product' className="form-control mr-sm-2 p-2" type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0 p-2" type="submit" >Search</button>
                    </form>
                </div>
            </nav>   

        </>
    )
};

export default HeaderPage;

