import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  const Icon = topic.icon;

  return (
    <Link
      to={`/topics/${topic.id}`}
      className="topic-card"
    >
      <div className="topic-card-icon">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <div className="topic-card-content">
        <h3>{topic.title}</h3>

        <p>{topic.description}</p>
      </div>

      <div className="topic-card-arrow">
        <ArrowUpRight size={18} />
      </div>
    </Link>
  );
}

export default TopicCard;