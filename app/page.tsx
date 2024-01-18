'use client'
import React, { useEffect } from 'react';
import SearchFieldComponent from '@/components/SearchField';

export default function Home() {
  const search = (searchTerm: string) => {
    window.location.href = `/products?term=${encodeURIComponent(searchTerm)}`;
  };

  return (
    <>
      <SearchFieldComponent search={search} />
    </>
  );
}
