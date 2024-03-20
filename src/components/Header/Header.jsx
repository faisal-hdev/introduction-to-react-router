import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <span>My website</span>
      <nav>
        {/* <Link to="/">Home</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact as</Link> */}
      </nav>
    </div>
  );
};

export default Header;
