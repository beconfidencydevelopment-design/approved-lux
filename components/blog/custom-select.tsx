import { useState, useRef, useEffect } from "react";

export default function CustomDropdown({ options, defaultValue }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const containerRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        className="button dropdown-toggle flex items-center justify-between w-full py-2 px-4 border border-[#E6E6E6] rounded-lg bg-white cursor-pointer"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <div className="text-[#757575] text-base leading-6">
          {selected.label}
        </div>
        <span className="button-after">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#757575"
            width="20"
            height="20"
            className={`arrow-icon ${open ? "rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div className="dropdown-list absolute z-10 mt-1 w-full bg-white border border-[#E6E6E6] rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={`first:rounded-tl-lg first:rounded-tr-lg last:rounded-br-lg last:rounded-bl-lg borderdropdown-element px-4 py-2 cursor-pointer text-base leading-6 ${
                selected.value === option.value
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-[#757575]"
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
