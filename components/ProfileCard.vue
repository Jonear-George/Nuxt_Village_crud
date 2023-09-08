<template >
    <section class=" flex items-center justify-center h-screen ">
	<div class="flex flex-col justify-center  max-w-screen-md p-6 shadow-md rounded-xl sm:px-12 dark:bg-orange-500 dark:text-gray-100">
		<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" class="w-100 h-100 mx-auto rounded-full dark:bg-gray-500 aspect-square">
		<div class=" text-center ">
			<div class="my-2 space-y-1">
				<h2 class="text-xl font-extrabold sm:text-2xl dark:text-black "> {{ FirstName }}</h2>
				<h2 class="text-xl font-extrabold sm:text-2xl  dark:text-black "> {{ LastName }}</h2>
				<p class="px-5 text-xs sm:text-base dark:text-gray-700 ">{{ Birth }}</p>
				<p class="px-5 text-xs sm:text-base dark:text-gray-700">{{Institute}}</p>
				<h3 class="px-5 text-xs sm:text-base dark:text-gray-700">{{Faculty}}</h3>
                <p class="px-5 text-xs sm:text-base dark:text-gray-700 ">{{DateStartIntern}}</p>
                <p class="px-5 text-xs sm:text-base dark:text-gray-700 ">{{DateEndIntern}}</p>
                <p class="px-5 text-xs sm:text-base dark:text-gray-700 ">{{Telephone}}</p>
                <p class="px-5 text-xs sm:text-base dark:text-gray-700  ">{{Email}}</p>
			</div>
		</div>
	</div>
</section>
</template>
<script>
export default {
  name: 'ProfileCard',
  props: {
    FirstName: {
      type: String,
      required: true
    },
    LastName: {
      type: String,
      required: true
    },
    Birth: {
      type: Number,
      required: true
    },
	Institute: {
      type: String,
      required: true
    },
	Faculty: {
      type: String,
      required: true
    },
	DateStartIntern:{
      type: Number,
      required: true
    },
	DateEndIntern:{
      type: Number,
      required: true
    },
	Telephone:{
      type: Number,
      required: true
    },
	Email:{
      type: String,
      required: true
    },

  }
}
</script>