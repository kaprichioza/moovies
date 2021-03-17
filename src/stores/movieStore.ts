import { makeAutoObservable, makeObservable } from "mobx";
import { httpTransport } from "../services/httpTransport";
 
export class MovieStore {
    constructor() {
        makeAutoObservable(this);
    }
    movies = ['0', '1', '2'];
    isLoading = true;
    fetch = async () => {
        const response = await httpTransport.get('/movies');
        this.movies = response.data.movies;
        this.isLoading = false;
    }
    get total() {
        return this.movies.length;
    }
}
