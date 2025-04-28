'use client';
import { useState } from 'react';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  return (
    <input
      type="text"
      placeholder="Search"
      className="border px-4 py-2 rounded-md w-full max-w-md"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};
