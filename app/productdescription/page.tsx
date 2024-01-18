"use client";

import ProductDescriptionComponent from "@/components/ProductDescription";
import {
  DescriptionResponse,
  DescriptionService,
  ProductWithDescription,
} from "../service/DescriptionService";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import { Box } from "@mui/material";

const api = new DescriptionService();

export default function Description() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") as string;
  const term = searchParams.get("term") as string

  const [description, setDescription] = useState<ProductWithDescription>();

  useEffect(() => {
    if (id) {
      api.searchByTermAndId(id as string).then((response) => {
        setDescription(response.data.data);
      });
    }
  }, [id]);

  return (
    <>
    <Header searchTermProp={term}/>
      <div className="flex justify-center" style={{ backgroundColor: "white" }}>
        <div className=" mt-10">
          {description && (
            <ProductDescriptionComponent productDescription={description} />
          )}
        </div>
      </div>
    </>
  );
}
