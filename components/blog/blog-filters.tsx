import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BlogFilters({ setSortBy, setTagValue, tags, loading }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By");
  const [showRightIndicator, setShowRightIndicator] = useState(true);
  const containerRef = useRef();
  const swiperRef = useRef();

  const sorts = [
    {
      value: "",
      name: "Sort By",
    },
    {
      value: "latest",
      name: "Latest",
    },
    // {
    //   value: "most-popular",
    //   name: "Most Popular",
    // },
    {
      value: "oldest",
      name: "Oldest",
    },
  ];

  const mergedTags = [{ name: "All Blogs", value: "" }, ...(tags || [])];

  const handleTagChange = (key, value) => {
    if (activeIndex === key) return;
    setActiveIndex(key);
    setTagValue(value);
  };

  const handleSelect = (name, value) => {
    setSelected(name);
    setSortBy(value);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const capitalizeWords = (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  const handleSlideChange = (swiper) => {
    if (swiper.isEnd) {
      setShowRightIndicator(false);
    } else {
      setShowRightIndicator(true);
    }
  };

  return (
    <div className="mx-auto max-w-7xl mt-8 md:mt-12">
      <div className="flex items-center justify-between">
        <div className="flex-1 overflow-hidden relative" ref={swiperRef}>
          <Swiper
            slidesPerView="auto"
            loop={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {loading
              ? Array(15)
                  .fill(0)
                  .map((_, i) => (
                    <SwiperSlide className="w-auto! px-2" key={`skeleton-${i}`}>
                      <div className="w-[100px] h-10 bg-gray-200 animate-pulse rounded-lg"></div>
                    </SwiperSlide>
                  ))
              : mergedTags.map((item, key) => (
                  <SwiperSlide className="w-auto!" key={key}>
                    <div
                      key={key}
                      className={`${
                        activeIndex === key ? "active" : ""
                      } cursor-pointer tag-item transition shrink-0 text-base text-[#757575] leading-6 font-medium py-3 px-4 rounded-lg`}
                      onClick={() => handleTagChange(key, item.value)}
                    >
                      {capitalizeWords(item.name)}
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>

          {showRightIndicator && !loading && (
            <div
              className="absolute top-0 right-0 h-full w-[88px] pointer-events-none z-1"
              style={{
                background:
                  "linear-gradient(270deg, #FFFFFF 59.29%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
          )}
        </div>
        <div className="relative inline-block" ref={containerRef}>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="min-w-[136px] max-w-[250px] w-max text-base leading-6 font-medium flex items-center justify-between gap-2 text-[#757575] py-3 px-4 cursor-pointer"
          >
            <span>{selected}</span>
            <span>
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
            <div className="absolute z-10 -mt-2 w-full bg-white border border-[#E6E6E6] rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]">
              {sorts.map((option, key) => (
                <div
                  key={key}
                  className={`px-4 py-2 cursor-pointer text-base leading-6 font-medium ${
                    selected === option.name
                      ? "text-[#0E0E0F]"
                      : "text-[#757575]"
                  }`}
                  onClick={() => handleSelect(option.name, option.value)}
                >
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
