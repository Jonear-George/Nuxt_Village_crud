<template>
    <div class="font-lao grid justify-center">
      <div class="grid justify-center text-5xl m-8">
        <p>ຂໍ້ມູນບ້ານ</p>
      </div>
      <form class="mx-auto">
        <div class="mb-4 flex">
          <label for="village-id" class="block text-gray-700 w-24 pt-0.5">ລະຫັດບ້ານ :</label>
          <input v-model="villageId" type="text" id="village-id" name="village-id"
            class="form-input mt-1 block w-60 border-2 border-black rounded-lg pl-1">
        </div>
        <div class="mb-4 flex">
          <label for="village-name" class="block text-gray-700 w-24">ຊື່ບ້ານ :</label>
          <input v-model="villageName" type="text" id="village-name" name="village-name"
            class="form-input mt-1 block w-60 border-2 border-black rounded-lg pl-1">
        </div>
        <div class="mb-4 flex">
          <label class="block text-gray-700 w-24">ຊື່ເມືອງ :</label>
          <select v-model="selectedDistrict" class="form-select mt-1 block w-60">
            <option v-for="(district, index) in districts" :key="index" :value="district">
              {{ district }}
            </option>
          </select>
        </div>
        <div class="mb-4 flex">
          <label class="block text-gray-700 w-24">ຊື່ແຂວງ :</label>
          <select v-model="selectedProvince" class="form-select mt-1 block w-60">
            <option v-for="(province, index) in provinces" :key="index" :value="province">
              {{ province }}
            </option>
          </select>
        </div>
        <div class="grid justify-center text-xl p-5 text-red-500">
          <p>. . . . .========= ການຈັດການຂໍ້ມູນ ========. . . . .</p>
        </div>
        <div class="flex space-x-4">
          <div class="flex">
            <label for="search-text" class="block text-gray-700 pr-5 pt-3 text-sm">ຄົ້ນຫາ:</label>
            <input v-model="searchText" type="text" id="search-text" name="search-text"
              class="form-input mt-1 w-full sm:w-60 border-2 border-black rounded-lg pl-1 text-sm">
          </div>
          <button @click="addVillage" type="button"
            class="border border-blue-600 hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded">
            ເພີ່ມຂໍ້ມູນໃໝ່
          </button>
          <button @click="editVillage" type="button"
            class="border border-yellow-600  hover:bg-yellow-500 hover:text-white text-black font-bold py-2 px-4 rounded">
            ແກ້ໄຂຂໍ້ມູນ
          </button>
          <button @click="saveVillage" type="button"
            class="border border-green-600  hover:bg-green-500 hover:text-white text-black font-bold py-2 px-4 rounded">
            ບັນທຶກ
          </button>
          <button @click="deleteVillage" type="button"
            class="border border-red-600  hover:bg-red-500 hover:text-white text-black font-bold py-2 px-4 rounded">
            ລົບຂໍ້ມູນ
          </button>
        </div>
      </form>
  
      <table class="w-full mt-8 border-collapse">
        <thead>
          <tr class="border-b">
            <th class="py-2 px-4 text-left">ລະຫັດບ້ານ</th>
            <th class="py-2 px-4 text-left">ຊື່ບ້ານ</th>
            <th class="py-2 px-4 text-left">ຊື່ເມືອງ</th>
            <th class="py-2 px-4 text-left">ຊື່ແຂວງ</th>
            <th class="py-2 px-9 text-left"></th>
        
          </tr>
        </thead>
        <tbody>
          <tr v-for="(village, index) in filteredVillages" :key="index" class="border-b">
            <td class="py-2 px-4 text-lg">{{ village.id }}</td>
            <td class="py-2 px-4 text-lg">{{ village.name }}</td>
            <td class="py-2 px-4 text-lg">{{ village.district }}</td>
            <td class="py-2 px-4 text-lg">{{ village.district }}</td>
            <td class="py-2 px-4 text-lg">{{ village.province }}</td>
            <td class="py-2 px-4 text-lg">
              <button @click="editVillage(index)" class="text-black hover:scale-150 mt-2 px-2 font-lao text-lg" >ແກ້ໄຂ</button>
              <button @click="deleteVillage(index)" class="text-black hover:scale-150 font-lao text-lg">ລົບ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedProvince: "",
        selectedDistrict: "",
        villageId: "",
        villageName: "",
        searchText: "",
        provinces: [ "ນະຄອນຫຼວງວຽງຈັນ",
        "ອຸດົມໄຊ",
        "ອັດຕະປື",
        "ຫົວພັນ",
        "ຫຼວງພະບາງ",
        "ຫຼວງນ້ຳທາ",
        "ສະຫວັນນະເຂດ",
        "ສາລະວັນ",
        "ວຽງຈັນ",
        "ຜົ້ງສາລີ",
        "ບໍ່ແກ້ວ",
        "ບໍລິຄຳໄຊ",
        "ເຊກອງ",
        "ໄຊສົມບູນ",
        "ໄຊຍະບູລີ",
        "ຊຽງຂວາງ",
        "ຈຳປາສັກ",
        "ຄຳມ່ວນ",
        ],
        districts: [   
         "ຈັນທະບູລີ",
        "ສີໂຄດຕະບອງ",
        "ໄຊເສດຖາ",
        "ສີສັດຕະນາກ",
        "ນາຊາຍທອງ",
        "ໄຊທານີ",
        "ຫາດຊາຍຟອງ",
        "ສັງທອງ",
        "ປາກງື່ມ",],
        villages: [], // Store villages data here
      };
    },
    computed: {
      filteredVillages() {
        return this.villages.filter((village) =>
          village.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      },
    },
    methods: {
      addVillage() {
        // Add new village to villages array
        this.villages.push({
          id: this.villageId,
          name: this.villageName,
          district: this.selectedDistrict,
          province: this.selectedProvince,
        });
  
        // Clear input fields
        this.villageId = "";
        this.villageName = "";
        this.selectedDistrict = "";
        this.selectedProvince = "";
      },
      editVillage(index) {
        // Set input fields with village data for editing
        this.villageId = this.villages[index].id;
        this.villageName = this.villages[index].name;
        this.selectedDistrict = this.villages[index].district;
        this.selectedProvince = this.villages[index].province;
      },
      saveVillage() {
        // Save edited village data
        const index = this.villages.findIndex((village) => village.id === this.villageId);
  
        if (index !== -1) {
          this.villages[index].name = this.villageName;
          this.villages[index].district = this.selectedDistrict;
          this.villages[index].province = this.selectedProvince;
        }
  
        // Clear input fields
        this.villageId = "";
        this.villageName = "";
        this.selectedDistrict = "";
        this.selectedProvince = "";
      },
      deleteVillage(index) {
        // Delete village from villages array
        this.villages.splice(index, 1);
      },
    },
  };
  </script>
  