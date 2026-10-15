
import { healthTopics } from "../data/healthTopics";
import TopicCard from "../components/TopicCard";

function Topics() {
  return (
    <div className="topics-page">
      <section className="topics-page-hero">
        <div className="topics-page-container">
          <span className="section-eyebrow">
            Explore & Learn
          </span>

          <h1>
            Explore health topics
            <span> for everyday life.</span>
          </h1>

          <p>
            Discover simple educational information about
            nutrition, fitness, hygiene, mental well-being,
            disease prevention and other important health topics.
          </p>
        </div>
      </section>

      <section className="topics-page-content">
        <div className="topics-page-container">
          <div className="topics-page-heading">
            <div>
              <h2>All health topics</h2>
              <p>
                Choose a topic to explore its key awareness points.
              </p>
            </div>

            <span className="topics-count">
              {healthTopics.length} topics
            </span>
          </div>

          <div className="topics-grid">
            {healthTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Topics;
