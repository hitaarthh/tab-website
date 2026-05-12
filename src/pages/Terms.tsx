export default function Terms() {
  return (
    <article className="doc container container--narrow">
      <header className="doc__header">
        <p className="eyebrow">Terms of Service</p>
        <h1>Terms for using The Tab</h1>
        <p className="meta">
          <strong>The Tab</strong> · Browser extension for Chrome and Firefox · Effective May 12, 2026
        </p>
      </header>

      <p>
        These terms ("<strong>Terms</strong>") govern your use of <strong>The Tab</strong> (the "extension") and the
        accompanying website at this domain (together, the "Service"). The Service is provided by Hitarth Rohra
        ("we", "us"). By installing or using the extension, you agree to these Terms. If you do not agree, please
        uninstall the extension.
      </p>

      <div className="privacy-callout">
        <p>
          <strong>The short version.</strong> The Tab is a free, open-ended browser extension provided as-is. We don't
          run servers, we don't store your data, and we don't promise the extension will never break. You can stop
          using it at any time by uninstalling it.
        </p>
      </div>

      <nav className="toc" aria-label="Table of contents">
        <h2>Contents</h2>
        <ol>
          <li><a href="#eligibility">Eligibility</a></li>
          <li><a href="#license">License to use the extension</a></li>
          <li><a href="#acceptable-use">Acceptable use</a></li>
          <li><a href="#third-party">Third-party services and accounts</a></li>
          <li><a href="#google-services">Google services and the Tasks / Calendar scopes</a></li>
          <li><a href="#availability">Availability and changes</a></li>
          <li><a href="#disclaimer">Disclaimer of warranties</a></li>
          <li><a href="#liability">Limitation of liability</a></li>
          <li><a href="#indemnity">Indemnification</a></li>
          <li><a href="#termination">Termination</a></li>
          <li><a href="#governing-law">Governing law</a></li>
          <li><a href="#changes">Changes to these Terms</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </nav>

      <h2 id="eligibility">1. Eligibility</h2>
      <p>
        You must be at least 13 years old (or the minimum digital-consent age in your jurisdiction, whichever is
        higher) to use the Service. The extension is a general-audience productivity tool and is not directed at
        children.
      </p>

      <h2 id="license">2. License to use the extension</h2>
      <p>
        Subject to these Terms, we grant you a personal, non-exclusive, non-transferable, revocable license to install
        and use the extension on devices and browser profiles you control, for your own non-commercial or internal
        business use.
      </p>
      <p>
        You may not (a) sell, sublicense, or redistribute the extension or any part of it; (b) reverse-engineer,
        decompile, or disassemble the extension except where this is expressly permitted by law; (c) remove or alter
        the copyright, trademark, or other proprietary notices included in the extension; or (d) use the extension to
        develop a competing product by copying its features in bulk.
      </p>
      <p>
        All rights not expressly granted to you in these Terms are reserved by us and our licensors.
      </p>

      <h2 id="acceptable-use">3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the extension to break any law or anyone else's rights.</li>
        <li>Use the extension to send spam, scrape data, or otherwise overload any third-party service it integrates with.</li>
        <li>Attempt to compromise the security of the extension, the publisher's accounts, or any user's device.</li>
        <li>Bypass usage limits, rate limits, or terms imposed by Google or any other third-party API the extension talks to.</li>
        <li>Misrepresent your identity or impersonate anyone else while interacting with the publisher.</li>
      </ul>

      <h2 id="third-party">4. Third-party services and accounts</h2>
      <p>
        The extension integrates with a number of third-party services (Google, Open-Meteo, GeoJS, ipwho.is,
        BigDataCloud, and others listed in the{" "}
        <a href="/privacy#third-parties">privacy policy</a>). Your use of those services is governed by their own
        terms and privacy policies. We are not responsible for the availability, accuracy, content, or behavior of
        those services. When a third-party service is unavailable, the corresponding feature in the extension will
        gracefully degrade or surface an error; the rest of the extension keeps working.
      </p>

      <h2 id="google-services">5. Google services and the Tasks / Calendar scopes</h2>
      <p>
        Some features of the extension are powered by Google APIs and require you to sign in with a Google account
        and consent to specific OAuth scopes:
      </p>
      <ul>
        <li>
          <code>userinfo.profile</code> and <code>userinfo.email</code> — used to display your name, email, and
          profile picture inside the extension UI.
        </li>
        <li>
          <code>calendar.readonly</code> — used to display upcoming events on the new-tab page. The extension cannot
          create, modify, or delete calendar events.
        </li>
        <li>
          <code>tasks.readonly</code> — used to display your task lists on the new-tab page. The extension cannot
          create, modify, complete, or delete tasks.
        </li>
      </ul>
      <p>
        You can revoke these permissions at any time from{" "}
        <a href="https://myaccount.google.com/connections" rel="noopener" target="_blank">
          myaccount.google.com/connections
        </a>{" "}
        or by signing out inside the extension. The Tab's use and transfer of information received from Google APIs
        adheres to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy#limited_use"
          rel="noopener"
          target="_blank"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <h2 id="availability">6. Availability and changes</h2>
      <p>
        The extension is offered free of charge. We may add, change, or remove features at any time, including
        features that depend on third-party APIs. We may also pause or discontinue the extension entirely. We will try
        to give reasonable notice (via the Chrome Web Store / Firefox Add-ons listing, this website, or both) when a
        change materially reduces the extension's functionality.
      </p>

      <h2 id="disclaimer">7. Disclaimer of warranties</h2>
      <p>
        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
        INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM A COURSE OF DEALING OR USAGE OF TRADE. WE DO NOT WARRANT
        THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE, OR FREE OF VIRUSES OR HARMFUL COMPONENTS,
        OR THAT ANY DATA DISPLAYED THROUGH THE SERVICE (INCLUDING CALENDAR EVENTS, TASKS, WEATHER, OR SEARCH
        SUGGESTIONS) WILL BE COMPLETE OR ACCURATE.
      </p>

      <h2 id="liability">8. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE PUBLISHER BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE,
        DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO
        USE, THE SERVICE. IN ALL CASES OUR AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE
        SERVICE WILL NOT EXCEED <strong>USD 50</strong>. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
        WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE
        LIMITATIONS MAY NOT APPLY TO YOU IN FULL.
      </p>

      <h2 id="indemnity">9. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless the publisher from and against any claims, liabilities,
        damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with
        (a) your access to or use of the Service, (b) your violation of these Terms, or (c) your violation of any
        third-party right, including any privacy or intellectual property right.
      </p>

      <h2 id="termination">10. Termination</h2>
      <p>
        You can terminate these Terms at any time by uninstalling the extension. We may suspend or terminate your
        access to the Service if you violate these Terms or if we discontinue the Service. Sections that by their
        nature should survive termination (license restrictions, disclaimers, limitation of liability, indemnity,
        governing law) will survive.
      </p>

      <h2 id="governing-law">11. Governing law</h2>
      <p>
        These Terms are governed by the laws of India, without regard to its conflict-of-laws rules. Any disputes
        will be resolved exclusively in the courts located in Bengaluru, Karnataka, India, except where mandatory
        consumer-protection law in your country of residence provides otherwise.
      </p>

      <h2 id="changes">12. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise the "Effective" date at the top of
        this page. If a change is material, we will try to provide additional notice (such as a banner inside the
        extension or a note in the Chrome Web Store listing). Your continued use of the extension after the new Terms
        take effect constitutes your acceptance of them.
      </p>

      <h2 id="contact">13. Contact</h2>
      <p>
        Questions about these Terms: email{" "}
        <a href="mailto:hitarth.rohra@gmail.com">hitarth.rohra@gmail.com</a>.
      </p>

      <footer className="doc__footer">
        <p>© {new Date().getFullYear()} Hitarth Rohra · The Tab. All rights reserved.</p>
      </footer>
    </article>
  );
}
