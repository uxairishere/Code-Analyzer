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
            <a className="nav-link nav-heading" href="http://localhost:5000" tabindex="-1" aria-disabled="true">Home</a>
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