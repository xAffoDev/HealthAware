
import { HeartPulse, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">
                <HeartPulse size={23} />
              </span>
              <span>HealthAware</span>
            </Link>

            <p>
              Building health awareness through simple,
              reliable and accessible educational information.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/topics">Health Topics</Link>
            <Link to="/campaigns">Campaigns</Link>
            <Link to="/tips">Health Tips</Link>
          </div>

          <div className="footer-column">
            <h3>Learn</h3>
            <Link to="/quiz">Health Quiz</Link>
            <Link to="/resources">Health Resources</Link>
          </div>

          <div className="footer-column footer-highlight">
            <h3>Keep Learning</h3>
            <p>
              Small steps toward better health begin
              with awareness.
            </p>
            <Link to="/topics" className="footer-cta">
              Explore topics
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} HealthAware.
            Educational project.
          </p>

          <p className="footer-disclaimer">
            For educational awareness only. Not a substitute
            for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;