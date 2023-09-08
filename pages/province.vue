<template>
  <div class="p-8">
    <h1 class="text-3xl font-semibold mb-2 font-lao">ແຂວງທັງໜົດ</h1>
    <h2 class="text-xl mb-4 font-lao">{{ provinces.length }} ແຂວງ</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="province in provinces" :key="province.id" class="p-4 bg-white rounded-lg shadow">
        <div class="flex items-center mb-2">
          <img class="h-12 w-12 mr-2 rounded-full" :src="province.avatar" alt="Avatar">
          <div>
            <p class="text-lg">{{ province.name }}</p>
            <p class="text-gray-500">{{ formatDate(province.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      provinces: [],
    };
  },
  async created() {
    try {
      const response = await fetch('https://64e2d7cabac46e480e77d47c.mockapi.io/api/provinces');
      if (response.ok) {
        this.provinces = await response.json();
      } else {
        console.error('Failed to fetch provinces:', response.status);
      }
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    },
  },
};
</script>
