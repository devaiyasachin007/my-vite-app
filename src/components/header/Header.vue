<template>
    <header>
        <h1>Popular Movies</h1>
        <div class="search-container">
            <input type="text" id="search" :required="true" v-model="inputValue" @input="inputValueChange"  placeholder="Search for a movie...">
        </div>
    </header>
  </template>
  
  <script setup> 
  import { ref, watch } from "vue"; 
  import { useMoviesStore } from "@/store/movies.store";
  
  const inputValue = ref("");
   
  watch(inputValue,(val) => { 
    if (val == "") {
      store.getMovies('movies');
      return;
    }
  })
  const store = useMoviesStore();
  
  const inputValueChange = () => {
    const search = inputValue.value.trim().toLowerCase();
    if (search === "") {
      store.getMovies('movies');
      return;
    }
  
    setTimeout(() => {
      store.getMovies(search);
    }, 1000);
  };
  </script>
  
 