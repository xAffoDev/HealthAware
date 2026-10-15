import {
  BookOpen,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const reasons = [
  {
    icon: BookOpen,
    title: "Understand",
    description:
      "Access simple information about important health and lifestyle topics.",
  },
  {
    icon: ShieldCheck,
    title: "Prevent",
    description:
      "Learn about everyday practices that support preventive healthcare.",
  },
  {
    icon: Smartphone,
    title: "Access",
    description:
      "Find health-awareness information through a simple digital platform.",
  },
];

function WhyAwarenessSection() {
  return (
    <section className="why-awareness">
      <div className="why-awareness-container">

        <div className="why-heading">
          <span className="section-eyebrow">
            Why Health Awareness?
          </span>

          <h2>
            Better information can support
            <span> better everyday choices.</span>
          </h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="why-card" key={reason.title}>
                <div className="why-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyAwarenessSection;