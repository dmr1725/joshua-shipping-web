import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/app/ui/button/button";
import { createPortal } from "react-dom";
import styles from "./filter-dropdown.module.css";

interface FilterByDropdownProps {
  filterType: string;
  selectedFilter: string | null;
  onFilterSelect: (filterOption: string) => void;
  filterOptions: string[];
}

export const FilterByDropdown: React.FC<FilterByDropdownProps> = ({
  filterType,
  selectedFilter,
  onFilterSelect,
  filterOptions,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilterSelect = (filterOption: string) => {
    onFilterSelect(filterOption);
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
    <div className={styles["filter-dropdown-container"]}>
      <div ref={buttonRef}>
        <Button className={styles["filter-button"]} onClick={toggleDropdown}>
          <div>{selectedFilter ? selectedFilter : filterType}</div>
          <img src="/icons/polygon.svg" alt="dropdown icon" />
        </Button>
      </div>

      {isDropdownOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className={styles["filter-dropdown-menu"]}
            style={{ position: "absolute", top: dropdownPosition.top, left: dropdownPosition.left }}
          >
            {filterOptions.map((filterOption) => (
              <div
                key={filterOption}
                className={styles["filter-dropdown-item"]}
                onClick={() => handleFilterSelect(filterOption)}
              >
                {filterOption}
              </div>
            ))}
            <div
              className={styles["filter-dropdown-item"]}
              onClick={() => handleFilterSelect('')}
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