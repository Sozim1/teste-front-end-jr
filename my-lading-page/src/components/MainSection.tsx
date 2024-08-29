// src/components/MainSection.tsx
import React from 'react';

const MainSection: React.FC = () => {
  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>We offer amazing solutions to help your business grow. Learn more about what we do and how we can assist you.</p>
        <button>Get Started</button>
      </section>
      <section>
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </section>
    </main>
  );
};

export default MainSection;
