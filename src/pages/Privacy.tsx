export default function Privacy() {
  return (
    <article className="doc container container--narrow">
      <header className="doc__header">
        <p className="eyebrow">Privacy Policy</p>
        <h1>How The Tab handles your data</h1>
        <p className="meta">
          <strong>The Tab</strong> · Browser extension for Chrome and Firefox · Effective May 12, 2026
        </p>
      </header>

      <p>
        This document explains what data <strong>The Tab</strong> (the "extension") processes, where that data is
        stored, and which third-party services your browser may contact while you use the extension. It is written so
        a non-lawyer can read it once and understand exactly what happens.
      </p>

      <div className="privacy-callout">
        <p>
          <strong>Plain-English summary.</strong> The Tab has no servers of its own. Everything you do with the
          extension — your settings, your blocked sites, your time-on-site history, your cached Google profile, your
          cached calendar events, your cached tasks — stays inside your browser on your device. Network requests only
          happen when a feature you triggered needs them (weather lookup, search suggestions, Google sign-in, Calendar,
          Tasks, etc.), and each of those goes directly from your browser to the third party listed below. We do not
          sell or share your data, because we never receive it.
        </p>
      </div>

      <nav className="toc" aria-label="Table of contents">
        <h2>Contents</h2>
        <ol>
          <li><a href="#who">Who publishes The Tab</a></li>
          <li><a href="#data">Data the extension processes</a></li>
          <li><a href="#google-account">Google account sign-in (optional)</a></li>
          <li><a href="#third-parties">Third-party services your browser may contact</a></li>
          <li><a href="#do-not">What The Tab does not do</a></li>
          <li><a href="#retention">Data retention and deletion</a></li>
          <li><a href="#rights">Your rights and choices</a></li>
          <li><a href="#limited-use">Google API limited-use disclosure</a></li>
          <li><a href="#children">Children</a></li>
          <li><a href="#changes">Changes to this policy</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </nav>

      <h2 id="who">1. Who publishes The Tab</h2>
      <p>
        The Tab is an independent project published by Hitarth Rohra. You can reach the publisher at{" "}
        <a href="mailto:hitarth.rohra@gmail.com">hitarth.rohra@gmail.com</a>. The same email is listed as the developer
        contact on the Chrome Web Store and Firefox Add-ons listings.
      </p>

      <h2 id="data">2. Data the extension processes</h2>
      <p>
        The extension handles a small number of distinct data categories. Unless explicitly noted, everything below is
        processed locally inside your browser via Chrome / WebExtension APIs (<code>chrome.storage.local</code>,{" "}
        <code>chrome.history</code>, <code>chrome.tabs</code>, etc.) and is never transmitted to us or to any external
        server.
      </p>

      <h3>2.1 Settings and preferences</h3>
      <p>
        Your theme, blocked-sites list, YouTube clean-mode toggle, clock format, weather unit, custom display name, and
        similar preferences are stored in <code>chrome.storage.local</code>. They live alongside the extension on your
        device and travel with your Chrome profile if you have Chrome Sync enabled (Chrome handles that sync, not us).
      </p>

      <h3>2.2 Browsing history (read-only)</h3>
      <p>
        With the <code>history</code> permission you granted at install time, the extension reads from Chrome's history
        database to power two features:
      </p>
      <ul>
        <li>The search dropdown ranks recently visited URLs and the open tabs that match what you're typing.</li>
        <li>The activity heatmap aggregates how long you spent on each site, locally.</li>
      </ul>
      <p>
        Reads happen on the new-tab page or in the extension's background worker.{" "}
        <strong>History data is never transmitted off your device.</strong>
      </p>

      <h3>2.3 Open tabs (read-only)</h3>
      <p>
        With the <code>tabs</code> permission, the extension queries the list of currently open tabs so it can offer
        "Switch to tab" suggestions in the search dropdown. The tab list is read in-memory and is never written to
        storage or sent over the network.
      </p>

      <h3>2.4 Time-on-site (dwell-time analytics)</h3>
      <p>
        The extension observes navigation events (<code>chrome.webNavigation</code>) and idle state (
        <code>chrome.idle</code>) to estimate how long the active tab was actually in use. Per-domain totals are
        aggregated by day and stored locally. Where implemented, individual time entries are encrypted at rest with a
        key stored in <code>chrome.storage.session</code> using the Web Crypto API.
      </p>

      <h3>2.5 Site-blocking</h3>
      <p>
        When you visit a domain on your blocked list during a focus session, the extension redirects the tab to its
        internal <em>Not now</em> page. The check happens locally in <code>chrome.webNavigation.onBeforeNavigate</code>.
        The URL of the blocked attempt is shown on that page so you know what triggered the block; it is not logged
        anywhere else.
      </p>

      <h3>2.6 Weather (optional feature)</h3>
      <p>
        If you keep the weather card enabled, your browser makes the network requests described in{" "}
        <a href="#third-parties">section 4</a>. The location used depends on the mode you pick in settings:
      </p>
      <ul>
        <li>
          <strong>IP-based</strong> (default): your browser's public IP is sent to a third-party IP-geolocation
          provider which returns an approximate city. Your IP never reaches us.
        </li>
        <li>
          <strong>Browser geolocation</strong>: requires your one-time consent through Chrome's native location prompt.
          Coordinates are passed to Open-Meteo for the forecast and to BigDataCloud for a coarse reverse-geocode label.
        </li>
        <li>
          <strong>Manual</strong>: the city or postal code you typed is sent to Open-Meteo's geocoding API and then to
          the forecast endpoint.
        </li>
      </ul>
      <p>
        Weather responses are cached in <code>chrome.storage.local</code> for a short period to avoid hammering the
        upstream service.
      </p>

      <h3>2.7 Search suggestions</h3>
      <p>
        As you type in the search bar, your query is sent over HTTPS to Google's public suggestion service (
        <code>suggestqueries.google.com</code>) to retrieve autocomplete options. This is the same endpoint Chrome
        itself uses; we add no telemetry on top.
      </p>

      <h3>2.8 Google Lens / image search (when used)</h3>
      <p>
        If you drop or upload an image into the Lens dialog, the image is posted directly to Google's{" "}
        <code>searchbyimage</code> endpoint. If you paste an image URL, the URL is sent to Google Lens via the{" "}
        <code>lens.google.com/uploadbyurl</code> endpoint. The extension does not see or retain the image.
      </p>

      <h3>2.9 Google Calendar (optional, requires sign-in)</h3>
      <p>
        If you sign in with Google and grant the <code>calendar.readonly</code> scope, the extension fetches your
        upcoming events from Google Calendar's API (<code>www.googleapis.com/calendar/v3</code>) so the meetings panel
        on the new-tab page can show what's next. The extension only reads events — it cannot create, modify, or delete
        anything on your calendar. Event titles, times, and join links are cached in <code>chrome.storage.local</code>{" "}
        for a short period so the panel renders instantly between refreshes. No calendar data is ever transmitted to
        us; it goes directly from your browser to Google.
      </p>

      <h3>2.10 Google Tasks (optional, requires sign-in)</h3>
      <p>
        If you sign in with Google and grant the <code>tasks.readonly</code> scope, the extension fetches your task
        lists and items from the Google Tasks API (<code>tasks.googleapis.com/tasks/v1</code>) so the tasks panel can
        display them. The scope is read-only — the extension cannot add, edit, complete, or delete tasks on your
        account. Tasks are cached locally for short-term display only and never sent anywhere besides Google.
      </p>

      <h3>2.11 YouTube clean mode (content script)</h3>
      <p>
        When enabled, a content script runs on <code>*.youtube.com</code> pages and hides DOM elements such as the
        recommendation rail, comments, and end-screen overlays. The script does not read your viewing history, does
        not contact any network endpoint, and does not transmit anything off the page.
      </p>

      <h2 id="google-account">3. Google account sign-in (optional)</h2>
      <p>
        If — and only if — you tap <em>Continue with Google</em> during onboarding or on the navbar avatar, the
        extension uses Chrome's <code>identity</code> API to request an OAuth 2.0 access token. With your consent the
        extension then fetches a small profile from Google's OAuth userinfo endpoint (
        <code>oauth2.googleapis.com/userinfo</code>) and, if you granted the additional read-only scopes, your
        calendar events and task lists.
      </p>
      <p>The scopes The Tab requests are:</p>
      <ul>
        <li>
          <code>https://www.googleapis.com/auth/userinfo.profile</code> — your name and profile picture URL, shown in
          the new-tab UI.
        </li>
        <li>
          <code>https://www.googleapis.com/auth/userinfo.email</code> — your primary email, shown next to the avatar.
        </li>
        <li>
          <code>https://www.googleapis.com/auth/calendar.readonly</code> — <strong>read-only</strong> access to your
          Google Calendar events, used to render the upcoming-meetings panel on the new tab. The extension cannot
          modify, create, or delete events.
        </li>
        <li>
          <code>https://www.googleapis.com/auth/tasks.readonly</code> — <strong>read-only</strong> access to your
          Google Tasks lists and items, used to render the tasks panel on the new tab. The extension cannot modify,
          create, complete, or delete tasks.
        </li>
      </ul>
      <p>
        The profile, calendar, and tasks data returned are cached in <code>chrome.storage.local</code> for a short
        period (up to 24 hours for profile data; shorter for calendar and tasks so they stay fresh) and refreshed
        silently from Google on subsequent new-tab loads while a valid token exists. When you sign out (the{" "}
        <em>Change</em> button in onboarding, or the sign-out control in the avatar menu), the extension calls Google's
        revocation endpoint (<code>oauth2.googleapis.com/revoke</code>) and removes the cached token, profile,
        calendar, and task data from your browser.
      </p>

      <h2 id="third-parties">4. Third-party services your browser may contact</h2>
      <p>
        The extension does not relay your data through any server we operate. Instead, your browser talks directly to
        the following providers when the corresponding feature runs. Each provider has its own privacy policy linked
        below.
      </p>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Used for</th>
            <th>Triggered when</th>
            <th>Policy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google OAuth + Userinfo</td>
            <td>Name, email, profile picture</td>
            <td>You sign in with Google</td>
            <td><a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google</a></td>
          </tr>
          <tr>
            <td>Google Calendar API</td>
            <td>Upcoming meetings (read-only)</td>
            <td>You sign in and the meetings panel is enabled</td>
            <td><a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google</a></td>
          </tr>
          <tr>
            <td>Google Tasks API</td>
            <td>Task lists and items (read-only)</td>
            <td>You sign in and the tasks panel is enabled</td>
            <td><a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google</a></td>
          </tr>
          <tr>
            <td>Google Suggest</td>
            <td>Search autocomplete</td>
            <td>You type in the search bar</td>
            <td><a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google</a></td>
          </tr>
          <tr>
            <td>Google Lens / Image Search</td>
            <td>Reverse image search</td>
            <td>You upload an image or paste an image URL</td>
            <td><a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google</a></td>
          </tr>
          <tr>
            <td>Google Favicon service (<code>s2/favicons</code>)</td>
            <td>App icons in the Google apps grid</td>
            <td>You open the apps menu</td>
            <td><a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google</a></td>
          </tr>
          <tr>
            <td>Google Fonts (<code>fonts.googleapis.com</code>, <code>fonts.gstatic.com</code>)</td>
            <td>Web fonts used in the UI</td>
            <td>The new tab, settings, or popup page loads</td>
            <td><a href="https://developers.google.com/fonts/faq/privacy" rel="noopener" target="_blank">Google Fonts</a></td>
          </tr>
          <tr>
            <td>Open-Meteo</td>
            <td>Weather forecast and geocoding</td>
            <td>Weather card is enabled</td>
            <td><a href="https://open-meteo.com/en/terms" rel="noopener" target="_blank">Open-Meteo</a></td>
          </tr>
          <tr>
            <td>GeoJS (<code>get.geojs.io</code>)</td>
            <td>Approximate location from IP</td>
            <td>Weather mode is set to "IP"</td>
            <td><a href="https://www.geojs.io/" rel="noopener" target="_blank">GeoJS</a></td>
          </tr>
          <tr>
            <td>ipwho.is</td>
            <td>Fallback IP geolocation if GeoJS fails</td>
            <td>Weather mode is set to "IP"</td>
            <td><a href="https://ipwhois.io/privacy" rel="noopener" target="_blank">ipwho.is</a></td>
          </tr>
          <tr>
            <td>BigDataCloud</td>
            <td>Reverse-geocoding browser GPS to a city label</td>
            <td>Weather mode is set to "Geolocation"</td>
            <td><a href="https://www.bigdatacloud.com/privacy-policy" rel="noopener" target="_blank">BigDataCloud</a></td>
          </tr>
        </tbody>
      </table>

      <h2 id="do-not">5. What The Tab does not do</h2>
      <ul>
        <li>We do not sell, rent, or trade your data. (We never receive it in the first place.)</li>
        <li>We do not operate analytics, telemetry, or crash-reporting servers. There is no tracking pixel anywhere in the extension.</li>
        <li>We do not show ads, build advertising profiles, or share data with ad networks.</li>
        <li>We do not write to your Google Calendar or Google Tasks — both scopes are read-only.</li>
        <li>We do not use calendar or tasks data to train any model, profile you, or surface it to humans.</li>
        <li>We do not access page content on sites other than YouTube — and on YouTube the content script only hides existing DOM elements; it does not read your viewing history.</li>
        <li>We do not access your passwords, bookmarks (beyond standard browser APIs you opted into), downloads, clipboard, microphone, camera, or cookies.</li>
      </ul>

      <h2 id="retention">6. Data retention and deletion</h2>
      <p>
        All extension data lives in your browser's extension storage. It persists until one of the following clears it:
      </p>
      <ul>
        <li>You uninstall the extension — Chrome and Firefox remove all extension storage automatically.</li>
        <li>You clear browsing data with the "Cookies and other site data" or "Hosted app data" option selected.</li>
        <li>You manually clear it from the extension's settings page or via DevTools.</li>
        <li>You sign out of Google inside the extension — cached profile, calendar events, and tasks are wiped immediately and the OAuth token is revoked with Google.</li>
      </ul>
      <p>
        Cached Google profile data has an in-product time-to-live of up to 24 hours; cached calendar events and tasks
        have a shorter TTL (minutes) so the displayed information stays fresh. All of these are refreshed silently from
        Google on the next new-tab load while a valid token exists.
      </p>

      <h2 id="rights">7. Your rights and choices</h2>
      <ul>
        <li>
          <strong>Revoke Google access</strong> at any time at{" "}
          <a href="https://myaccount.google.com/connections" rel="noopener" target="_blank">
            myaccount.google.com/connections
          </a>
          , or via the <em>Change</em> / sign-out controls inside the extension which call Google's revocation
          endpoint and clear the local cache.
        </li>
        <li>
          <strong>Disable individual features</strong> from the extension's settings page — turn off weather, history
          suggestions, dwell-time tracking, YouTube clean mode, the calendar panel, or the tasks panel independently.
        </li>
        <li>
          <strong>Delete all extension data</strong> by uninstalling the extension or by clearing extension data from{" "}
          <code>chrome://extensions</code> (Chrome) or <code>about:addons</code> (Firefox).
        </li>
        <li>
          <strong>Object, access, or correct</strong> personal data we hold about you — there is no personal data on
          our side because the extension has no server. To exercise the equivalent right against Google's copy of
          your profile, calendar, or tasks, use the controls in your Google account.
        </li>
        <li>
          If you are in the EEA, UK, California, or another region with a specific data-protection law, the equivalent
          rights apply. We will respond to verifiable requests sent to the contact email below within 30 days.
        </li>
      </ul>

      <h2 id="limited-use">8. Google API limited-use disclosure</h2>
      <p>
        The Tab's use of information received from Google APIs adheres to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy#limited_use"
          rel="noopener"
          target="_blank"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. Specifically: the profile, calendar, and tasks data we retrieve from
        Google (name, email, profile picture, upcoming events, task lists and items) is used only to display the
        corresponding UI inside the extension on your own device. We do not transfer it to third parties, do not use
        it for serving ads, do not use it to train AI/ML models, and do not allow humans to read it (other than as
        strictly necessary for security investigations, debugging at the user's request, or to comply with applicable
        law).
      </p>

      <h2 id="children">9. Children</h2>
      <p>
        The extension is a general-audience productivity tool and is not directed at children under 13. We do not
        knowingly collect personal information from children. If you believe a child has somehow caused data of theirs
        to be processed by the extension on your device, uninstalling the extension removes it entirely.
      </p>

      <h2 id="changes">10. Changes to this policy</h2>
      <p>
        We will update this page when the extension's data handling changes — for example, when a new third-party
        service is added or removed, or when an OAuth scope is added, removed, or changes from read-only to read-write.
        The effective date at the top of the page is revised whenever the policy meaningfully changes. We encourage you
        to re-read it after major extension updates.
      </p>

      <h2 id="contact">11. Contact</h2>
      <p>
        Questions, deletion requests, or anything else: email{" "}
        <a href="mailto:hitarth.rohra@gmail.com">hitarth.rohra@gmail.com</a>. We aim to reply within a few business days.
      </p>

      <footer className="doc__footer">
        <p>
          This page is the canonical privacy disclosure for the version of The Tab listed on the Chrome Web Store and
          Firefox Add-ons. If you find a discrepancy between this document and the extension's actual behavior, please
          report it at the contact email above and we will fix one or the other.
        </p>
        <p>© {new Date().getFullYear()} Hitarth Rohra · The Tab. All rights reserved.</p>
      </footer>
    </article>
  );
}
