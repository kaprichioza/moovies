import { makeAutoObservable, makeObservable } from "mobx";
import { httpTransport } from "../services/httpTransport";
import { createContext } from "react"
import { toast } from 'react-toastify';

export const MoviesContext = createContext(null);
export class MovieStore {
    constructor() {
        makeAutoObservable(this);
    }
    movies = [];
    filmData = null;
    isLoading = true;
    fetch = async () => {
        try {
            const response = await httpTransport.get('/movies');
            this.movies = response.data.movies;
        }
        catch (error) {
            this.handleError(error);
        }
        this.isLoading = false;
    }
    get total() {
        return this.movies.length;
    }
    filmsByGenre = (genre: string) => {
        return this.movies.filter((filmData: any) => filmData.genres.some((item: string) => item === genre));
    }
    get genres() {
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
        try {
            const response = await httpTransport.get(`/movies/${slug}`);
            this.filmData = response.data;
        }
        catch (error) {
            this.handleError(error)
        }
        finally {
            this.isLoading = false;
        }
    }
    handleError(e: any) {
        toast.error("An error happened, try later");
        console.error(e);
    }
}
