
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, HeartPulse } from "lucide-react";
import { campaigns } from "../data/campaigns";

function CampaignDetails() {
  const { campaignId } = useParams();

  const campaign = campaigns.find(
    (item) => item.id === campaignId
  );

  if (!campaign) {
    return (
      <section className="campaign-detail-page">
        <div className="campaign-detail-container">
          <h1>Campaign Not Found</h1>
          <p>This health awareness campaign does not exist.</p>

          <Link to="/campaigns" className="campaign-back-button">
            <ArrowLeft size={17} />
            Back to Campaigns
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="campaign-detail-page">
      <section className="campaign-detail-hero">
        <div className="campaign-detail-container">
          <Link to="/campaigns" className="campaign-back-link">
            <ArrowLeft size={17} />
            Back to Campaigns
          </Link>

          <div className="campaign-detail-icon">
            <HeartPulse size={30} />
          </div>

          <span className="section-eyebrow">
            {campaign.category}
          </span>

          <h1>{campaign.title}</h1>

          <p className="campaign-detail-intro">
            {campaign.description}
          </p>
        </div>
      </section>

      <section className="campaign-detail-content">
        <div className="campaign-detail-container">
          <div className="campaign-detail-grid">
            <div className="campaign-detail-main">
              <span className="section-eyebrow">
                Learn and Take Action
              </span>

              <h2>
                Small steps can make
                <span> a meaningful difference.</span>
              </h2>

              <p className="campaign-detail-description">
                This campaign highlights practical ways to build
                awareness and encourage healthier everyday habits.
                Explore the following key points and consider how
                they can fit into your daily routine.
              </p>

              <div className="campaign-detail-points">
                {campaign.points.map((point) => (
                  <div className="campaign-detail-point" key={point}>
                    <CheckCircle2 size={21} />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="campaign-detail-card">
              <span>HEALTHAWARE CAMPAIGN</span>

              <h3>
                Learn.
                <br />
                Practice.
                <br />
                Improve.
              </h3>

              <p>
                Build your health awareness through reliable
                educational information and practical habits.
              </p>

              <Link to="/topics" className="campaign-topics-button">
                Explore Health Topics
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CampaignDetails;
