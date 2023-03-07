<template>
  <div>
    <!--header-->
    <Header />
    <!--body-->
    <div class="flex justify-center items-center mx-20 my-10 gap-3 ">
      <Table />
      <div>
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";
import Card from "./components/Card.vue";
export default {
  components: {
    Header,
    Table,
    Card,
  },
};
</script>
