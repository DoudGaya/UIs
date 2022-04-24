<template>
  <div class="">
     
    <div class=" w-screen h-screen flex relative" x-data="{open: false}">
        <div class=" w-[270px] h-full lg:flex items-center py-6 flex-col space-y-16  border-r hidden ">
            <div class="">
                SHOPAGRIC
            </div>



            <!-- user dashboard Nav -->
            <div class="flex w-full px-3">
                <ul class="flex flex-col w-full space-y-4 px-2 ">

                    <!-- the admin order summary link -->
                    <li class="w-full flex space-x-1 hover:bg-[#06A157] hover:text-white rounded-lg px-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>

                        <a href="./admin.html" class="w-full py-2 rounded-lg px-3 ">Admin - order</a>
                    </li>

                    <!-- admin order-summary link -->
                    <li class="w-full flex space-x-1 hover:bg-[#06A157] hover:text-white rounded-lg px-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>

                        <a href="./dashboard.html" class="w-full py-2 rounded-lg px-3 ">Dashboard</a>
                    </li>
                    <li class="w-full flex space-x-1 hover:bg-[#06A157] hover:text-white rounded-lg px-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>

                        <a href="./profile.html" class=" w-full py-2 rounded-lg px-3 ">Profile</a>
                    </li>
                    <li class="w-full flex space-x-1 hover:bg-[#06A157] hover:text-white rounded-lg px-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>

                        <a href="./contact.html" class=" w-full py-2 rounded-lg px-3">Help Center</a>
                    </li>
                </ul>
            </div>
            <!-- end of user dashboard nav -->

            <!-- the frontPage nav -->
            <div class="flex w-full px-3">
                <ul class="flex flex-col w-full space-y-4 px-2 ">
                    <li class="w-full flex space-x-1 hover:bg-[#06A157] hover:text-white rounded-lg px-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>

                        <a href="./index.html" class="  w-full py-2 rounded-lg px-3 ">Home</a>
                    </li>

                    <li class="w-full flex space-x-1 hover:bg-[#06A157] hover:text-white rounded-lg px-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                        <a href="./login.html" class=" w-full py-2 rounded-lg px-3">Logout</a>
                    </li>
                </ul>
            </div>
            <!-- end of frontPage nav -->

        </div>

        <!--  MOBILE NAVIGATIONS  -->
    

        <!--   END MOBILE NAVIGATIONS -->
        <div class=" w-full flex flex-col lg:px-10 lg:py-6 ">
                    <div class=" w-full ">
                        <!-- the header section -->
                            <div class=" flex w-full ">
                                    <div class=" w-[800px] justify-center my-auto items-center hidden lg:block  lg:px-4">
                                        <p>Welcome Back, Abdulrahman </p>
                                    </div>
                                    <div class="  rounded-md px-3  w-full lg:hidden">
                                        <div class="flex justify-between items-center py-4 ">
                                            <div class="bg-white w-full flex justify-between items-center rounded-md py-4 px-4">
                                                    <a href="./index.html">SHOPAGRIC</a>
                                                    <button href="" @click="open = ! open " class="flex items-center  border border-teal-600 hover:bg-teal-600 hover:text-white p-2  rounded-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                                            </svg>
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" flex-1  ">
                                        <div class=" lg:flex items-center  justify-end space-x-3  px-4 hidden">
                                            <p>Hi, adaag.ad@gmail.com</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                        </div>
                                    </div>
                            </div>
                    <!-- end header section -->
                    </div>
        <!--  MAIN SECTION HERE -->
                    <div class=" w-full h-screen  my-6 flex  ">
                            <div class=" w-full  lg:px-2 flex flex-col">
                                    <div class=" flex flex-col text-center justify-center">
                                            <p class=" text-2xl  font-poppins ">Rescheduled Payment Dates</p>
                                            <div class=" w-full border-b-2 py-3 "></div>
                                          <div class="flex flex-col w-full px-3 lg:px-10">

                                       
