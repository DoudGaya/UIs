<template>
  <div class="">

    <!-- the style and class binding practice section -->
   <div class=" flex flex-col">
      <div class=" w-full py-3 px-10 text-2xl bg-sky-800 flex justify-center">
      Welcome to V
      </div>
     <div class=" w-full flex flex-col mx-auto items-center justify-center my-4 py-2 space-y-4">
        <div class="  w-[450px] rounded-lg bg-gray-100 border-2 py-10 px-6  border-white dark:bg-gray-900 drop-shadow-md dark:border-black border-gar">

        <div class=" flex px-4 space-x-4 ">
          <div class=" flex flex-col space-y-3 bg-gray-800 px-4 py-6 rounded-full ">
            <div :class="redTraffic" class="w-28 h-28 rounded-full  dark:border-white border-black border-2"></div>
            <div :class="yellowTraffic" class=" w-28 h-28 rounded-full  dark:border-white border-black border-2"></div>
            <div :class="greenTraffic" class=" w-28 h-28 rounded-full  dark:border-white border-black border-2"></div>
          </div>
          <div class=" flex px-3 py-3 w-full ">
           <guides :message="traffic"></guides>
          </div>

        </div>
        

      </div>
      <!-- CONTROL SECTION -->
       <div class="  w-[450px] grid grid-cols-3 gap-4 rounded-lg bg-gray-100 border-2 py-10 px-6  border-white dark:bg-gray-900 drop-shadow-md dark:border-black border-gar">
         <button class=" w-full bg-green-500 rounded-md py-2 border flex justify-center items-center" @click=" go() ">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
           GO
           </button>
         <button class=" w-full bg-yellow-500 rounded-md py-2 border flex justify-center items-center" @click=" warning()">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
          </svg>
           WARNING
           </button>
         <button class=" w-full bg-red-500 rounded-md py-2 border flex justify-center items-center " @click=" stop() ">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
          </svg>
           STOP
           </button>
      </div>

      <!--  END OF CONTROL SECTION -->
     </div>
   </div>
  </div>
</template>

<script>
import Guides from "./Guides.vue"
export default {
  components: {
    Guides
    
  },

  data: function() {
    return {
      traffic: 'Please pay attention to the red light...',
      redTraffic: {
      'bg-red-500': false, 
      'rounded-2xl': false,
      'bg-gray-500': true
      },

      yellowTraffic: {
        'bg-yellow-500': false, 
        'rounded-2xl': false,
        'bg-gray-500': true
      },

      greenTraffic: {
          'bg-green-500': false, 
          'rounded-2xl': false,
          'bg-gray-500': true
      },

      
    }
  },

  methods: {
    go() {
      //handling the green traffic 
      this.greenTraffic['bg-green-500'] = true
      this.greenTraffic['bg-gray-500'] = false
      this.greenTraffic['rounded-2xl'] = true

      // handling the red traffic 
      this.redTraffic['bg-red-500'] = false
      this.redTraffic['rounded-2xl'] = false
      this.redTraffic['bg-gray-500'] = true
      // handling the yellow traffic
      this.yellowTraffic['bg-yellow-500'] = false
      this.yellowTraffic['bg-gray-500'] = true
      this.yellowTraffic['rounded-2xl'] = false
    },

     stop() {
      //  handling the red button
      
      this.redTraffic['bg-red-500'] = true 
      this.redTraffic['rounded-2xl'] = true
      this.redTraffic['bg-gray-500'] = false
      
      // handling the yellow button
      
      this.yellowTraffic['bg-yellow-500'] = false
      this.yellowTraffic['bg-gray-500'] = true
      this.yellowTraffic['rounded-2xl'] = false
    // handling green traffic
      this.greenTraffic['bg-green-500'] = false
      this.greenTraffic['bg-gray-500'] = true
      this.greenTraffic['rounded-2xl'] = false

    },

     warning() {

      // handling the red traffic  
      this.redTraffic['bg-red-500'] = false 
      this.redTraffic['rounded-2xl'] = false
      this.redTraffic['bg-gray-500'] = true

      // the warning 
      this.yellowTraffic['bg-yellow-500'] = true
      this.yellowTraffic['rounded-2xl'] = true
      this.yellowTraffic['bg-gray-500'] = false

      // handling green traffic
      this.greenTraffic['bg-green-500'] = false
      this.greenTraffic['bg-gray-500'] = true
      this.greenTraffic['rounded-2xl'] = false
    }
  }, 




}
</script>

<style>

</style>