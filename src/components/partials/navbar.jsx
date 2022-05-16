const Navbar = () => {
    return(
        <div>
        <nav style={{textAlign: "center"}} className="navbar navbar-expand-lg "  aria-label="Tenth navbar example">
            <hr></hr>
    <div className="container-fluid" >
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""><a style={{color: "white"}} className="nav-link nav-heading dropdown-toggle" aria-current="page" href="#">Smart Code Analizer</a></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-heading" aria-current="page" href="#">Smart Code Analizer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-heading" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled nav-heading" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle nav-heading" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown08">
              <li><a className="dropdown-item nav-heading" href="#">Action</a></li>
              <li><a className="dropdown-item nav-heading" href="#">Another action</a></li>
              <li><a className="dropdown-item nav-heading" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
      
    </div>
    

  </nav>
  <hr style={{color: "white"}}></hr>
  </div>
    );
}

export default Navbar;