<template>
  <h1>jobs list</h1>
  <br />
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
      <h1>{{ job.title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "web dev", id: 1, details: "lorem" },
        { title: "web engineer", id: 2, details: "lorem" },
        { title: "web designer", id: 3, details: "lorem" },
      ],
    };
  },
};
</script>

<style>
.job h1 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h1:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>