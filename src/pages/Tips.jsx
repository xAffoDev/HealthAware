
import { ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { healthTips } from "../data/tips";

function Tips() {
  return (
    <div className="tips-page">
      <section className="tips-page-hero">
        <div className="tips-page-container">
          <span className="section-eyebrow">
            Small Steps, Healthy Habits
          </span>

          <h1>
            Simple tips for
            <span> healthier everyday living.</span>
          </h1>

          <p>
            Explore practical health-awareness tips related to
            hydration, physical activity, sleep and other daily
            habits that support overall well-being.
          </p>
        </div>
      </section>

      <section className="tips-list-section">
        <div className="tips-page-container">
          <div className="tips-list-heading">
            <div>
              <h2>Everyday health tips</h2>
              <p>
                Simple ideas to help you build healthier routines.
              </p>
            </div>

            <span className="tips-count">
              {healthTips.length} tips
            </span>
          </div>

          <div className="tips-grid">
            {healthTips.map((tip, index) => (
              <article className="tip-card" key={tip.id}>
                <div className="tip-card-top">
                  <div className="tip-card-icon">
                    <Lightbulb size={23} strokeWidth={1.8} />
                  </div>

                  <span className="tip-number">
                    TIP {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="tip-card-category">
                  {tip.category}
                </span>

                <h3>{tip.title}</h3>

                <p>{tip.description}</p>

                <Link
                  to="/topics"
                  className="tip-card-link"
                >
                  Explore related topics
                  <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>

          <div className="tips-bottom-cta">
            <div>
              <span className="section-eyebrow">
                Keep Learning
              </span>

              <h2>Want to learn more about your health?</h2>

              <p>
                Explore our health topics to understand everyday
                wellness and preventive healthcare.
              </p>
            </div>

            <Link to="/topics" className="tips-cta-button">
              Explore Health Topics
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tips;