<div class="flex flex-col my-4 relative ">
    <div class="-my-2 overflow-x-auto sm:-mx-1 hidden  lg:-mx-1">
      <div class="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-[#06A157]">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Product</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Address</th>
               
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 ">
              <tr v-for="order in orders" :key="order.id">
                <td class="px-6 py-4 whitespace-nowrap ">
                  <div class="flex items-center">
                      <div class="text-sm font-medium text-gray-900">{{ order.name }}</div>
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap ">
                    <div class="flex items-center">
                        <div class="text-sm font-medium text-gray-900">{{ order.email }}</div>
                    </div>
                  </td>
                <td class=" py-4 whitespace-nowrap ">
                    <div class="flex items-center">
                          <div class="text-sm font-medium text-gray-900">{{ order.phone }}</div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap  ">
                    <div class="flex items-center">
                   
                        <div class="">
                          <div class="text-sm font-medium text-gray-900">{{ order.product }}</div>
                        </div>
                      </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap  text-sm text-gray-500">
                    <div class="flex items-center">
                          <div class="text-sm font-medium text-gray-900">N {{order.price}}</div>
                        </div>
                </td>
                    <td class=" py-4 px-6 overflow-hidden content-start text-right relative text-sm font-medium">
                     <div class="flex items-center">
                          <div class="text-sm font-medium text-gray-900">N {{order.price}}</div>
                        </div>
                </td>
              
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class=" grid lg:grid-cols-3 grid-cols-1 gap-3 md:grid-cols-2  lg:h-[550px] overflow-y-auto ">
        <div v-for="order in orders" :key="order.id" class=" rounded-lg bg-white  drop-shadow-lg dark:bg-black relative ">
            
            <div class=" flex flex-col  items-start ">
            <div class=" flex justify-between bg-[#06A157] rounded-t-lg px-2 py-3 w-full ">
            <h3 class=" font-bold text-left font-poppins text-white ">Order Details</h3>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
             
            </div>
            <!-- the user details -->
            <div class="flex flex-col px-6 items-start my-1 py-2 font-main text-xl ">
                <p> <span class=" pr-2 font-bold ">Name:</span> Abdulrahman Dauda Gaya</p>
                <p> <span class=" pr-2 font-bold">Email:</span> adaag.ad@gmail.com</p>
                <p> <span class=" pr-2 font-bold">Phone:</span> Phone Number</p>
            </div>
            <!-- end of user details -->
           
              <div class="flex px-6  flex-col text-left border-t-2 font-main text-xl  my-1 ">
                <p> <span class=" pr-2 font-bold">Product:</span>Poultry</p>
                <p> <span class=" pr-2 font-bold">Price:</span>43000</p>
                <p> <span class=" pr-2 font-bold">Unit:</span>100</p>
                <h4 class="font-bold font-poppins text-base py-2 mt-3">Delivery Address</h4>
                <div class=" text-base mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus laborum voluptate odit maxime pariatur suscipit ut et illum tempore placeat?
                </div>
            </div>
            

            </div>
        </div>
    </div>
  </div>
</div>
</div>

</div>



</div>
            <!-- END MAIN SECTION HERE -->

            </div>
        </div>


  

  </div>
</template>

<script>



export default {

  
    

    data () {
        return {
            orders: [
                {
                    id: 1,
                    name: 'Abdulrahman Sani',
                    email: 'adaag.ad@gmail.com',
                    phone: '08062249834',
                    price: '480000',
                    product: 'Poultry',
                    address: 'Kundila Maiduguri road kano, tarauni kundila abuja naibawa zamfara'
                },

                 {
                    id: 1,
                    name: 'Abdulrahman Dauda',
                    email: 'adaag.ad@gmail.com',
                    phone: '08062249834',
                    price: '480000',
                    product: 'Poultry',
                    address: 'Kundila Maiduguri road kano, tarauni kundila abuja naibawa zamfara'
                },

                 {
                    id: 1,
                    name: 'Abdulrahman Dauda',
                    email: 'adaag.ad@gmail.com',
                    phone: '08062249834',
                    price: '480000',
                    product: 'Poultry',
                    address: 'Kundila Maiduguri road kano, tarauni kundila abuja naibawa zamfara'
                },

                 {
                    id: 1,
                    name: 'Abdulrahman Dauda',
                    email: 'adaag.ad@gmail.com',
                    phone: '08062249834',
                    price: '480000',
                    product: 'Poultry',
                    address: 'Kundila Maiduguri road kano, tarauni kundila abuja naibawa zamfara'
                }
            ]
        }
    },

    methods: {

        address() {
          this.$swal('hello')
        }

    }

}
</script>

<style>

</style>