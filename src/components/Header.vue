<template>
  <div class="flex bg-zinc-50">
    <div class="my-5 flex">
      <div class="border-l-4 border-orange-500">
        <h1
          class="font-roboto text-4xl text-greenblue font-semi-bold px-5 pt-3 hover:font-bold"
        >
          Homming
        </h1>
      </div>

      <div class="mt-5">
        <h1 class="font-roboto text-xl text-greenblue font-semi-bold">
          <livedatetime />
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import LiveDateTime from "./LiveDateTime.vue";
export default {
  components: {
    livedatetime: LiveDateTime,
  },
};
</script>

<style>
</style>