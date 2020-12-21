import Link from 'next/link';

const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link href="/"><a className="nav-link">Home</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/about"><a className="nav-link">About</a></Link>
      </li>
    </ul>
  </div>
</nav>
);

export default Navbar;