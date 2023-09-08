<template>
  <div>
    <nav class="bg-blue-500 text-white py-4">
      <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <nuxt-link to="/home">
        <h1 class="text-2xl font-semibold">
          <img class="h-20" src="/img/C.png" alt="Logo">
        </h1>
      </nuxt-link >
        <div class="hidden md:flex md:items-center md:justify-center space-x-4">
          <div
            class="relative"
            v-for="(link, index) in mobileLinks"
            :key="index"
          >
            <a
              class="font-lao flex items-center cursor-pointer transition duration-300 ease-in-out"
              @mouseenter="toggleSubmenu(index)" 
            >
              <img class="h-8 w-8 mr-2" :src="link.icon" alt="">
              {{ link.label }}
            </a>
            <div
              v-if="link.submenu && activeSubmenu === index"
              class="absolute bg-blue-700 text-white p-4 rounded-lg mt-2 shadow-md border-2"
              style="width: 300px;"
            >
              <nuxt-link
                v-for="(sublink, subIndex) in link.submenu"
                :key="subIndex"
                class="block font-lao hover:text-yellow-300 py-1 transition duration-300 ease-in-out"
                :to="sublink.to"
              >
                {{ sublink.label }}
              </nuxt-link>
            </div>
          </div>
        </div>

        <button class=" md:hidden text-white font-lao" @click="toggleMobileMenu">
          ☰
        </button>

        <div class="flex items-center justify-end relative">
          <div class="relative" @mouseenter="toggleProfileDropdown" @mouseleave="closeProfileDropdown">
            <button class="flex items-center focus:outline-none">
              <img class="h-10 w-10 rounded-full" src="/img/P.png" alt="Profile Photo">
            </button>
            <div v-if="showProfileDropdown" class="absolute right-0 mt-0 bg-blue-700 text-white p-4 border-r-8 border-r-green-400 rounded-lg shadow-md">
              <nuxt-link to="/" class="block font-lao hover:text-yellow-300 py-1 transition duration-300 ease-in-out text-center">
                ອອກ
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden bg-blue-500">
        <div class="py-2 space-y-2 text-center">
          <nuxt-link
            class="block text-white font-lao hover:text-yellow-300"
            v-for="(link, index) in mobileLinks"
            :key="index"
            :to="link.to"
          >
            {{ link.label }}
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      showProfileDropdown: false,
      activeSubmenu: null,
      mobileLinks: [
        {
          label: "ຂໍ້ມູນທົ່ວໄປ",
          icon: "/img/R.png",
          submenu: [
            { label: "ຂໍ້ມູນບ້ານ", to: "/village" },
            { label: "ຂໍ້ມູນເມືອງ", to: "/district" },
            { label: "ຂໍ້ມູນແຂວງ", to: "/province" },
            { label: "ຂໍ້ມູນປະເທດ", to: "/country" }
          ]
        },
        {
          label: "ຂໍ້ມູນຫຼັກ",
          icon: "/img/D.png",
          submenu: [
            { label: "ຂໍ້ມູນປຶ້ມສໍາມະໂນຄົວ", to: "/nokhua" },
            { label: "ຂໍ້ມູນສະມາຊິກພາຍໃນບ້ານ", to: "/village" },
            { label: "ຂໍ້ມູນນສະມາຊິກພາກສ່ວນຄົນຕ່າງແຂວງ", to: "/view" },
            { label: "ຂໍ້ມູນນສະມາຊິກພາກສ່ວນຄົນຕ່າງປະເທດ", to: "/foreign" },
            { label: "ຂໍ້ມູນຂະແໜງເສດຖະກິດ", to: "/commerce" },
            { label: "ຂໍ້ມູນຂະແໜງບໍລິການ", to: "/service" },
            { label: "ຂໍ້ມູນຂະແໜງກະສິກໍາ", to: "/farm" },
            { label: "ຂໍ້ມູນສະຖິຕິການທ່ອງທ່ຽວ", to: "/tour" }
          ]
        },
        {
          label: "ຄົ້ນຫາ",
          icon: "/img/Srch.png",
          submenu: [
            { label: "ຂໍ້ມູນປຶ້ມສໍາມະໂນຄົວ", to: "/research" },
            { label: "ປະຊາກອນທີ່ຍັງມີຊີວິດຢູ່", to: "/scholarship" },
            { label: "ປະຊາກອນທີ່ເສຍຊີວິດແລ້ວ", to: "/fundraising" },
            { label: "ປະຫວັດການອອກເອກະສານຕ່າງໆ", to: "/Histo"}
          ]
        },
        {
          label: "ເອກະສານ",
          icon: "/img/A.png",
          submenu: [
            { label: "ໃບຢັ້ງຢືນທີ່ຢູ່ພາຍໃນບ້ານ", to: "/government" },
            { label: "ໃບຢັ້ງຢືນການຮັບປະກັນ", to: "/politicalparty" },
            { label: "ໃບຢັ້ງຢືນທີ່ຢູ່ປະຊາກອນພັກເຊົາພາຍໃນບ້ານ", to: "/constitution" },
            { label: "ໃບຢັ້ງຢືນຄວາມເປັນໂສດໃຫ້ແກ່ປະຊາກອນພາຍໃນບ້ານ", to: "/constitu" },
            { label: "ໃບຢັ້ງຢືນຄວາມເປັນໂສດໃຫ້ແກ່ປະຊາກອນພັກເຊົາພາຍໃນບ້ານ", to: "/constitut" },
            { label: "ໃບຮັບປະກັນການຊື້ຂາຍໃຫ້ແກ່ປະຊາກອນພາຍໃນບ້ານ", to: "/constituti" },
            { label: "ບັນທຶກການອອກເອກະສານຕ່າງໆ", to: "/constitutio" },
        ]       
        },
        {
          label: "ຂໍ້ມູນລາຍງານ",
          icon: "/img/L.png",
          submenu: [
            { label: "ຂໍ້ມູນປຶ້ມສໍາມະໂນຄົວ", to: "/economicreport" },
            { label: "ປະຊາກອນທີ່ຍັງມີຊີວິດຢູ່", to: "/socialreport" },
            { label: "ປະຊາກອນທີ່ເສຍຊີວິດແລ້ວ", to: "/environmentreport" },
            { label: "ຂໍ້ມູນສະຖິຕິຂອງປະຊາກອນບ້ານ", to: "/stiti" },
            { label: "ຂໍ້ມູນການອອກເອກະສານຕ່າງໆ", to: "/diet" }
          ]
        },
        {
          label: "ຊ່ວຍເຫຼືອ",
          icon: "/img/S.png",
          submenu: [
            { label: "ຂໍ້ມູນຜູ້ໃຊ້ລະບົບ", to: "/interview" },
            { label: "ສະແດງລະຫັດຜ່ານ", to: "/inspection" },
            { label: "ປ່ຽນລະຫັດຜ່ານ", to: "/interview" },
            { label: "ສໍາຮອງຂໍ້ມູນ", to: "/interview" },
            { label: "ຜູ້ສ້າງໂປຣແກຣມ", to: "/interview" },
            { label: "ກ່ຽວກັບໂປຣແກຣມ", to: "/interview" }
          ]
        },
      ],
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleSubmenu(index) {
      if (this.activeSubmenu === index) {
        this.activeSubmenu = null;
      } else {
        this.activeSubmenu = index;
      }
    },
    toggleProfileDropdown() {
      this.showProfileDropdown = true;
    },
    closeProfileDropdown() {
      this.showProfileDropdown = false;
    },
  },
};
</script>
