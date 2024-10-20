import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/app/ui/button/button";
import { createPortal } from "react-dom";
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStatusSelect = (status: string | null) => {
    onStatusSelect(status);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (buttonRef.current && isDropdownOpen) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
  }, [isDropdownOpen]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <div className={styles["status-dropdown-container"]}>
      <div ref={buttonRef}>
        <Button className={styles["status-button"]} onClick={toggleDropdown}>
          <div>{selectedStatus ? selectedStatus : "Filter By Status"}</div>
          <img src="/icons/polygon.svg" alt="dropdown icon" />
        </Button>
      </div>

      {isDropdownOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className={styles["status-dropdown-menu"]}
            style={{ position: "absolute", top: dropdownPosition.top, left: dropdownPosition.left }}
          >
            {statusOptions.map((status) => (
              <div
                key={status}
                className={styles["status-dropdown-item"]}
                onClick={() => handleStatusSelect(status)}
              >
                {status}
              </div>
            ))}
            <div
              className={styles["status-dropdown-item"]}
              onClick={() => handleStatusSelect(null)}
              style={{ fontWeight: "bold", color: "#FF6347" }}
            >
              Clear Filter
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};