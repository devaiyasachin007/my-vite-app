<template>  
  <div>
    <header>
      <h1>Movie Details</h1>
      <button class="home-btn" @click="goHome">Home</button>
    </header>
    <main class="movie-more-detail">
      <article class="movie-info"  v-if="movie">
        <div class="movie-poster">
          <img   :src="movie.Poster" :alt="movie.Title" >
        </div>
        <div class="movie-description">
          <h2 class="movie-title">{{ movie.Title }}</h2>
          <p class="year-release">Year:  {{ movie.Year }}</p>
          <p class="released">Released: {{ movie.Released }}</p>
          <p class="director">Director: {{ movie.Director }}</p>
          <p class="actors">Actors: {{ movie.Actors }}</p>
          <p class="language">Language: {{ movie.Language }}</p>
          <p class="awards">Awards: {{ movie.Awards }}</p>
          <p class="metascore">Metascore: {{ movie.Metascore }}</p>
          <p class="imdb-rating">IMDb Rating: {{ movie.imdbRating }}</p>
          <p class="imdb-votes">IMDb Votes: {{ movie.imdbVotes }}</p>
          <p class="plot">
            <strong>Plot:</strong>  {{ movie.Plot }}
          </p>
        </div>
      </article>
    </main>
  </div>  
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api/client-http";

// Get route and router instances
const route = useRoute();
const router = useRouter();
const movieId = route.params.id; // No need for type annotations in JS

// Reactive reference for movie data
const movie = ref(null);

// Fetch movie data from API
const fetchMovieData = async () => {
  try {
    const response = await api.get("", {
      params: { i: movieId },
    });
    movie.value = response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};

// Navigate to home page
const goHome = () => {
  router.push("/my-vite-app/");
};

// Fetch movie data when the component is mounted
onMounted(() => {
  fetchMovieData();
});
</script>
