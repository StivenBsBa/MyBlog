import "../css/interests.css";
import AnimatedSection from "./AnimatedSection";
import interestsData from "../data/interestsData.json";

const Interests = () => {
  return (
    <AnimatedSection id="interests">
      <h2>Intereses o Pasatiempos</h2>
      <div className="interests-container">
        {interestsData.map((interest, index) => (
          <div className="card interest-card interactive-card" key={index}>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Interests;
