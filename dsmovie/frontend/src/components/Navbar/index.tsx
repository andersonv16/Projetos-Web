import {ReactComponent as GithubIcon} from './../../assets/img/icons8-github.svg'
import './index.css'

function Navbar() {
    return (
  <header>
      <nav className="container">
          <div className="dsmovie-nav-content">
              <h1>DSMovie</h1>
              <a href="https://github.com/Andersonv16" target="_blank" rel="noreferrer">
                  <div className="dsmovie-contact-container">
                      <GithubIcon />
                      <p className="dsmovie-contact-link">/Andersonv16</p>
                  </div>
              </a>
          </div>
      </nav>
  </header>
    );
  }
  
  export default Navbar;
  