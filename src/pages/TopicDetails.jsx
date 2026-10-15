
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { healthTopics } from "../data/healthTopics";

const topicContent = {
  nutrition: {
    intro:
      "Nutrition is the process through which our bodies receive and use nutrients from food. A balanced diet helps provide the energy and nutrients needed for growth, everyday activities and general well-being.",
    whyItMatters:
      "A variety of nutritious foods supports normal body functions, helps maintain energy and contributes to healthy growth and development. Eating habits developed early can also influence long-term health.",
    sections: [
      {
        title: "Understanding balanced nutrition",
        text:
          "A balanced diet includes a variety of foods such as vegetables, fruits, whole grains, pulses, beans, nuts, and suitable sources of protein. Milk, curd or appropriate alternatives can also contribute important nutrients. The amount and type of food needed can vary with age, activity and individual needs.",
      },
      {
        title: "Healthy eating habits",
        text:
          "Try to eat a variety of foods instead of depending on only one food group. Include fruits and vegetables regularly, drink safe water, and pay attention to hunger and fullness. Limit frequent consumption of foods high in added sugar, excess salt and unhealthy fats. No single food provides every nutrient the body needs.",
      },
      {
        title: "Food safety and hygiene",
        text:
          "Wash your hands before preparing or eating food. Wash fruits and vegetables appropriately, use safe drinking water, cook food thoroughly when required, and store perishable foods safely. Clean food preparation surfaces to reduce the risk of contamination.",
      },
    ],
    habits: [
      "Include different food groups in your daily meals.",
      "Choose fruits, vegetables and whole grains regularly.",
      "Drink safe water throughout the day.",
      "Maintain clean hands and safe food preparation practices.",
      "Avoid skipping meals as a routine and develop sustainable eating habits.",
    ],
    remember:
      "Healthy eating is about balance, variety and consistency, not following extreme diets or avoiding entire food groups without a suitable reason.",
  },

  fitness: {
    intro:
      "Physical activity includes body movements that use energy, such as walking, cycling, dancing, playing sports, climbing stairs and exercising. Fitness refers to the ability to perform everyday activities effectively and safely.",
    whyItMatters:
      "Regular physical activity supports heart and muscle function, bone health, mobility, sleep and emotional well-being. It can also help people maintain independence and participate more comfortably in daily activities.",
    sections: [
      {
        title: "Different types of physical activity",
        text:
          "Aerobic activities include brisk walking, cycling and swimming. Strength-building activities challenge muscles, while activities such as stretching and yoga can support flexibility and mobility. Sports and active games can make movement enjoyable and encourage social interaction.",
      },
      {
        title: "Building an active routine",
        text:
          "Choose activities that match your age, ability, interests and daily schedule. Start at a manageable level and gradually increase duration or intensity. Students can include walking, outdoor games, cycling or short movement breaks between long periods of sitting. Consistency is more useful than attempting an exhausting routine and abandoning it.",
      },
      {
        title: "Exercise safely",
        text:
          "Wear suitable footwear and use appropriate equipment. Begin gently, increase effort gradually and allow time for rest and recovery. Drink water as needed and pay attention to your body's signals. Stop exercising if you experience concerning symptoms such as chest pain, faintness or unusual severe breathlessness, and seek appropriate medical help.",
      },
    ],
    habits: [
      "Walk or move regularly during the day.",
      "Choose a physical activity you genuinely enjoy.",
      "Reduce long uninterrupted periods of sitting.",
      "Increase exercise gradually rather than suddenly overexerting yourself.",
      "Make time for rest, recovery and adequate sleep.",
    ],
    remember:
      "Fitness is not only about appearance or weight. Regular movement, strength, mobility and the ability to carry out daily activities are important parts of overall health.",
  },

  hygiene: {
    intro:
      "Personal hygiene means keeping the body and everyday surroundings clean. It includes handwashing, bathing, oral care, clean clothing, safe food handling and appropriate menstrual hygiene. These practices help people care for themselves and reduce the spread of many infections.",
    whyItMatters:
      "Germs can spread through contaminated hands, food, water, surfaces and close contact. Good hygiene practices help reduce avoidable exposure to harmful microorganisms and support comfort, confidence and community well-being.",
    sections: [
      {
        title: "Handwashing and cleanliness",
        text:
          "Wash your hands with soap and clean running water before eating or preparing food, after using the toilet, after coughing or sneezing into your hands, and whenever they are visibly dirty. Rub all parts of your hands, including between fingers and around nails, then rinse and dry them. Use an appropriate alcohol-based hand rub when soap and water are unavailable and hands are not visibly dirty.",
      },
      {
        title: "Oral, body and clothing hygiene",
        text:
          "Brush your teeth twice daily using fluoride toothpaste, clean your tongue as appropriate and maintain regular dental check-ups. Bathe according to your needs, keep nails clean, and wear clean clothing. Avoid sharing personal items such as toothbrushes, razors and towels when doing so could spread infection.",
      },
      {
        title: "Hygiene at school and in the community",
        text:
          "Use safe drinking water, keep toilets and frequently touched surfaces clean, and handle waste responsibly. Menstrual products should be changed according to their instructions and personal needs, with proper hand hygiene before and after use. Hygiene facilities should be safe, private and accessible to everyone.",
      },
    ],
    habits: [
      "Wash your hands properly with soap at important times.",
      "Brush your teeth twice a day.",
      "Keep your body, nails and clothes clean.",
      "Use safe water and practise food hygiene.",
      "Dispose of sanitary products and household waste responsibly.",
    ],
    remember:
      "Hygiene is a daily habit, not a one-time activity. Clean surroundings and access to safe water and sanitation are shared community responsibilities.",
  },

  "mental-wellbeing": {
    intro:
      "Mental well-being describes how people think, feel, manage everyday challenges, build relationships and participate in life. It is an important part of overall health and can change over time in response to personal experiences, stress, relationships and the surrounding environment.",
    whyItMatters:
      "Emotional well-being can influence concentration, learning, sleep, relationships and daily routines. Everyone experiences difficult emotions sometimes. Feeling stressed or upset does not mean someone has failed, and asking for support is a sensible way to care for oneself.",
    sections: [
      {
        title: "Recognising emotions and stress",
        text:
          "Stress can arise from exams, work, family responsibilities, financial worries or changes in life. Learning to recognise emotions and noticing changes in sleep, concentration, appetite or usual activities can help people understand when they may need extra support. These experiences can have different causes, so they should not be used alone to diagnose a condition.",
      },
      {
        title: "Everyday ways to support well-being",
        text:
          "A regular sleep routine, enjoyable physical activity, balanced meals, time outdoors and meaningful social connections can support well-being. Taking manageable breaks, organising tasks and practising slow breathing or relaxation may help with everyday stress. Different strategies work for different people, and no single habit removes every difficulty.",
      },
      {
        title: "Seeking support",
        text:
          "Talk to a trusted friend, family member, teacher, counsellor or qualified mental health professional when difficulties feel overwhelming or continue affecting daily life. Listen without judging when someone shares a concern. If a person may be in immediate danger or at risk of harming themselves, seek urgent local emergency or crisis support.",
      },
    ],
    habits: [
      "Maintain a reasonably regular sleep and daily routine.",
      "Make time for activities you enjoy and relationships you value.",
      "Break demanding tasks into smaller, manageable steps.",
      "Talk to a trusted person when you need support.",
      "Seek professional help when emotional difficulties persist or interfere with daily life.",
    ],
    remember:
      "Mental health deserves the same respect as physical health. Avoid judging people for their struggles, and remember that professional support is a valid and important option.",
  },

  "disease-prevention": {
    intro:
      "Disease prevention includes actions that reduce the risk of illness, support early detection and help protect individuals and communities. Prevention can involve hygiene, vaccination, healthy everyday habits, safer environments, appropriate screening and timely access to healthcare.",
    whyItMatters:
      "Preventive practices can reduce exposure to some infectious diseases, support long-term health and help identify certain health problems earlier. Not every illness can be prevented, but informed choices and accessible healthcare can reduce many avoidable risks.",
    sections: [
      {
        title: "Preventing infectious diseases",
        text:
          "Depending on the infection, germs may spread through respiratory particles, contaminated food or water, direct contact, blood or insects. Hand hygiene, safe food and water, good ventilation, appropriate respiratory etiquette and measures to prevent insect bites can help reduce specific risks. The right precautions depend on how a particular disease spreads.",
      },
      {
        title: "Reducing long-term health risks",
        text:
          "A varied diet, regular physical activity, adequate sleep and avoiding tobacco can support long-term health. Limiting harmful alcohol use, when relevant, and following appropriate safety practices can also reduce certain risks. Individual risk depends on many factors, including age, family history, environment and existing health conditions.",
      },
      {
        title: "Check-ups and early attention",
        text:
          "Routine check-ups and recommended screening can help identify some conditions before noticeable symptoms develop. Screening recommendations vary according to age, individual risk and local guidance. Seek advice from a qualified healthcare professional about suitable preventive services and do not delay urgent care for severe or concerning symptoms.",
      },
    ],
    habits: [
      "Follow recommended vaccination guidance.",
      "Maintain hand hygiene and use safe food and water.",
      "Stay active and build sustainable healthy routines.",
      "Attend recommended health check-ups and screenings.",
      "Seek reliable medical advice instead of relying on rumours or self-diagnosis.",
    ],
    remember:
      "Prevention reduces risk but cannot guarantee that a person will never become ill. Early care, reliable information and access to healthcare remain important.",
  },

  vaccination: {
    intro:
      "Vaccination is a preventive healthcare measure that trains the immune system to recognise and respond to particular disease-causing organisms or their components. Vaccines help prepare the body's defences before a person encounters the infection they are designed to protect against.",
    whyItMatters:
      "Vaccination can reduce the risk of certain infections and their complications. When vaccination is widely taken up, it can also help reduce the spread of some diseases and protect people who are more vulnerable. The level and duration of protection vary by vaccine and disease.",
    sections: [
      {
        title: "How vaccines work",
        text:
          "Vaccines expose the immune system to an antigen or instructions for producing one, without requiring the person to experience the disease in the usual way. The immune system learns to recognise the target and may respond more effectively after future exposure. Different vaccines work in different ways, and some require multiple doses or booster doses.",
      },
      {
        title: "Vaccination through life",
        text:
          "Vaccination may be recommended during infancy, childhood, adolescence, adulthood, pregnancy or older age, depending on the vaccine and local health guidance. Some people need additional recommendations because of their work, travel, medical circumstances or exposure risk. Keep vaccination records and consult a qualified healthcare professional or official immunisation schedule to understand which doses are due.",
      },
      {
        title: "Safety and reliable information",
        text:
          "Vaccines are evaluated for safety and effectiveness, and their safety continues to be monitored after approval. Temporary effects such as soreness at the injection site or mild fever can occur with some vaccines. Serious reactions are uncommon but possible. Discuss allergies, previous reactions or other medical concerns with a healthcare professional, and seek urgent care for signs of a severe allergic reaction.",
      },
    ],
    habits: [
      "Check the recommended vaccination schedule for your age and circumstances.",
      "Keep vaccination records in a safe place.",
      "Ask qualified healthcare professionals about missed or delayed doses.",
      "Use official health sources to verify vaccine information.",
      "Report concerning reactions to an appropriate healthcare professional.",
    ],
    remember:
      "Vaccines differ in their indications, schedules, benefits and possible side effects. Individual vaccination decisions should follow current official guidance and qualified medical advice.",
  },

  sleep: {
    intro:
      "Sleep is a natural process that allows the body and brain to rest and carry out important functions. Healthy sleep involves getting an appropriate amount of sleep, maintaining a reasonably regular schedule and having sleep that feels sufficiently restful.",
    whyItMatters:
      "Sleep supports attention, learning, memory, emotional regulation and physical recovery. Regularly inadequate or disrupted sleep can affect concentration, mood, daily performance and overall health. Sleep needs differ by age and individual circumstances.",
    sections: [
      {
        title: "Understanding sleep needs",
        text:
          "Sleep requirements vary across life stages. Children and teenagers generally need more sleep than adults, while some people need more or less than others within recommended ranges. Feeling rested, being able to concentrate and maintaining a stable routine can provide useful clues, although persistent sleep problems deserve attention.",
      },
      {
        title: "Building a healthy sleep routine",
        text:
          "Try to go to bed and wake up at consistent times, including on most weekends. Create a quiet, comfortable and dark sleeping environment where possible. Reduce caffeine later in the day, avoid heavy meals immediately before bed if they disturb your sleep, and establish a calming wind-down routine. Bright screens and stimulating activities near bedtime can make it harder for some people to settle.",
      },
      {
        title: "When sleep needs attention",
        text:
          "Stress, irregular schedules, some medicines and health conditions can affect sleep. If difficulty falling asleep, frequent waking, loud snoring with breathing pauses, or excessive daytime sleepiness continues, consult a qualified healthcare professional. Do not rely on sleeping pills or supplements without appropriate guidance.",
      },
    ],
    habits: [
      "Keep bedtime and wake-up times reasonably consistent.",
      "Make your sleeping area comfortable and suitable for rest.",
      "Limit caffeine later in the day.",
      "Build a relaxing routine before bedtime.",
      "Seek advice if sleep problems persist or affect daily functioning.",
    ],
    remember:
      "Healthy sleep is about regularity, sufficient rest and quality, not simply spending a certain number of hours in bed.",
  },

  hydration: {
    intro:
      "Hydration means maintaining enough water in the body for its normal functions. Water supports temperature regulation, circulation, digestion and the movement of nutrients and waste products. The amount a person needs varies with age, activity, climate, diet and health.",
    whyItMatters:
      "The body loses water through urine, sweat, breathing and other normal processes. Replacing these losses helps the body function properly. Hot weather, physical activity, fever, vomiting or diarrhoea can increase fluid losses and make hydration more important.",
    sections: [
      {
        title: "Understanding daily fluid needs",
        text:
          "There is no single daily water target that suits every person in every situation. Needs can change with temperature, exercise, pregnancy, age and medical conditions. Water is a useful everyday choice, and fluids can also come from foods and other beverages. People who have been advised to restrict fluids because of a medical condition should follow their healthcare professional's instructions.",
      },
      {
        title: "Signs of possible dehydration",
        text:
          "Thirst, a dry mouth, darker-than-usual urine and urinating less frequently can be signs that someone needs more fluids. These signs are not perfect measures and can have other explanations. Severe dehydration may involve confusion, fainting or marked weakness and requires urgent medical assessment.",
      },
      {
        title: "Staying hydrated safely",
        text:
          "Keep safe drinking water available and drink regularly, especially during heat or activity. Increase fluid intake appropriately when sweating more than usual. During significant fluid loss from vomiting or diarrhoea, an oral rehydration solution may be recommended; follow its instructions and seek medical advice when symptoms are severe or persistent. Avoid forcing excessive amounts of water in a short time.",
      },
    ],
    habits: [
      "Keep drinking water accessible throughout the day.",
      "Drink regularly and pay attention to thirst, especially in hot weather.",
      "Replace fluid losses during prolonged activity as appropriate.",
      "Choose safe drinking water and clean reusable bottles regularly.",
      "Seek medical help for severe dehydration signs or persistent fluid loss.",
    ],
    remember:
      "Hydration needs are individual. More water is not always better, and people with medical conditions affecting fluid balance should follow professional advice.",
  },
};

