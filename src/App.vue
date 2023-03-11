<template >
  <div class="bg-zinc-100">

    <div class="max-w-7xl m-auto bg-zinc-300 pb-10">
      <!--header-->
      
        <Header />

      
      <!--body-->
      <div><Users /></div>
      <div class="flex justify-center items-center  gap-10 my-10">
        <div><Table /></div>
        <div><Form /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";
import Form from "./components/Form.vue";
import Users from "./components/Users.vue";

export default {
  components: {
    Header,
    Table,
    Form,
    Users
  },
};
</script>
