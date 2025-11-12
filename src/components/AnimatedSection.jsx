import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // La animación se dispara cuando el 10% de la sección es visible
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`section fade-in-section ${inView ? "is-visible" : ""}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
