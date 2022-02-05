import Link from "next/link";

export default function NavBar() {
  return (
    <header id="masthead" className="site-header">
      <div className="site-branding">
        <h1 className="site-title">
          <Link href="/">Travel Blog</Link>
        </h1>
        <h2 className="site-description">Minimalist Portfolio HTML Template</h2>
      </div>
      <nav id="site-navigation" className="main-navigation">
        <button className="menu-toggle">Menu</button>
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>
        <div className="menu-menu-1-container">
          <ul id="menu-menu-1" className="menu nav-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
