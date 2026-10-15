import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import { campaigns } from "../data/campaigns";

function FeaturedCampaign() {
  const campaign = campaigns[0];

  return (
    <section className="featured-campaign">
      <div className="featured-campaign-container">

        <div className="campaign-label">
          <span>Featured Campaign</span>
          <span className="campaign-line"></span>
        </div>

        <div className="campaign-content">

          <div className="campaign-main">
            <span className="campaign-category">
              {campaign.category}
            </span>

            <h2>{campaign.title}</h2>

            <p>{campaign.description}</p>

            <Link
              to={`/campaigns/${campaign.id}`}
              className="campaign-button"
            >
              Explore Campaign
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="campaign-points">
            <span className="points-title">
              Key awareness points
            </span>

            <div className="points-list">
              {campaign.points.map((point) => (
                <div className="campaign-point" key={point}>
                  <span className="point-icon">
                    <Check size={15} />
                  </span>

                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedCampaign;