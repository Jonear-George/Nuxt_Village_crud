<template>
  <div class="flex min-h-full flex-1 flex-col justify-center lg:px-8 h-screen">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-30 rounded-full " src="/img/C.png" />
    </div>
    <div class="flex justify-center">
      <h1 class="text-blue-500 font-lao text-2xl mt-2"> ຍິນດີຕ້ອນຮັບທ່ານເຂົ້າສູ່ </h1>
    </div>
    <div class="flex justify-center">
      <h2 class="font-lao text-red-500 font-bold">
        ລະບົບໂປຼແກຼມ ການຈັດບໍລິຫານຂໍໍ໊ມູນບ້ານ
      </h2>
    </div>

    <div class="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login" method="POST">
        <section
          class=" sm:mx-auto sm:w-full sm:max-w-sm  items-center justify-center mt-4 grid  py-2"
        >
          <!-- Username Input -->
          <div class="w-72">
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                v-model="username"
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="font-lao before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                ຊື່ຜູ້ໃຊ້
              </label>
            </div>
          </div>
          <br />
          <!-- Password Input -->
          <div class="w-72">
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                v-model="password"
                type="password"
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="font-lao before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                ລະຫັດ
              </label>
            </div>
          </div>
        </section>
        <!-- Login Button -->
        <div class="flex items-center justify-center gap-x-1">
          <button
            type="submit"
            class="content-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 font-lao"
            :disabled="!canLogin"
          >
            ເຂົ້າສູ່ລະບົບ
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    canLogin() {
      return this.username === "ad" && this.password === "123";
    },
  },
  methods: {
    login() {
      if (this.canLogin) {
        this.$router.push("/home"); // Change "/Form" to the desired page path
      } else {
        alert("Invalid username or password.");
      }
    },
  },
  async asyncData() {
    definePageMeta({ layout: 'custom' }); // Set the layout to "custom"
  },
};
</script>

