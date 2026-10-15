import { ArrowRight, Brain } from "lucide-react";
import { Link } from "react-router-dom";

function QuizCTA() {
  return (
    <section className="quiz-cta">
      <div className="quiz-cta-container">

        <div className="quiz-cta-icon">
          <Brain size={30} strokeWidth={1.7} />
        </div>

        <div className="quiz-cta-content">
          <span className="section-eyebrow">
            Test Your Knowledge
          </span>

          <h2>
            How much do you know
            <span> about your health?</span>
          </h2>

          <p>
            Take a short health-awareness quiz and check
            your understanding of everyday health topics.
          </p>
        </div>

        <Link to="/quiz" className="quiz-cta-button">
          Take the Quiz
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}

export default QuizCTA;