function TopicDetails() {
  const { topicId } = useParams();

  const topic = healthTopics.find((item) => item.id === topicId);
  const content = topicContent[topicId];

  if (!topic || !content) {
    return (
      <section className="topic-detail-not-found">
        <BookOpen size={40} />
        <h1>Topic not found</h1>
        <p>This health topic may not be available.</p>
        <Link to="/topics" className="topic-detail-button">
          Browse all topics
        </Link>
      </section>
    );
  }

  const Icon = topic.icon;

  return (
    <div className="topic-detail-page">
      <section className="topic-detail-hero">
        <div className="topic-detail-container">
          <Link to="/topics" className="topic-detail-back">
            <ArrowLeft size={17} />
            All health topics
          </Link>

          <div className="topic-detail-title-row">
            <div className="topic-detail-icon">
              <Icon size={30} strokeWidth={1.8} />
            </div>

            <span className="section-eyebrow">
              Health Awareness Guide
            </span>
          </div>

          <h1>{topic.title}</h1>
          <p className="topic-detail-intro">{content.intro}</p>
        </div>
      </section>

      <main className="topic-detail-container topic-detail-main">
        <section className="topic-detail-highlight">
          <div className="topic-detail-highlight-icon">
            <HeartPulse size={25} />
          </div>
          <div>
            <h2>Why this topic matters</h2>
            <p>{content.whyItMatters}</p>
          </div>
        </section>

        <div className="topic-detail-layout">
          <article className="topic-detail-article">
            {content.sections.map((section, index) => (
              <section className="topic-detail-section" key={section.title}>
                <span className="topic-detail-section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              </section>
            ))}
          </article>

          <aside className="topic-detail-sidebar">
            <div className="topic-detail-habits">
              <div className="topic-detail-sidebar-heading">
                <div className="topic-detail-small-icon">
                  <CheckCircle2 size={21} />
                </div>
                <h2>Healthy habits</h2>
              </div>

              <ul>
                {content.habits.map((habit) => (
                  <li key={habit}>
                    <CheckCircle2 size={17} />
                    <span>{habit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="topic-detail-remember">
              <Lightbulb size={23} />
              <h2>Remember this</h2>
              <p>{content.remember}</p>
            </div>
          </aside>
        </div>

        <section className="topic-detail-footer-cta">
          <div className="topic-detail-footer-icon">
            <ShieldCheck size={26} />
          </div>
          <div>
            <span className="section-eyebrow">Keep learning</span>
            <h2>Build your health awareness</h2>
            <p>
              Explore other topics and test your understanding
              through the HealthAware quiz.
            </p>
          </div>
          <div className="topic-detail-footer-actions">
            <Link to="/topics" className="topic-detail-button secondary">
              More topics
            </Link>
            <Link to="/quiz" className="topic-detail-button">
              Take the quiz
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <p className="topic-detail-disclaimer">
          Educational information only. This page does not provide
          a diagnosis or replace personalised advice from a qualified
          healthcare professional.
        </p>
      </main>
    </div>
  );
}

export default TopicDetails;
