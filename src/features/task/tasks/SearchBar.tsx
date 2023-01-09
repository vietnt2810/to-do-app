import React from "react";

import { SearchBar, SearchInput } from "./tasksStyles";

interface SearchProps {
  filterValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ filterValue, handleChange }) => {
  return (
    <SearchBar>
      <SearchInput
        placeholder="Search a task"
        value={filterValue}
        onChange={handleChange}
      />
    </SearchBar>
  );
};

export default Search;
