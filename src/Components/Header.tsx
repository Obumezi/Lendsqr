import Logo from "../assets/companyName.svg";
import '../Variables/Variables.scss'
import Bell from "../assets/Bell.svg";
import avatar from "../assets/avatar.png";
import "../Styles/Header.css";

function Header() {
  return (
    <nav>
      <div className='left-items'>
        <img src={Logo} alt='' />
        <input type="text" className="" id="" />
        <button type="submit" style={{ backgroundColor: '$color_theme', fontSize: '20px', height: '30px', width: '40px' }}></button>
      </div>
      <div className='right-items'>
        <a href='/login'>Docs</a>
        <img className='bell' src={Bell} alt='' />
        <img src={avatar} alt='' />
        <a href='/login'>Adedeji</a>
      </div>
    </nav>
  );
}

export default Header;
