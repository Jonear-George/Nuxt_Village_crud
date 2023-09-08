<template>
  <div>
    <!-- Add and Search Controls -->
    <div class="float-right mr-10">
      <div class="space-x-2 font-lao">
        <button>Edit</button>
        <button>Delete</button>
<NuxtLink to="/add">add</NuxtLink>
        <input class="mt-4 ml-10 rounded-full bg-slate-200 py-1.5 px-2" type="text" v-model="searchQuery" placeholder="Search">
      </div>
    </div>

    <!-- Table -->
    <table class="w-full border-collapse font-lao">
      <thead>
        <tr class="border-b-4">
          <th class="py-2 px-4 text-left"></th><!-- id auto increment-->
          <th class="py-2 px-4 text-left">ເລກທີໃບພັກເຊົ່າ</th>
          <th class="py-2 px-4 text-left">ວັນທີອອກໃບພັກເຊົາ</th>
          <th class="py-2 px-4 text-left">ຊື່ ແລະ ນາມສະກຸນ</th>
          <th class="py-2 px-4 text-left">ເພດ</th>
          <th class="py-2 px-9 text-left">ວັນເດືອນປີເກີດ</th>
          <th class="py-2 px-9 text-left">ສະຖານະ</th>
          <th class="py-2 px-9 text-left">ພໍ່</th>
          <th class="py-2 px-9 text-left">ແມ່</th>
          <th class="py-2 px-9 text-left">ສະມະໂນເລກທີ</th>
          <th class="py-2 px-4 text-left"></th><!-- Edit Button Column -->
          <th class="py-2 px-4 text-left"></th><!-- Delete Button Column -->
        </tr>
      </thead>
      <tbody>
        <tr class="border-b-2" v-for="(item, index) in filteredItems" :key="index">
          <td class="py-2 px-4 text-lg">{{ index + 1 }}</td><!-- id auto increment-->
          <td class="py-2 px-4 text-lg">{{ item.field1 }}</td><!-- Replace with your data -->
          <td class="py-2 px-4 text-lg">{{ item.field2 }}</td><!-- Replace with your data -->
          <td class="py-2 px-4 text-md">{{ item.field3 }}</td><!-- Replace with your data -->
          <td class="py-2 px-4 text-md">{{ item.field4 }}</td><!-- Replace with your data -->
          <td class="py-2 px-9 text-lg">{{ item.field5 }}</td><!-- Replace with your data -->
          <td class="py-2 px-9 text-md">{{ item.field6 }}</td><!-- Replace with your data -->
          <td class="py-2 px-9 text-md">{{ item.field7 }}</td><!-- Replace with your data -->
          <td class="py-2 px-9 text-md">{{ item.field8 }}</td><!-- Replace with your data -->
          <td class="py-2 px-9 text-lg">{{ item.field9 }}</td><!-- Replace with your data -->
          <td class="py-2 px-4 text-left">
            <button class="bg-green-500 px-4 py-2 rounded-full" @click="editItem(index)">Edit</button>
          </td>
          <td class="py-2 px-4 text-left">
            <button class="bg-red-500 px-4 py-2 rounded-full" @click="deleteItem(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Item Modal -->
    <div v-if="showAddModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div class="modal-container bg-white w-11/12 md:max-w-3xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div class="modal-content py-4 text-left px-6">
          <h2 class="text-2xl font-semibold mb-4">Add Item</h2>
          <form @submit.prevent="addItem">
            <!-- Form fields for adding new data -->
            <div v-for="field in newItemFields" :key="field.key" class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" :for="field.key">{{ field.label }}:</label>
              <input class="rounded-full py-2 px-3 w-full" v-model="newItem[field.key]" :type="field.type" :id="field.key" :placeholder="field.placeholder" :required="field.required">
            </div>
            <!-- Add more form fields as needed for your data -->
            <div class="flex justify-between">
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-full">Add</button>
              <button type="button" class="bg-red-500 text-white px-4 py-2 rounded-full" @click="showAddModal = false">Cancel</button>
            </div>
          </form>
        </div>
        <button class="modal-close absolute top-0 right-0 z-50" @click="showAddModal = false">×</button>
      </div>
    </div>

    <!-- Edit Item Modal -->
    <div v-if="showEditModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div class="modal-container bg-white w-11/12 md:max-w-3xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div class="modal-content py-4 text-left px-6">
          <h2 class="text-2xl font-semibold mb-4">Edit Item</h2>
          <form @submit.prevent="updateItem">
            <!-- Form fields for editing data -->
            <div v-for="field in editedItemFields" :key="field.key" class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" :for="field.key">{{ field.label }}:</label>
              <input class="rounded-full py-2 px-3 w-full" v-model="editedItem[field.key]" :type="field.type" :id="field.key" :required="field.required">
            </div>
            <!-- Add more form fields as needed for your data -->
            <div class="flex justify-end">
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-full">Update</button>
            </div>
          </form>
        </div>
        <button class="modal-close absolute top-0 right-0 z-50" @click="showEditModal = false">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      searchQuery: "",
      showAddModal: false,
      showEditModal: false,
      newItem: {},
      editedItem: {},
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
      editedItemFields: [
        { key: "field1", label: "Field 1", type: "text", required: true },
        { key: "field2", label: "Field 2", type: "text", required: true },
        { key: "field3", label: "Field 3", type: "text", required: true },
        { key: "field4", label: "Field 4", type: "text", required: true },
        { key: "field5", label: "Field 5", type: "text", required: true },
        { key: "field6", label: "Field 6", type: "text", required: true },
        { key: "field7", label: "Field 7", type: "text", required: true },
        { key: "field8", label: "Field 8", type: "text", required: true },
        { key: "field9", label: "Field 9", type: "text", required: true },
      ],
    };
  },
  computed: {
    filteredItems() {
      // Implement filtering logic based on searchQuery
      // ...
    },
  },
  methods: {
    // Existing methods (editItem, deleteItem)

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
      const newItemId = this.items.length + 1;

      // Create a new item and add it to the items array
      const newItem = { id: newItemId, ...this.newItem };
      this.items.push(newItem);

      // Reset the newItem object and close the modal
      this.newItem = {};
      this.showAddModal = false;
    },

    editItem(index) {
      // Display the Edit Item modal with the data to edit
      this.showEditModal = true;

      // Clone the item to edit
      this.editedItem = { ...this.items[index] };
    },

    updateItem() {
      // Validate the editedItem object (e.g., check if all required fields are filled)
      const requiredFields = this.editedItemFields.filter((field) => field.required);
      for (const field of requiredFields) {
        if (!this.editedItem[field.key]) {
          alert(`Please fill in ${field.label}.`);
          return;
        }
      }

      // Find the index of the item to update in the items array
      const index = this.items.findIndex((item) => item.id === this.editedItem.id);

      // Update the item in the items array
      this.items[index] = { ...this.editedItem };

      // Reset the editedItem object and close the modal
      this.editedItem = {};
      this.showEditModal = false;
    },

    deleteItem(index) {
      // Confirm deletion and remove the item from the items array
      if (confirm("Are you sure you want to delete this item?")) {
        this.items.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific CSS styles here */
</style>
