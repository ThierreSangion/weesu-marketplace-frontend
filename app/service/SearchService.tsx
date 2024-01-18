
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3005"
})

export type Product = {
    id: string;
    title: string
    thumbnail: string
    price: number;
    original_price: number;
}

export type SearchResponse = {
    data: Product[]
}

export class SearchService{
    search(term: string){
        return axiosInstance.get("api/search/products", {params: {term}});
    }
}

