<template>
  <div>
    <div class="flex gap-10 mb-4">
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-greenblue focus:border-greenblue block w-1/3 p-2.5"
        placeholder="type"
        required
        v-model="typeFilter"
      />
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-greenblue focus:border-greenblue block w-1/3 p-2.5"
        placeholder="user"
        required
        v-model="userFilter"
      />
    </div>

    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="text-gray-500 dark:text-gray-400 text-sm">
        <thead class="text-xs text-gray-800 uppercase bg-greenblue">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Type</th>
            <th scope="col" class="px-6 py-3">Rented From</th>
            <th scope="col" class="px-6 py-3">Rented To</th>
            <th scope="col" class="px-6 py-3">Occupied</th>
            <th scope="col" class="px-6 py-3">User Name</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="prop in properties"
            :key="prop.id"
            class="border-b dark:bg-gray-900 dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
            >
              {{ prop.name }}
            </th>
            <td class="px-6 py-4">
              {{ prop.propType }}
            </td>
            <td class="px-6 py-4">
              <div v-if="prop.rentedFrom">
                {{ formatDate(prop.rentedFrom) }}
              </div>
              <div v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </td>
            <td class="px-6 py-4">
              <div v-if="prop.rentedTo">
                {{ formatDate(prop.rentedTo) }}
              </div>
              <div v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </td>

            <td class="px-6 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </td>
            <td class="px-6 py-4">
              {{ prop.userName }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { users, propertyTypes, properties } from "../assets//mocks/api";

export default {
  name: "App",
  data: () => ({
    users,
    propertyTypes,
    properties,
    typeFilter: "",
    userFilter: "",
  }),
  created() {
    this.loadProperties();
  },
  computed: {
    filteredProps() {
      let searchTerm = this.typeFilter.toLowerCase();
      return this.properties.filter((prop) => {
        prop.propType == searchTerm;

        return (this.properties = properties.includes(searchTerm));
      });
    },
  },

  methods: {
    loadProperties() {
      this.properties = properties;

      this.getUserName();

      this.getPropType();
    },

    getUserName() {
      for (let prop in properties) {
        let uId = properties[prop].userId;

        properties[prop].userName = this.users.filter(
          (user) => user.id == uId
        )[0].name;
      }
    },
    getPropType() {
      for (let prop in properties) {
        let tyId = properties[prop].typeId;

        this.properties[prop].propType = this.propertyTypes.filter(
          (property) => property.id == tyId
        )[0].name;
      }
    },
    formatDate(date) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
