<template>
  <article class="movie" :id="movie.imdbID">  
      <img :src="movie.Poster" :alt="movie.Title" class="movie-banner">
      <div class="movie-overlay">
          <h2 class="movie-title">{{ movie.Title }}</h2>
           <p class="movie-details">Year: {{ movie.Year }}</p> 
           <p class="movie-details">Type: {{ movie.Type }}</p> 
          <RouterLink  class="more-details" :to="{ name: 'movie-details', params: { id: movie.imdbID } }">More Details</RouterLink>
      </div>
  </article> 
</template>

<script setup> 
 defineProps({
  movie: {
    type: Object,
    required: true
  }
});
</script>

 