import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header">
      <div className="logo">
        <span className="logotext">JOB PORTAL</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
