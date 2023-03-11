<template>
  <div>
    <div
      class="flex justify-center max-w-xs bg-white border border-gray-200 rounded-lg shadow px-5 py-3"
    >
      <div v-on="getAvatar()">
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            :src="img"
            alt="user-avatar"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {{ user.name }}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">Owner</span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              :href="user.id"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-greenblue rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >Profile</a
            >
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
              >Message</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data: () => ({
    img: "",
  }),
 
  methods: {
    getAvatar() {
    
        this.img = "https://i.pravatar.cc/300";
   
    },
  },
};
</script>

<style></style>
