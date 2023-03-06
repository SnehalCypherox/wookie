
export interface ListingProps {
    backdrop: string,
    cast: string[],
    classification: string,
    director: string,
    genres: string[],
    id: string,
    imdb_rating: number,
    length: string,
    overview: string,
    poster: string,
    released_on: number,
    slug: string,
    title: string,
};

export type CategoryMovies = {
    category: string;
    movies: ListingProps[];
};

export interface headerType {
    setSearchData: (value: ListingProps[]) => void,
    searchData?: ListingProps[]
}