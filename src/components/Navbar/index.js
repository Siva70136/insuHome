import {Link} from 'react-router-dom'
import {FiPhone} from 'react-icons/fi'
import './index.css'

const Navbar = () => {
  
  console.log("J");
  
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://webingo.in/images/logo-client/A2-1.png"
              alt="website logo"
            />
          </Link>

          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://webingo.in/images/logo-client/A2-1.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                ITSOLUTIONS+
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                STARTUPBOX+
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                COMPANY+
                
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                PURCHASE+
                
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                PORTFOLIO
                
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                CAREER
                
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                REACHUS+
                
              </Link>
            </li>
            
            <li className="nav-menu-ite">
                <button
                type="button"
                className="logout-desktop-btn">
                <FiPhone />
            </button>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
