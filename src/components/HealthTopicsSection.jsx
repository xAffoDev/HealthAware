import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { healthTopics } from "../data/healthTopics";
import TopicCard from "./TopicCard";

function HealthTopicsSection() {
  return (
    <section className="topics-section">
      <div className="topics-container">

        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              Explore & Learn
            </span>

            <h2>
              Health topics that
              <span> matter every day.</span>
            </h2>
          </div>

          <p>
            Explore simple information about important areas
            of everyday health and well-being.
          </p>
        </div>

        <div className="topics-grid">
          {healthTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
            />
          ))}
        </div>

        <div className="topics-footer">
          <Link to="/topics" className="text-link">
            Explore all health topics
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default HealthTopicsSection;