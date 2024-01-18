
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3005"
})

export type ProductWithDescription = {
        id: string;
        title: string;
        price: number;
        original_price: number;
        plain_text: string;
        pictures: {
          url: string;
        }[];
        attributes: {
          name: string;
          value_name: string;
        }[];
    }

export type DescriptionResponse = {
    data: ProductWithDescription[]
}

export class DescriptionService{
    searchByTermAndId(id: string){
        return axiosInstance.get("api/fullproduct/full-product-by-id", {params: { id}});
    }
}