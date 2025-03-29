<template>
  <div>
  <section class="movie-list" v-if="store.listMovies">
 
      <CardMovie  
        v-for="(movie,index) in store.listMovies" 
        :key="index" 
        :movie="movie"
      />  
  </section> 
   <div class="movie-list-alert" v-else>
      <p>No search results found</p>
    </div>  
  </div>
</template>

<script setup> 
import { onMounted } from 'vue'
import CardMovie from "@/components/movies/CardMovies.vue"
import { useMoviesStore } from "@/store/movies.store" 
// Get store instance
const store = useMoviesStore()

// Fetch movies when the component is mounted
onMounted(() => { 
  fetchMovies()
})

// Function to fetch movies
async function fetchMovies() {
  await store.getMovies()
}
</script> 
 