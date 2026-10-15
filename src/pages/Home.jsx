import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse } from "lucide-react";

import HealthTopicsSection from "../components/HealthTopicsSection";
import FeaturedCampaign from "../components/FeaturedCampaign";
import HealthTipSection from "../components/HealthTipSection";
import WhyAwarenessSection from "../components/WhyAwarenessSection";
import QuizCTA from "../components/QuizCTA";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-container">

          <div className="hero-content">
            <div className="hero-label">
              <HeartPulse size={16} />
              <span>Health Awareness Platform</span>
            </div>

            <h1>
              Understand Your Health.
              <span> Make Better Everyday Choices.</span>
            </h1>

            <p>
              Explore simple health information, practical tips and
              awareness campaigns designed to help you build healthier habits.
            </p>

            <div className="hero-actions">
              <Link to="/topics" className="btn btn-primary">
                Explore Health Topics
                <ArrowRight size={18} />
              </Link>

              <Link to="/quiz" className="btn btn-secondary">
                Take the Quiz
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-icon">
                <HeartPulse size={42} />
              </div>

              <span>Health Awareness</span>

              <h2>
                Small steps can support
                healthier everyday habits.
              </h2>

              <div className="hero-card-footer">
                <span>Learn</span>
                <span>Understand</span>
                <span>Act</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    <HealthTopicsSection />
    <FeaturedCampaign />
    <HealthTipSection />
    <WhyAwarenessSection />
    <QuizCTA />
    </div>
  );
}

export default Home;