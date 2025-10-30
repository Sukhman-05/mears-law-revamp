// src/app/about/page.js
"use client";

export default function AboutPage() {
  return (
    <>

      {/* ===== Hero ===== */}
      <section className="about-hero">
        <div className="container">
          <div className="eyebrow">ABOUT</div>
          <h1>About Mears Law</h1>
          <p className="lede">
            A full-service Canadian law firm built on integrity, excellence, and dedication —
            delivering strategic, practical, and results-driven legal solutions across industries
            and jurisdictions.
          </p>

          <blockquote className="pullquote">
            <p>
              “Legal excellence isn’t just about knowing the law — it’s about understanding how legal
              strategy serves broader business and personal objectives. Every client deserves counsel
              that’s both technically expert and strategically minded.”
            </p>
            <cite>— Carissa, Founding Attorney</cite>
          </blockquote>
        </div>
      </section>

      {/* ===== Who We Are + Sticky Help Card ===== */}
      <section className="who">
        <div className="container who-grid">
          <div className="col prose">
            <h2>Who We Are</h2>

            <p>
              <strong>MEARS LAW</strong> was founded on the principle that exceptional legal
              representation begins with understanding our clients’ goals.
            </p>

            <p>
              From local entrepreneurs to multinational corporations and government bodies, our firm
              has built a reputation for integrity, professionalism, and results.
            </p>

            <p>
              At MEARS LAW, we are a full-service Canadian law firm built on the values of integrity,
              excellence, and dedication. Our team of legal professionals work collaboratively to
              provide strategic, practical, and results-driven legal solutions to clients across
              industries and jurisdictions.
            </p>

            <p>
              We serve corporations, government entities, and individuals, offering comprehensive
              legal support that is both client-centered and forward-looking. From corporate
              transactions and real estate matters to regulatory compliance, dispute resolution, and
              emerging areas like AI and data protection — we provide legal services designed to
              empower our clients in an evolving legal landscape.
            </p>

            <p className="closing">
              Our firm was founded on a simple yet powerful principle: to deliver exceptional legal
              service through personalized attention, deep industry knowledge, and unwavering ethical
              standards.
            </p>
          </div>

          {/* Sticky “bubble” that follows while this block scrolls */}
          <aside className="col help">
            <div className="help-card">
              <div className="help-head">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path d="M8 9h8M8 13h8M8 17h5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <h3>How We Help</h3>
              </div>

              <ul className="help-list">
                <li>Corporate &amp; commercial transactions</li>
                <li>Real estate &amp; development</li>
                <li>Regulatory &amp; compliance</li>
                <li>Dispute resolution &amp; advocacy</li>
                <li>AI, privacy, and data protection</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== Commitment ===== */}
      <section className="commitment">
        <div className="container">
          <h2>Our Commitment</h2>
          <p className="sub">
            At Mears Law, we measure success by the trust and confidence our clients place in us. We are committed to delivering legal services that reflect our core principles:
          </p>

          <div className="pill-grid">
            <div className="pill">
              <h4>Excellence</h4>
              <p>We provide precise, insightful, and efficient legal solutions tailored to each client's needs.</p>
            </div>
            <div className="pill">
              <h4>Collaboration</h4>
              <p>We work closely with our clients to understand their goals and craft strategies that support their success.</p>
            </div>
            <div className="pill">
              <h4>Innovation</h4>
              <p>We embrace technology, including AI and digital legal tools, to enhance service quality, accessibility, and efficiency.</p>
            </div>
          </div>

          <p className="note">
            Our commitment is to be more than legal advisors—we strive to be trusted partners in every step of your journey.
          </p>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <p className="sub">
            At Mears Law, we provide comprehensive legal services tailored to the needs of corporations, government entities, and individuals. Our team combines legal insight with practical solutions to help clients navigate complex challenges with confidence.
          </p>
          <p className="sub">
            We are guided by core values that define our approach:
          </p>

          <div className="pill-grid">
            <div className="pill">
              <h4>Integrity</h4>
              <p>Upholding the highest ethical standards in every matter.</p>
            </div>
            <div className="pill">
              <h4>Clarity</h4>
              <p>Communicating with transparency and precision.</p>
            </div>
            <div className="pill">
              <h4>Strategic Insight</h4>
              <p>Aligning legal advice with real-world goals.</p>
            </div>
            <div className="pill">
              <h4>Confidentiality</h4>
              <p>Protecting client information with diligence and care.</p>
            </div>
            <div className="pill">
              <h4>Responsiveness</h4>
              <p>Delivering timely, attentive service.</p>
            </div>
            <div className="pill">
              <h4>Adaptability</h4>
              <p>Evolving with the legal and technological landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="team">
        <div className="container">
          <h2>Our Team</h2>
          <div className="person">
            <div className="meta">
              <div className="name">Carissa Mears</div>
              <div className="role">Lawyer • Lead Consultant &amp; Founder</div>
              <div className="bio">
                <p>
                  Carissa Mears is the founder of Mears Law. With nearly a decade of legal experience across Ontario, Jamaica, and Trinidad &amp; Tobago, Carissa brings a global perspective and deep cross-border expertise to her practice. Her career spans impactful roles in both the public and private sectors, including leadership positions at TELUS and the Center for AI and Digital Policy, where she has shaped policy and governance frameworks for emerging technologies. She has also contributed to major transactions and data breach matters as a legal consultant at Deloitte, and served as legal counsel to organizations such Medic Alert and as a privacy consultant at CIBC.
                </p>
                <p>
                  Carissa is a recognized thought leader in AI and privacy law, frequently invited to speak at industry conferences alongside experts from Google, EY, and leading law firms. Her work has been cited by policymakers and featured in global initiatives, including contributions to the Artificial Intelligence and Democratic Values Index and policy submissions to the United Nations and European Union.
                </p>
                <p>
                  At Mears Law, Carissa manages a practice committed to excellence, integrity, and innovation. She works closely with clients—from individuals navigating real estate and immigration matters to businesses and government entities facing complex regulatory and commercial challenges. Her approach is grounded in collaboration, clarity, and a deep understanding of both legal frameworks and client goals—making her a trusted advisor in today’s evolving legal landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        /* Wider reading width so lines don't wrap too early */
        .container {
          width: min(1200px, 92%);
          margin: 0 auto;
        }

        .about-hero {
          padding: 56px 0 40px;
        }
        .who {
          padding: 56px 0;
        }
        .commitment {
          padding: 64px 0;
          background: #fafbfc;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }
        .values {
          padding: 64px 0;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
        }
        .team {
          padding: 56px 0 72px;
        }

        .eyebrow {
          font: 600 12px/1.2 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 8px;
        }
        h1 {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.15;
          color: #0a1628;
          margin: 0 0 10px;
        }
        h2 {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          font-size: clamp(22px, 3.2vw, 32px);
          line-height: 1.2;
          color: #0a1628;
          margin: 0 0 18px;
        }
        h3 {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          font-size: 20px;
          margin: 0;
          color: #0a1628;
        }
        h4 {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          font-size: 18px;
          margin: 0 0 6px;
          color: #0a1628;
        }

        .lede,
        .prose p,
        .commitment .sub,
        .commitment .note {
          font: 400 16px/1.85 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: #374151;
        }
        .lede {
          margin: 0 0 18px;
          max-width: none;
        }

        .pullquote {
          margin: 22px 0 6px;
          padding: 16px 18px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
        }
        .pullquote p {
          margin: 0 0 8px;
          color: #111827;
          font: italic 500 15px/1.7 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
        }
        .pullquote cite {
          font: 600 13px/1.2 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: #6b7280;
        }

        /* Who grid + sticky help bubble */
        .who-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: clamp(24px, 3vw, 40px);
          align-items: start;
        }
        .prose p + p {
          margin-top: 14px;
        }
        .prose .closing {
          margin-top: 18px;
        }

        .help {
          position: relative;
        }
        .help-card {
          position: sticky;
          top: 96px; /* stays below the header */
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 18px 18px 16px;
          box-shadow: 0 18px 35px rgba(10, 22, 40, 0.12);
          overflow: hidden;
        }
        .help-card::before {
          /* subtle gradient bar at the top edge */
          content: "";
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, #0a1628, #1e3a5f);
          opacity: 0.9;
        }
        .help-head {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #0a1628;
          margin-bottom: 10px;
        }
        .help-head svg {
          opacity: 0.85;
        }
        .help-list {
          margin: 6px 0 0;
          padding: 0;
          list-style: none;
        }
        .help-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid #eef2f6;
          border-radius: 12px;
          background: #fbfdff;
          box-shadow: 0 2px 10px rgba(14, 30, 55, 0.05);
          margin: 8px 0;
          font-size: 15px;
          line-height: 1.6;
          color: #334155;
        }

        /* Commitment */
        .commitment .sub {
          text-align: left;            /* left, not centered */
          margin: 4px 0 26px;
          max-width: none;             /* allow full width */
        }
        .values .sub {
          text-align: left;
          margin: 4px 0 26px;
          max-width: none;
        }
        .values .sub + .sub {
          margin: 0 0 32px;            /* extra space before the grid */
        }
        .pill-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .pill {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }
        .pill p {
          margin: 4px 0 0;
          font-size: 14.8px;
          line-height: 1.7;
          color: #4b5563;
        }
        .commitment .note {
          margin: 26px 0 0;
          max-width: none;             /* span the container so it doesn’t wrap early */
          text-align: left;            /* per your preference */
          font-size: 17px;
          line-height: 1.9;
          color: #344256;
        }

        /* Team */
        .person {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          width: 100%;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          font: 700 14px/1 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: #fff;
          background: #1e3a5f;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        .name {
          font: 800 18px/1.35 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: #0a1628;
        }
        .role {
          font: 600 14px/1.5 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .bio p {
          margin: 10px 0 0;
          font: 400 15.5px/1.8 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: #334155;
        }

        @media (max-width: 700px) {
          .person { flex-direction: column; align-items: stretch; }
        }

        @media (max-width: 1100px) {
          .pill-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 900px) {
          .who-grid {
            grid-template-columns: 1fr;
          }
          .help-card {
            position: static; /* no sticky on small screens */
          }
          .pill-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 560px) {
          .pill-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
