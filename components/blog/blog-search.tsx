import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDropdown from "./custom-select";

export default function BlogSearch({
  dateValue,
  setDateValue,
  searchValue,
  setSearchValue,
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const handleFiltersOpen = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleFiltersClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        popupRef.current?.contains(e.target) ||
        buttonRef.current?.contains(e.target)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleApply = () => {
    setDateValue(date);
    setOpen(false);
  };

  const handleReset = () => {
    setDate("");
  };

  return (
    <div className="border border-[#A3A3A3] max-w-[870px] w-full mx-auto rounded-[100px] flex items-center py-2 pl-4 md:pl-[30px] pr-2 gap-2.5">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#141B34"
          width="24"
          height="24"
        >
          <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </span>
      <div className="flex-1">
        <input
          className="w-full border-none focus:border-none focus:outline-0 text-[#757575] text-base leading-6 placeholder:[#757575]"
          type="text"
          placeholder="Search blogs..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="relative">
        <div
          ref={buttonRef}
          className="bg-[#E9F0FF] py-3 px-4 rounded-[60px] flex items-center gap-2.5 text-lg leading-6 font-medium text-[#2563EB] cursor-pointer"
          onClick={handleFiltersOpen}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#2563EB"
              width="24"
              height="24"
            >
              <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          </span>
          <span>Filters</span>
        </div>

        <div
          ref={popupRef}
          className={`absolute top-full right-0 bg-white p-5 rounded-[16px] w-[280px] md:w-[386px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] z-100 opacity-0 invisible translate-y-[40px] duration-500 ${
            open && "visible opacity-100 !translate-y-[16px]"
          }`}
        >
          <div className="flex items-center justify-between gap-2.5 mb-8">
            <h6 className="text-xl leading-7 font-semibold text-[#0E0E0F]">
              Filters Blogs
            </h6>
            <span className="cursor-pointer" onClick={handleFiltersClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#141B34"
                width="24"
                height="24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
          <div className="mb-8">
            <div className="">
              <label
                htmlFor=""
                className="text-base leading-6 text-[#0E0E0F] mb-2 block"
              >
                Select Date and year
              </label>
              <div className="py-2 px-4 border border-[#E6E6E6] rounded-lg flex items-center justify-between gap-2.5">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  placeholderText="Select date and year"
                  className="w-full border-none focus:outline-none text-[#757575] text-base"
                  calendarClassName="rounded-lg shadow-lg"
                />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#757575"
                    width="24"
                    height="24"
                  >
                    <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                </span>
              </div>
            </div>
            {/* <div>
              <label
                htmlFor=""
                className="text-base leading-6 text-[#0E0E0F] mb-2 block"
              >
                Blogs Categories
              </label>
              <CustomDropdown
                options={[
                  { value: "640x1536", label: "640x1536 (5:12)" },
                  { value: "768x1344", label: "768x1344 (4:7)" },
                  { value: "832x1216", label: "832x1216 (13:19)" },
                  { value: "1024x1024", label: "1024x1024 (1:1)" },
                ]}
                defaultValue={{ value: "1024x1024", label: "1024x1024 (1:1)" }}
              />
            </div> */}
          </div>
          <div className="flex flex-col gap-2.5">
            <button
              onClick={handleReset}
              className="border border-[#F51313] transition hover:bg-[#F51313] hover:text-white rounded-[56px] w-full block text-base leading-6 font-medium text-[#F51313] p-2 md:p-3 cursor-pointer"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className="border border-[#001F63] transition hover:bg-[#001F63] hover:text-white rounded-[56px] w-full block text-base leading-6 font-medium text-[#001F63] bg-[#F7FAFF] p-2 md:p-3 cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
