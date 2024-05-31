import React from 'react';
import styles from './button.css'; // Import using CSS Modules

const ResumeButton = () => {

    const handleClick = () => {
        // Replace with your actual download logic
        // This example opens a dummy link for demonstration
        window.open("https://drive.google.com/file/d/1QMWe--Yf1AfrLJO7871q59XSwuz7vE22/view?usp=sharing", "_blank"); 
      };

  return (
    <button className="resume-button" onClick={handleClick}>
      Resume
    </button>
  );
};

export default ResumeButton;

// styles.css





// styles.css
