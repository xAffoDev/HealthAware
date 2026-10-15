
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Globe,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const resources = [
  {
    title: "World Health Organization",
    category: "Global Health",
    description:
      "Explore public health information, health topics, campaigns and guidance from the WHO.",
    url: "https://www.who.int/",
    icon: Globe,
  },
  {
    title: "Ministry of Health and Family Welfare",
    category: "Indian Healthcare",
    description:
      "Find official health programmes, public health initiatives and healthcare information in India.",
    url: "https://mohfw.gov.in/",
    icon: ShieldCheck,
  },
  {
    title: "National Health Mission",
    category: "Community Health",
    description:
      "Learn about community health services and public health initiatives across India.",
    url: "https://nhm.gov.in/",
    icon: HeartPulse,
  },
  {
    title: "UNICEF Health",
    category: "Family and Child Health",
    description:
      "Explore educational information about children's health, nutrition, immunization and well-being.",
    url: "https://www.unicef.org/health",
    icon: BookOpen,
  },
];

function Resources() {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-container">
          <span className="section-eyebrow">
            Learn from Reliable Sources
          </span>

          <h1>
            Health information
            <span> you can explore.</span>
          </h1>

          <p>
            Discover trusted health organizations and educational
            resources to improve your understanding of health,
            preventive care and community well-being.
          </p>
        </div>
      </section>

      <section className="resources-content">
        <div className="resources-container">
          <div className="resources-heading">
            <div>
              <h2>Explore health resources</h2>
              <p>
                Start with established health organizations and
                their educational information.
              </p>
            </div>

            <span className="resources-count">
              {resources.length} resources
            </span>
          </div>

          <div className="resources-grid">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  className="resource-card"
                  key={resource.title}
                >
                  <div className="resource-card-top">
                    <div className="resource-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <ExternalLink
                      size={18}
                      className="resource-external-icon"
                    />
                  </div>

                  <span className="resource-category">
                    {resource.category}
                  </span>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    Visit official website
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="resources-note">
            <ShieldCheck size={24} />

            <div>
              <h3>Check your health information</h3>
              <p>
                Online information is useful for learning, but it
                should not replace personalized medical advice.
                Verify health claims using reliable sources and
                consult a qualified healthcare professional when
                making decisions about your health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
