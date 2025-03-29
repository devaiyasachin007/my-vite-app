<template>
  <article class="movie">
      <img :src="props.poster" :alt="props.title" class="movie-banner">
      <div class="movie-overlay">
          <h2 class="movie-title">{{ props.title }}</h2>
          <p class="movie-description">A brief description of Movie 1.</p>
          <p class="movie-details">Year: {{ props.year }}– | Type: {{ props.type }}</p> 
          <RouterLink  class="more-details" :to="{ name: 'movie-details', params: { id: props.id } }">More Details</RouterLink>
      </div>
  </article> 
</template>

<script setup> 
const props = defineProps({
  title: String,
  poster: String,
  year: String,
  type: String,
  id: String
});
</script>

 