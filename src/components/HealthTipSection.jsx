import { ArrowUpRight, Lightbulb } from "lucide-react";

import { healthTips } from "../data/tips";

function HealthTipSection() {
  const tip = healthTips[0];

  return (
    <section className="health-tip-section">
      <div className="health-tip-container">

        <div className="tip-icon">
          <Lightbulb size={25} strokeWidth={1.8} />
        </div>

        <div className="tip-content">
          <span className="section-eyebrow">
            Health Tip of the Day
          </span>

          <h2>{tip.title}</h2>

          <p>{tip.description}</p>

          <span className="tip-category">
            {tip.category}
          </span>
        </div>

        <div className="tip-arrow">
          <ArrowUpRight size={24} />
        </div>

      </div>
    </section>
  );
}

export default HealthTipSection;