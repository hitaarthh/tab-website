import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="hero container">
      <p className="eyebrow">404</p>
      <h1>This tab is empty.</h1>
      <p className="lead">
        The page you're looking for doesn't exist (or has moved). Open a fresh one from the links below.
      </p>
      <div className="hero__ctas">
        <Link className="btn btn--primary" to="/">
          Go home
        </Link>
        <Link className="btn" to="/privacy">
          Privacy policy
        </Link>
        <Link className="btn" to="/terms">
          Terms of service
        </Link>
      </div>
    </section>
  );
}
