"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import BlogItem from "./blog-item";

export default function BlogList({
  initialArticles = [],
  searchValue,
  dateValue,
  sortByValue,
  tagValue,
  setTags,
  setLoadingValue,
}) {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const buildApiUrl = (
    pageNumber = 1,
    search = "",
    date = null,
    tag = "",
    sortBy = ""
  ) => {
    const limit = getPageLimit(pageNumber);
    let url = `https://backend.approvedexperiences.com/api/articles?page=${pageNumber}&limit=${limit}`;

    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }

    if (date) {
      url += `&publishedFrom=${dayjs(date).format(
        "YYYY-MM-DD"
      )}&publishedTo=${dayjs(date).format("YYYY-MM-DD")}`;
    }

    if (tag) {
      url += `&tags=${tag}`;
    }

    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }

    return url;
  };

  const buildUniqueTags = (articles) => {
    const tagSet = new Set();

    articles.forEach((article) => {
      if (Array.isArray(article.tags)) {
        article.tags.forEach((tag) => {
          tagSet.add(tag);
        });
      }
    });

    return Array.from(tagSet).map((tag) => ({
      name: tag,
      value: tag,
    }));
  };

  const fetchArticles = async (
    pageNumber = 1,
    reset = false,
    search = "",
    date = null,
    tag = "",
    sortBy = ""
  ) => {
    if (reset) {
      setLoading(true);
      setLoadingValue(true);
    }

    try {
      const res = await fetch(
        buildApiUrl(pageNumber, search, date, tag, sortBy),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (data?.data?.articles) {
        setArticles((prev) =>
          reset ? data.data.articles : [...prev, ...data.data.articles]
        );

        const mergedArticles = reset
          ? data.data.articles
          : [...articles, ...data.data.articles];

        const allTags = buildUniqueTags(mergedArticles);
        setTags(allTags);

        setHasNextPage(data.data.pagination.hasNextPage);
      }
    } catch (error) {
      setLoading(false);
      setLoadingValue(false);
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
      setLoadingValue(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchArticles(1, true, searchValue, dateValue, tagValue, sortByValue);
  }, [searchValue, dateValue, tagValue, sortByValue]);

  const handleLoadMore = () => {
    setButtonLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(
      nextPage,
      false,
      searchValue,
      dateValue,
      tagValue,
      sortByValue
    ).finally(() => setButtonLoading(false));
  };

  const getPageLimit = (pageNumber) => (pageNumber % 2 === 1 ? 7 : 8);

  return (
    <div className="mx-auto max-w-7xl mt-6">
      <div className="grid md:grid-cols-6 gap-6">
        {loading ? (
          Array(7)
            .fill(0)
            .map((_, index) => {
              const isTwoColumnRow = index % 5 < 2;
              return (
                <div
                  key={`skeleton-${index}`}
                  className={`${
                    isTwoColumnRow
                      ? "md:col-span-3 h-[360px] md:h-[500px]"
                      : "md:col-span-2 h-[360px]"
                  } bg-gray-200 rounded-lg animate-pulse`}
                ></div>
              );
            })
        ) : articles.length > 0 ? (
          articles.map((item, index) => {
            const isTwoColumnRow = index % 5 < 2;

            return (
              <div
                key={index}
                className={`${
                  isTwoColumnRow ? "md:col-span-3" : "md:col-span-2"
                }`}
              >
                <BlogItem item={item} />
              </div>
            );
          })
        ) : (
          <div className="col-span-6 h-48 flex items-center justify-center text-gray-500 text-lg border border-dashed border-gray-300 rounded-lg">
            No Blogs Found
          </div>
        )}
      </div>
      {hasNextPage && articles.length > 0 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            disabled={buttonLoading}
            className="border border-[#001F63] transition hover:bg-[#001F63] hover:text-white rounded-[56px] text-base font-medium text-[#001F63] bg-[#F7FAFF] py-4 px-8 cursor-pointer flex items-center justify-center gap-4 group w-full md:w-auto"
          >
            Load more Blogs
            {buttonLoading && (
              <svg
                className="w-5 h-5 animate-spin text-[#001F63] group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
