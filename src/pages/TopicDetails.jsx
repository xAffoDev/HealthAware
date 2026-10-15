
import { Link, useParams } from "react-router-dom";
import { healthTopics } from "../data/healthTopics";

function TopicDetails() {
  const { topicId } = useParams();

  const topic = healthTopics.find(
    (item) => item.id === topicId
  );

  if (!topic) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Topic Not Found</h1>
        <Link to="/topics">Back to Topics</Link>
      </div>
    );
  }

  const Icon = topic.icon;

  return (
    <section style={{ padding: "50px 20px" }}>
      <Link to="/topics">← Back to Health Topics</Link>

      <div style={{ marginTop: "30px" }}>
        <Icon size={36} />

        <h1>{topic.title}</h1>

        <p>{topic.description}</p>

        <p>
          Welcome to the {topic.title} awareness page.
        </p>
      </div>
    </section>
  );
}

export default TopicDetails;
