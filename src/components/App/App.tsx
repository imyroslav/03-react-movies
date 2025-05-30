import axios from "axios";

import css from "./App.module.css"
import SearchBar from "../SearchBar/SearchBar";
// import MovieGrid from "../MovieGrid/MovieGrid";


export default function App() {

    const handleSearch = async (newQuery: string) => {
        const result = await axios.get(`http://hn.algolia.com/api/v1/search?query=${newQuery}`);
        console.log(result)
    }

    return (
        <div className={css.app}>
            <SearchBar onSearch={handleSearch} />
            {/* <MovieGrid /> */}
        </div>
        
    )
}