import { CategoryMovies, ListingProps } from "../type";

export function groupByCategory(movies: ListingProps[]): CategoryMovies[] {
    const categoryMovies: CategoryMovies[] = [];
    movies.forEach((movie) => {
        const category = movie.genres[0];
        const categoryMovieIndex = categoryMovies.findIndex(
            (cm) => cm.category === category
        );
        if (categoryMovieIndex === -1) {
            categoryMovies.push({ category, movies: [movie] });
        } else {
            categoryMovies[categoryMovieIndex].movies.push(movie);
        }
    });
    return categoryMovies;
}