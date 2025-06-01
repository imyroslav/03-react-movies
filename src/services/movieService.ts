import { type Movie } from "../types/movie";

import axios from "axios";

export interface GetMovies {
    results: Movie[];
}

export const reqConfig = {
    url: "https://api.themoviedb.org/3/search/movie/550?api_key=427fa683bb09806c94c514056e83d736",
    headers: {
        accept: "aplication/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjdmYTY4M2JiMDk4MDZjOTRjNTE0MDU2ZTgzZDczNiIsIm5iZiI6MTcxNzIwNjgzNS40NDYsInN1YiI6IjY2NWE3ZjMzYTdmOTgzODgxMDZlN2M3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qCInCE6xYmdVuc7fLaX_-q2WoVg2bjui_RoB5WrsvE8`
    }
}

export const fetchMovies = async(newQuery: string): Promise<Movie[]> => {
    const result = await axios.get<GetMovies>(
        `${reqConfig.url}?query=${newQuery}`,
        reqConfig
    );
    
    
    return result.data.results;
}

