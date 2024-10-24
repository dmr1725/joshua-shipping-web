import React from "react";
import styles from "./progress-tracker.module.css"; // Import your CSS module

interface Steps {
  label: string;
  completed: boolean;
}

interface ProgressTrackerProps {
  statusOptions: string[];
  currentStatus: string;
}

export const ProgressTracker : React.FC<ProgressTrackerProps> = ({statusOptions, currentStatus}) => {
  const steps = generateSteps(statusOptions, currentStatus)

  return (
    <div className="flex flex-col gap-[2rem]">
        <div className="text-[1.5rem] font-bold leading-normal not-italic">Container Status</div>
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
    </div>
  );
};

const generateSteps = (statusOptions: string[], currentStatus: string): Steps[] => {
  const indexOfCurrentStatus = statusOptions.indexOf(currentStatus)

  return statusOptions.map((status, index) => {
    return {
      label: status,
      completed: index <= indexOfCurrentStatus
    }
  })
}