import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "@/services/api-client";
import useData from "./useData";

export interface Genre{
    id: number;
    name: string;    
}

// interface FetchGenresResponse {
//   count: number;
//     results: Genre[];
// }

const useGenres = () =>  useData<Genre>('/genres');


    //Instead of this codde we will use useData hook as a general hook for fetching data
//{
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((response) => {
//         setGenres(response.data.results);
//         setLoading(false);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setLoading(false);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return { genres, error, loading };
//};
export default useGenres;
