<template>
  <div class=" w-full h-full">
    <!-- the navigations -->
      <div class=" bg-[#1C2043] w-full flex justify-between px-20 py-4">
        <div class="">
          <a href="">
            Acmegrid
          </a>
        </div>
        <div class=" uppercase font-bold">
          <ul class=" flex space-x-6">
            <li>
              <a href="" class=" px-6 py-2">
                Gold
              </a>
              </li>
            <li>
              <a href="" class=" px-6 py-2">
                Business
              </a>
              </li>
          </ul>
        </div>
        <div class="">
            <ul class=" flex ">
            <li>
              <a href="#" class=" px-5 py-2 text-white font-bold">
                Log In
              </a>
              </li>
            <li>
              <a href="#" class=" px-5 py-2 bg-white font-bold text-black">
                Invest
              </a>
              </li>
          </ul>
        </div>
      </div>
    <!-- end of navigations -->

    <!-- main contents  -->
    <section>
      <div class="grid grid-cols-2 bg-[#1C2043]">
        <div class=" flex flex-col pl-48 pt-40 py-20 ">
          <h1 class=" text-4xl font-bold font-spectra ">{{landing}}</h1>
          <p class=" text-2xl text-yellow-400 font-raleway">{{subLanding}}</p>
          <p class=" my-1">{{ smallLanding}}</p>
          <div class=" my-6">
             <a class=" px-6 py-3 font-raleway font-bold bg-yellow-400 rounded-md text-white mx-auto self-start">Invest Now</a>
          </div>
        </div>
        <div class="">
          <div class="">
            <img src="../../assets/acmegrid/banner-img.jpg" alt="banner" class=" rounded-3xl my-20 h-[400px] mx-auto" srcset="">
          </div>
        </div>
      </div>
      <div class=" flex flex-row space-x-6 px-32 bg-black py-2">
        <div class=" bg-gray-700 px-6 cursor-pointer transform hover:scale-110 duration-300 transition-all ease-in-out py-1" v-for="item in stockList" :key="item.id">
          <p class="flex justify-center items-center">{{ item.code }} <span class=" mx-2 text-sm font-bold ">{{ item.price}}</span> <span class="flex " :class="{'text-green-400': item.trending, 'text-red-500': !item.trending }" >{{ item.percentage}}% 
           
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" v-if="item.trending" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" v-else fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
            </span> </p>
        </div>
        
      </div>
    </section>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      landing: 'Most Reliable Stock Market',
      subLanding: 'Business and royal Investment Stock',
      smallLanding: 'Own part of our stock today... ',

      stockList: [
        {
          id: 1,
          company: 'Chemcider',
          code: 'CMDR',
          price: 205.6,
          percentage: 11,
          trending: true
        },

         {
          id: 2,
          company: 'riCapano',
          code: 'RCPN',
          price: 205.6,
          percentage: 26,
          trending: false
        },

         {
          id: 3,
          company: 'Emeske',
          code: 'EMSK',
          price: 205.6,
          percentage: 14,
          trending: true
        },

         {
          id: 4,
          company: 'Adashi',
          code: 'ADSH',
          price: 205.6,
          percentage: 10,
          trending: true
        },

         {
          id: 5,
          company: 'Adashi',
          code: 'ADSH',
          price: 205.6,
          percentage: 10,
          trending: false
        },

         {
          id: 6,
          company: 'Adashi',
          code: 'ADSH',
          price: 25.6,
          percentage: 10,
          trending: true
        },
      ],

    }
  }

}
</script>

<style>

</style>