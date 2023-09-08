import React, { useState } from "react";

const SearchForm = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeInput, setTimeInput] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const createTimeInput = (event) => {
    const newTime = event.target.value;
    setTimeInput(newTime);
  };

  const createTimeOutput = (str) => {
    // time values are in seconds because that's what the API wants
    const now = Math.trunc(Date.now() / 1000);
    if (str === "All time") {
      return "";
    } else if (str === "Last 24hr") {
      return `numericFilters=created_at_i>${now - 24 * 60 * 60}`;
    } else if (str === "Past week") {
      return `numericFilters=created_at_i>${now - 24 * 60 * 60 * 7}`;
    } else if (str === "Past month") {
      return `numericFilters=created_at_i>${now - 24 * 60 * 60 * 31}`;
    } else if (str === "Past year") {
      return `numericFilters=created_at_i>${now - 24 * 60 * 60 * 365}`;
    } else {
      return "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTimeOutput = createTimeOutput(timeInput);
    // props.setParams([newTimeOutput]);
    if (searchQuery !== "") {
      // if no searchQuery exists
      const newQuery = `query=${searchQuery}`;
      props.setParams([newTimeOutput, newQuery]);
    } else {
      props.setParams([newTimeOutput]);
    }
    // I think this is the only set of query params that need to be supported
  };

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <p className="hn-logo">H</p>
        <label className="label">Search Hacker News </label>
        <input className="textbox" type="text" placeholder="Search stories by title, url or author" value={searchQuery} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p className="searchCat">Search</p>
      <select value={timeInput} onChange={createTimeInput}>
        <option value="All time">All time</option>
        <option value="Last 24hr">Last 24hr</option>
        <option value="Past week">Past week</option>
        <option value="Past month">Past month</option>
        <option value="Past year">Past year</option>
      </select>
    </div>
  );
};

export default SearchForm;
