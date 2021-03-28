import { makeAutoObservable, makeObservable } from "mobx";
import { httpTransport } from "../services/httpTransport";
import { createContext } from "react"

export const MoviesContext = createContext(null);
export class MovieStore {
    constructor() {
        makeAutoObservable(this);
    }
    movies = [];
    filmData = null;
    isLoading = true;
    fetch = async () => {
        const response = await httpTransport.get('/movies');
        this.movies = response.data.movies;
        this.isLoading = false;
    }
    get total() {
        return this.movies.length;
    }
    filmsByGenre = (genre: string) => {
        return this.movies.filter((filmData: any) => filmData.genres.some((item: string) => item === genre));
    }
    get genres () {
        const genres = new Set();
        this.movies.forEach((item: any) => {
            item.genres.forEach((genre: string) => {
                genres.add(genre);
            });
        });
        return Array.from(genres);
    }
    fetchFilm = async (slug: string) => {
        this.isLoading = true;
        const response = await httpTransport.get(`/movies/${slug}`);
        this.filmData = response.data;
        this.isLoading = false;
    }
}
