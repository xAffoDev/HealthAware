
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { campaigns } from "../data/campaigns";

function Campaigns() {
  return (
    <div className="campaigns-page">
      <section className="campaigns-page-hero">
        <div className="campaigns-page-container">
          <span className="section-eyebrow">
            Learn • Participate • Improve
          </span>

          <h1>
            Health awareness starts
            <span> with small steps.</span>
          </h1>

          <p>
            Explore educational campaigns that encourage
            healthier everyday habits, preventive healthcare,
            and informed lifestyle choices.
          </p>
        </div>
      </section>

      <section className="campaigns-list-section">
        <div className="campaigns-page-container">
          <div className="campaigns-list-heading">
            <div>
              <h2>Explore our campaigns</h2>
              <p>
                Learn about practical ways to support your well-being.
              </p>
            </div>

            <span className="campaigns-count">
              {campaigns.length} campaigns
            </span>
          </div>

          <div className="campaigns-grid">
            {campaigns.map((campaign) => (
              <article
                className="campaign-list-card"
                key={campaign.id}
              >
                <span className="campaign-list-category">
                  {campaign.category}
                </span>

                <h3>{campaign.title}</h3>

                <p className="campaign-list-description">
                  {campaign.description}
                </p>

                <div className="campaign-list-points">
                  {campaign.points.slice(0, 3).map((point) => (
                    <div className="campaign-list-point" key={point}>
                      <CheckCircle2 size={17} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/campaigns/${campaign.id}`}
                  className="campaign-list-link"
                >
                  Explore campaign
                  <ArrowUpRight size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Campaigns;
