import Logo from "../assets/companyName.svg";
import '../Variables/Variables.scss'
import Bell from "../assets/Bell.svg";
import Mag from '../assets/Mag.png'
import avatar from "../assets/avatar.png";
import "../Styles/Header.css";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <>

      <nav>
        <div className='left-items'>
          <img src={Logo} alt='' />
          <input type="text" className="input" id="" placeholder="   Search for anything" style={{ fontFamily: 'Work Sans' }} />
          {/* <button type="submit" style={{ backgroundColor: '$color_theme', fontSize: '20px', height: '30px', width: '40px' }}></button> */}
          <img src={Mag} alt="" />
        </div>
        <div className='right-items'>
          <a href='/login' style={{ fontFamily: 'Work Sans' }}>Docs</a>
          <img className='bell' src={Bell} alt='' />
          <img src={avatar} alt='' />
          <a href='/login' style={{ fontFamily: 'Work Sans' }}>Adedeji</a>
        </div>
      </nav>

      {/* <Sidebar /> */}
    </>
  );
}

export default Header;
