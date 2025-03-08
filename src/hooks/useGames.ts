// import { useEffect, useState } from "react";
// import apiClient from "@/services/api-client";
// import { CanceledError } from "axios";
// import { Genre } from "./useGenres";
import useData from "./useData";
import { GameQuery } from "@/App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGamesResponse {
//   count: number;
//   // next: string;
//   // previous: string;
//   results: Game[];
// }

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  GameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: GameQuery.genre?.id,
        platforms: GameQuery.platform?.id,
        ordering: GameQuery.sortOrder,
        search: GameQuery.searchText
      },
    },

    //array of dependencies
    // [selectedGenre?.id, selectedPlatform?.id]

    //array of dependencies
    [GameQuery]
  );

//Instead of this codde we will use useData hook as a general hook for fetching data
//     {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((response) => {
//         setGames(response.data.results);
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

//   return { games, error, loading };
// };
export default useGames;
