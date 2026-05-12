import { Link } from "react-router-dom";

type Feature = {
  icon: string;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: "S",
    title: "Smart search",
    body:
      "Search the web with Google, jump to open tabs, or fly back into recent history — all from one bar with keyboard-first ergonomics.",
  },
  {
    icon: "C",
    title: "Calendar at a glance",
    body:
      "Optional sign-in surfaces today's Google Calendar meetings on the new tab, read-only and cached locally so nothing leaves your device.",
  },
  {
    icon: "T",
    title: "Tasks in your line of sight",
    body:
      "Your Google Tasks lists show up next to your meetings. Tick things off without losing your browsing flow.",
  },
  {
    icon: "W",
    title: "Weather that's not creepy",
    body:
      "Pick IP-based, browser geolocation, or a city you type. Forecasts come from Open-Meteo. No accounts, no profiles.",
  },
  {
    icon: "F",
    title: "Focus mode + site blocking",
    body:
      "Block the sites that pull you off task during a focus session. Redirects happen locally — nothing is logged or reported.",
  },
  {
    icon: "H",
    title: "Time-on-site, locally",
    body:
      "See where your hours actually went with a private activity heatmap. The data never leaves your browser.",
  },
  {
    icon: "Y",
    title: "YouTube clean mode",
    body:
      "Optional content script that hides recommendations, comments, and end-screens so a quick lookup stays a quick lookup.",
  },
  {
    icon: "P",
    title: "No servers, no tracking",
    body:
      "The Tab has no backend. Your settings, history reads, and time data all live in chrome.storage on your machine.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero container">
        <img
          className="hero__logo"
          src="/icons/icon-256.png"
          srcSet="/icons/icon-128.png 1x, /icons/icon-256.png 2x, /icons/icon-512.png 3x"
          alt="The Tab logo"
          width={96}
          height={96}
          decoding="async"
        />
        <p className="eyebrow">Browser extension · Chrome · Firefox coming soon</p>
        <h1>The only new tab you'll ever need.</h1>
        <p className="lead">
          A calm, fast, private replacement for your browser's new tab page. Search, weather, calendar, tasks,
          time-on-site and more — all stored on your device, none of it phoned home.
        </p>
        <div className="hero__ctas">
          <a
            className="btn btn--primary"
            href="https://chromewebstore.google.com/detail/the-tab/bbpekpgphkhddkkedkfmedoeodckkpmi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add to Chrome
          </a>
          <span
            className="btn btn--disabled"
            aria-disabled="true"
            title="Coming soon"
          >
            Firefox · coming soon
          </span>
          <Link className="btn" to="/privacy">
            How privacy works
          </Link>
        </div>
      </section>

      <section className="section container">
        <h2>What's in the tab</h2>
        <p className="section__lead">
          Everything is opt-in. Turn features off from settings and they disappear from the page and from the network.
        </p>
        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <article className="feature" key={feature.title}>
              <span className="feature__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container container--narrow">
        <h2>Privacy, in one paragraph</h2>
        <div className="privacy-callout">
          <p>
            The Tab has no servers of its own. Settings, blocked sites, time-on-site, cached profile, calendar and
            tasks data all live inside <code>chrome.storage</code> on your device. Network requests only happen when a
            feature you triggered needs them (weather, search suggestions, Google sign-in, Calendar, Tasks), and they
            go directly from your browser to that provider. We don't sell or share your data because we never receive
            it.
          </p>
        </div>
        <p>
          Want the full version with every endpoint, scope, and retention rule listed out?{" "}
          <Link to="/privacy">Read the privacy policy</Link>. The legalese lives on the <Link to="/terms">terms of service</Link>{" "}
          page.
        </p>
      </section>

      <section className="section container container--narrow">
        <h2>Made by one person, in the open</h2>
        <p>
          The Tab is an independent project by{" "}
          <a href="mailto:hitarth.rohra@gmail.com">Hitarth Rohra</a>. Bug reports, feature ideas and privacy questions
          are all welcome at the same address.
        </p>
      </section>
    </>
  );
}
