<template>
<!-- wrapper  -->
  <div class="">
    <!-- nav -->
    <div class=" bg-white scroll shadow-sm w-full sticky top-0 px-28 py-4 scroll-py-2  flex justify-between font-inder ">
      <div class=" flex items-center">
        <a href="#" class=" font-bold text-xl">LOGO</a>
      </div>

      <div class="">
        <ul class=" flex space-x-6 py-2 ">
          <li class=" text-lg flex items-center ">
            <a href="#" class=" hover:underline-offset-2 hover:underline">Business</a>
          </li>
          <li class="text-lg flex items-center ">
            <a href="#" class="hover:underline-offset-2 hover:underline">
              Gold
            </a>
          </li>
        </ul>

      </div>

      <div class="">
        <ul class=" flex space-x-4">
          <li class=" text-lg flex items-center">
            <a href="#">Log In</a>
          </li>
          <li class="text-lg flex items-center ">
            <a href="#" class=" px-6 py-2 bg-black text-white transform hover:scale-90 transition-all ease-in-out">
              Sign Up
            </a>
          </li>
        </ul>

      </div>

    </div>
    <!-- end nav -->

    <!-- the banner section  -->
  <div class=" grid grid-cols-2 w-full  py-12  px-28">
    <!-- left banner section -->
    <div class=" flex flex-col py-32 space-y-4">
      <h1 class=" font-inder text-5xl tracking-widr font-bold">Invest in what you believe</h1>
      <div class=" pr-20 ">
        <p class=" font-inder text-2xl ">Best way to grow your wealth is by investing in business or the royal stock. Royal stock, <span class=" font-bold">#gold</span> and <span class=" font-bold">#diamonds</span>  has been a major source of wealth for hundreds of years.  </p>
      </div>
     <div class=" pr-16">
        <div class=" my-2 flex space-x-4 bg-white shadow-md p-2 rounded-2xl ">
        <input type="text" class=" flex-1  px-3 outline-none" placeholder="Your Email...">
        <button class=" bg-black text-white py-2 px-6 rounded-lg ">Get Started</button>
      </div>
     </div>

    </div>
    <!-- end of left banner section -->


    <!-- right banner section -->
    <div class="  p-20 flex flex-col space-y-3">
      <div class=" flex  space-x-2">
        <div class=" flex items-center">
          <div class="bg-white px-16 py-2 shadow-md rounded-full font-inder text-2xl flex justify-center items-center">Business Stock</div>
        </div>
        <div class=" bg-white shadow-lg col-span-1 rounded-3xl p-2 ">
          <img src="../../assets/acmegrid/home/banner-icon-business.png" alt="" class=" h-14" srcset="">
        </div>
      </div>
      <div class=" bg-white flex justify-center align-baseline align rounded-3xl pt-10">
        <img src="../../assets/acmegrid/home/banner-trans.png" alt="" class=" self-baseline flex h-52 -mb-20" srcset="">
      </div>
        <div class=" flex  justify-end space-x-2">

        <div class=" bg-white shadow-lg col-span-1 rounded-3xl p-2 ">
          <img src="../../assets/acmegrid/home/banner-icon-royal.png" alt="" class=" h-14" srcset="">
        </div>

        <div class=" flex items-center">
          <div class="bg-white px-16 py-2 drop-shadow-md font-inder text-2xl rounded-full flex justify-center items-center">Royal Stock</div>
        </div>

     
      </div>
    </div>
    <!-- end of right banner section -->

  </div>
  <!-- end of banner section -->


  <!-- the stock listings  -->
  <div class=" w-full bg-black gap-x-4 px-28 py-2 grid grid-cols-6 text-white ">
    <div v-for="stock in listings" :key="stock.id" class=" bg-gray-800 flex font-inder shadow-md space-x-3 shadow-gray-600/30 px-4 py-1">
      <p>{{ stock.stock }}</p>
      <p class=" font-bold"> ${{ stock.price}}</p>
      <div :class="{'text-green-500': stock.rising, 'text-red-500': !stock.rising }" class=" font-bold">{{ stock.percentage}}%</div>
    </div>
  </div>
  <!-- end of stock listings  -->



  <!-- TOP STOCK LISTINGS  -->
  <div class="  w-full grid grid-cols-2 py-20 px-28  ">


   <div class=" w-full flex flex-col px-10">
     <h2 class=" text-3xl font-bold font-inder">#Top Stock Listings </h2>
    <div class=" w-full py-2 border-b flex justify-between font-raleway border-gray-800">
      <p>Stock</p>
      <p>Stock Price</p>
      <p>Market Cap</p>
    </div>
   <div class="flex flex-col w-full space-y-4 my-4">
     <!-- the gold display section -->
        <div v-for=" stock in listings" :key="stock.id" class=" w-full bg-white drop-shadow-xl rounded-lg  p-2 grid grid-cols-3">
          <div class=" flex space-x-2 items-center">
              <p class=" px-4 py-2 text-white bg-black rounded-md"> Gold</p>
              <p class=" bg-green-500/50 px-3  rounded-md">0.19 %</p>
            </div>

          <div class=" flex px-8 items-center">
            <p>20.76 USD</p>
          </div>

            <div class=" flex px-3 items-center justify-end">
            <p>20.76 B</p>
          </div>
        </div>



    <!-- end of gold display section -->
    
   </div>
   </div>


    <div class=" w-full py-10 px-28 grid grid-cols-2 ">
      <div class=" h-full rounded-lg  px-2">
        <img src="../../assets/acmegrid/bitcoin-long.jpg" class=" hover:grayscale  -mb-10 object-cover object-center rounded-3xl  h-full" alt="" srcset="">
      </div>
       <div class=" h-full rounded-lg  px-2">
        <img src="../../assets/acmegrid/blur-1853262_1280.jpg" class=" -mt-10 hover:grayscale  object-cover object-left rounded-3xl  h-full" alt="" srcset="">
      </div>

    </div>
  </div>



<div class=" w-full bg-yellow-300/50 py-10">
  something ventured 
</div>
  </div>
  <!-- end wrapper -->

</template>

<script>
export default {
  data () {
    return {

      listings: [
        {
        id: 1, 
          stock: 'CMCDR',
          price: 199,
          rising: true,
          percentage: 4
        },

         {
          id: 2, 
          stock: 'RCPN',
          price: 205,
          rising: true,
          percentage: 16.2
        },

         {
          id: 3, 
          stock: 'EMSK',
          price: 311,
          rising: false,
          percentage: 11.2
        },

         {
          id: 4, 
          stock: 'ADSH',
          price: 111,
          rising: true,
          percentage: 5.02
        },

        {
          id: 5, 
          stock: 'MCHF',
          price: 132,
          rising: true,
          percentage: 12
        },

         {
          id: 5, 
          stock: 'GOLD',
          price: 132,
          rising: true,
          percentage:44
        },
        
      ]
      

    }
  }

}
</script>

<style>

</style>