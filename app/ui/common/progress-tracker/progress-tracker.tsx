import React from "react";
import styles from "./progress-tracker.module.css"; // Import your CSS module

export const ProgressTracker = () => {
  const steps = [
    { label: "Received", completed: true },
    { label: "Port Pick Up", completed: true },
    { label: "Inspection", completed: false },
    { label: "At Warehouse", completed: false },
    { label: "Confirmed Inventory", completed: false },
  ];

  return (
    <div className={styles["progress-container"]}>
      {steps.map((step, index) => (
        <div key={index} className={styles["step-wrapper"]}>
          <div className={styles["step-container"]}>
            <div
              className={`${styles["circle"]} ${step.completed ? styles["completed"] : styles["pending"]}`}
            >
              {step.completed && <span>&#10003;</span>} {/* Checkmark if completed */}
            </div>
            {/* Conditionally render the line only if it's not the last step */}
            {index < steps.length - 1 && (
              <div
                className={`${styles["line"]} ${steps[index + 1].completed ? styles["completed-line"] : styles["pending-line"]}`}
              ></div>
            )}
          </div>
          <div className={styles["step-label"]}>{step.label}</div>
        </div>
      ))}
    </div>
  );
};