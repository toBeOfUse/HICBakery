import { createContext, useContext } from "react";

export const SearchFilterContext = createContext();

export const useFilters = () => useContext(SearchFilterContext);
