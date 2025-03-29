import HTTP from "@/api/client-http";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        listMovies: []
    }),
    actions: {
        async getMovies(search = 'movies') {

            const resp = await HTTP.get('', {
                params: {
                    s: search,
                }
            });
            this.listMovies = resp.data.Search;
        }
    }
});
