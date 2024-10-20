// StatusDropdown.tsx
import React, { useState } from "react";
import { Button } from "@/app/ui/button/button";
import styles from "./status-dropdown.module.css";

interface StatusDropdownProps {
  selectedStatus: string | null;
  onStatusSelect: (status: string | null) => void;
  statusOptions: string[];
}

export const StatusDropdown: React.FC<StatusDropdownProps> = ({
  selectedStatus,
  onStatusSelect,
  statusOptions,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const handleStatusSelect = (status: string | null) => {
    onStatusSelect(status); // Call the parent component's function to set the selected status
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className={styles["status-dropdown-container"]}>
      <Button className={styles["status-button"]} onClick={toggleDropdown}>
        <div>{selectedStatus ? selectedStatus : "Filter By Status"}</div>
        <img src="/icons/polygon.svg" alt="polygon" />
      </Button>
      {isDropdownOpen && (
        <div className={styles["status-dropdown-menu"]}>
          {statusOptions.map((status) => (
            <div
              key={status}
              className={styles["status-dropdown-item"]}
              onClick={() => handleStatusSelect(status)}
            >
              {status}
            </div>
          ))}
          {/* Add an option to clear the filter */}
          <div
            className={styles["status-dropdown-item"]}
            onClick={() => handleStatusSelect(null)} // Reset to no status
            style={{ fontWeight: "bold", color: "#FF6347" }} // Style for "Clear Filter"
          >
            Clear Filter
          </div>
        </div>
      )}
    </div>
  );
};