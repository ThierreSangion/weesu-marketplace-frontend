'use client'

import React, { useState } from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import LogoImage from "@/public/logo.svg";
import Link from "next/link";

const SearchFieldComponent = (input: {search: (search: string) => void}) => {
  const [searchTerm, setSearchTerm] = useState("");

   const handleSearch = (event: React.KeyboardEvent) => {
    if(event.key === "Enter"){
      input.search(searchTerm);
    }
   } 

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", 
        backgroundColor: "#f1f1f1",
      }}
    >
      <Image
        src={LogoImage}
        alt="Google Logo"
        width={272}
        height={120}
        style={{ marginBottom: "20px" }}
      />
      <div
        style={{
          width: "40%",
          backgroundColor: "white",
          borderRadius: "24px",
          display: "flex",
          alignItems: "center",
          padding: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
         <InputBase
           placeholder="Tap to search a product"
           value={searchTerm}
           onKeyDown={handleSearch}
           onChange={(event) =>{
            setSearchTerm(event.target.value)
          }}
           style={{
             marginLeft: "8px",
             flex: 1,
             border: "none",
           }}
         />

          <Link href={{
            pathname: '/products',
            query: {
              term: encodeURIComponent(searchTerm)
            }
          }}>
          <SearchIcon />
          </Link>
      </div>
    </div>
  );
};

export default SearchFieldComponent;