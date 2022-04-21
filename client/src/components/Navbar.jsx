import logo from '../assets/logo192.png';
const Navbar = () => {
  return (
    <div className="navabr">
      <span className="logo">Dambujo Auth App</span>
      <ul className="list">
        <li className="listItem">
          <img src={logo} alt="" className="avatar" />
        </li>
        <li className="listItem">John Doe</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
