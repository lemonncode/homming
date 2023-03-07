<template>
  <div>{{ formatDate(date) }}</div>
</template>

<script>

export default {
  data() {
    return {
      date: "",
    };
  },
  methods: {
  
    formatDate() {
      const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'  };
      return new Date().toLocaleDateString('en', options);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style></style>
