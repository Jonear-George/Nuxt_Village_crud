<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-3xl font-semibold mb-4 font-lao">ເມຶອງທັງໜົດ</h1>
      <h2 class="text-xl mb-8 font-lao">{{ districts.length }} ຕົວເມືອງ</h2>
      
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="district in districts" :key="district.id" class="bg-white p-4 rounded shadow-md">
          <div class="flex items-center mb-2">
            <img class="h-12 w-12 rounded-full mr-2" :src="district.avatar" alt="Avatar">
            <div>
              <p class="text-lg font-semibold">{{ district.name }}</p>
              <p class="text-gray-500">{{ formatDate(district.createdAt) }}</p>
            </div>
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
      districts: []
    };
  },
  async created() {
    try {
      const response = await fetch('https://64e2d7cabac46e480e77d47c.mockapi.io/api/districts');
      if (response.ok) {
        this.districts = await response.json();
      } else {
        console.error('Failed to fetch districts:', response.status);
      }
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    }
  }
};
</script>
