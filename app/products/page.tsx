'use client'

import { useSearchParams } from "next/navigation";
import { Product, SearchResponse, SearchService } from "../service/SearchService";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";

const api = new SearchService()

export default function ProductsList(){
  const [ searchParams ] = useSearchParams();
  const searchTerm =  searchParams[1];
 
  const [products, setProducts] = useState<SearchResponse>({data: []})
 
  useEffect(() => {
    if (searchTerm) {
      api.search(searchTerm as string).then(response => {
        setProducts(response.data);
      });
    }
    
   }, [searchTerm]);

   return (
    <>
      <Header searchTermProp={searchTerm} />
       <div className="flex justify-center" style={{backgroundColor: 'white'}}>
       <div className="grid grid-cols-4 gap-4  mt-20">
         {Array.isArray(products.data) && products.data.map((product: Product) => (
           <ProductCard key={product.id} product={product} term={searchTerm} />
         ))}
       </div>
     </div>
    </>
   );
 }
