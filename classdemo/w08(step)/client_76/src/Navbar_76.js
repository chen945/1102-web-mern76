import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar_76 = () => {
const {openSidebar,openSubmenu,closeSubmenu}=useGlobalContext();

const displaySubmenu=(e)=>{
  console.log('e.target',e.target.getBoundingClientRect());
  const tempBtn =e.target.getBoundingClientRect();
  const page = e.target.textContent;
  const center=(tempBtn.left+tempBtn.right)/2;
  const bottom =tempBtn.bottom-3;
  openSubmenu(page,{center,bottom});
}  

const handleSubmenu=(e)=>{
  //console.log(e.target)
  if (!e.target.classList.contains('link-btn')){
    closeSubmenu();
  }
}
  return(
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li className="link-btn" onMouseOver={displaySubmenu}>Products</li>
          <li className="link-btn" onMouseOver={displaySubmenu}>Developers</li>
          <li className="link-btn" onMouseOver={displaySubmenu}>Company</li>
        </ul>
      </div>
      <button className="btn signin-btn">Sign in</button>
    </nav>
  )
}

export default Navbar_76