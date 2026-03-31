"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import BlogTitle from "@/components/blog/blog-title";
import BlogSearch from "@/components/blog/blog-search";
import BlogFilters from "@/components/blog/blog-filters";
import BlogList from "@/components/blog/blog-list";

export default function BlogPageClient({ initialArticles }) {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState("");
  const [loadingValue, setLoadingValue] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  return (
    <div className="bg-white">
      <Header />
      <main>
        <section className="py-6 md:py-[70px] px-4">
          <BlogTitle />
          <BlogSearch
            searchValue={search}
            setSearchValue={setSearch}
            dateValue={date}
            setDateValue={setDate}
          />
          <BlogFilters
            setSortBy={setSortBy}
            setTagValue={setTagValue}
            tags={tags}
            loading={loadingValue}
          />
          <BlogList
            initialArticles={initialArticles}
            searchValue={debouncedSearch}
            dateValue={date}
            sortByValue={sortBy}
            tagValue={tagValue}
            setTags={setTags}
            setLoadingValue={setLoadingValue}
          />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
