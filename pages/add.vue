<template>
    <div>
      <NuxtLink to="/view">
        <Button class="py-2 px-3 bg-blue-500 rounded-full">Back</Button>
      </NuxtLink>
      <h2 class="text-2xl font-semibold mb-4">Add Item</h2>
      <form @submit.prevent="addItem" class="grid grid-cols-2 gap-4">
        <!-- Form fields for adding new data -->
        <div v-for="field in newItemFields" :key="field.key" class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" :for="field.key">{{ field.label }}:</label>
          <input
            class="rounded-full py-2 px-3 w-full"
            v-model="newItem[field.key]"
            :type="field.type"
            :id="field.key"
            :placeholder="field.placeholder"
            :required="field.required"
          />
        </div>
        <!-- Add more form fields as needed for your data -->
  
        <!-- Buttons in the second column -->
        <div class="col-span-2 flex justify-end">
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-full">Add</button>
          <router-link to="/items" class="bg-red-500 text-white px-4 py-2 rounded-full">Cancel</router-link>
        </div>
      </form>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        newItem: {},
        newItemFields: [
          { key: "field1", label: "Field 1", type: "text", placeholder: "Enter Field 1", required: true },
          { key: "field2", label: "Field 2", type: "text", placeholder: "Enter Field 2", required: true },
          { key: "field3", label: "Field 3", type: "text", placeholder: "Enter Field 3", required: true },
          { key: "field4", label: "Field 4", type: "text", placeholder: "Enter Field 4", required: true },
          { key: "field5", label: "Field 5", type: "text", placeholder: "Enter Field 5", required: true },
          { key: "field6", label: "Field 6", type: "text", placeholder: "Enter Field 6", required: true },
          { key: "field7", label: "Field 7", type: "text", placeholder: "Enter Field 7", required: true },
          { key: "field8", label: "Field 8", type: "text", placeholder: "Enter Field 8", required: true },
          { key: "field9", label: "Field 9", type: "text", placeholder: "Enter Field 9", required: true },
        ],
      };
    },
    methods: {
      addItem() {
        // Validate the newItem object (e.g., check if all required fields are filled)
        const requiredFields = this.newItemFields.filter((field) => field.required);
        for (const field of requiredFields) {
          if (!this.newItem[field.key]) {
            alert(`Please fill in ${field.label}.`);
            return;
          }
        }
  
        // Generate an ID for the new item (replace this with your preferred ID generation logic)
        const newItemId = this.$store.state.items.length + 1;
  
        // Create a new item and add it to the items array using Vuex or another state management solution
        const newItem = { id: newItemId, ...this.newItem };
        this.$store.commit("addItem", newItem);
  
        // Reset the newItem object and navigate back to the items list
        this.newItem = {};
        this.$router.push("/view");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific CSS styles here */
  </style>
  