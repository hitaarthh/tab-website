import type { ReactNode } from "react";
import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="app">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand" aria-label="The Tab — Home">
            <span className="brand__mark" aria-hidden="true">T</span>
            <span className="brand__name">The Tab</span>
          </Link>
          <nav className="nav" aria-label="Primary">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : undefined)}>
              Home
            </NavLink>
            <NavLink to="/privacy" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
              Privacy
            </NavLink>
            <NavLink to="/terms" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
              Terms
            </NavLink>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>© {new Date().getFullYear()} Hitarth Rohra · The Tab</span>
          <div className="site-footer__links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href="mailto:hitarth.rohra@gmail.com">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
