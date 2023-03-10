<template>
 
    <div class="flex  gap-10 justify-end mt-5 mx-5">
      <div v-for="user in users" :key="user.id">
        <UserCard :user="user" />
      </div>
  
  
  </div>
</template>

<script>
import UserCard from "./UserCard.vue";
import { users } from "../assets//mocks/api";
export default {
  components: { UserCard },

  name: "App",
  data: () => ({
    users,
  }),
  created() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      this.users = users;
    },
  },
};
</script>


<style>
</style>