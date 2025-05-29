import styles from "./SearchBar.module.css";


export default function SearchBar() {

    const handleSubmit = (formData: FormData) => {
        console.log("handleSubmit", formData)
        const values = Object.fromEntries(formData);
        console.log(values);
    }


    return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <a
                    className={styles.link}
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Powered by TMDB
                    </a>
                    <form className={styles.form} action={handleSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Search movies..."
                        autoFocus
                    />
                    <button className={styles.button} type="submit">
                        Search
                    </button>
                    </form>
            </div>
        </header>
        
    )
}