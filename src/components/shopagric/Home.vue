<template>
      <!-- NAV SECTION -->
    <section class=" w-full h-20 py-6 lg:px-20 bg-[#06A157] flex relative" x-data="{ menu: false }">
        <!--  MOBILE NAV -->
        <div class=" absolute hidden  w-full px-6 lg:hidden" x-show="menu" >
            <div class=" bg-white dark:bg-gray-800 rounded-md px-4 flex flex-col space-y-6 py-6">
              <div class=" flex justify-between items-center">
                  <a href="">
                      SHOPAGRIC
                  </a>
                <button class=" border bg-[#0F5533] rounded-md " @click=" menu = ! menu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                </button>
              </div>
                <ul class="flex space-y-10 flex-col">
                    <li class="">
                        <a href="" class=" flex items-center space-x-2 px-2 py-2 rounded-md">
                           
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                              <p class=" font-poppins text-lg">Home</p>
                        </a>
                    </li>
                    <li>
                        <a href="" class=" flex items-center space-x-2 px-2 py-2 rounded-md">
                           
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                              <p class=" font-poppins text-lg">Contact</p>
                        </a>
                    </li> <li>
                        <a href="./login.html" class=" flex items-center space-x-2 px-2 py-2 rounded-md">
                           
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              <p class="font-poppins text-lg">Log In</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--  MOBILE NAV -->
        
        <nav class="flex justify-between w-full px-6 lg:w-[1280px]">
            <div class=" flex justify-center items-center text-white scroll">
                <a href="/" class=" font-bold">LOGO</a>
            </div>
            <div class="">
                <button class=" lg:hidden" @click="menu = true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-white w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                </button>
            </div>

            <div class=" hidden lg:block">
                <ul class="flex flex-row space-x-5 font-poppins">
                    <li class=" px-5 py-2">
                        <a href="index.html" class=" px-3">Home</a>
                    </li>
                    <li class=" px-5 py-2">
                        <a href="./contact.html" class=" px-3">Contact Us </a>
                    </li>
                    <li>
                        <a href="./login.html" class="text-white hidden lg:block px-5 py-2 cursor-pointer hover:bg-[#06A157] bg-[#0F5533] shadow-lg bg-[#0F5533]/60 ">Log In</a>
                    </li>
                </ul>
            </div>


            
        </nav>
    </section>
<!--  end of nav section -->
    <section class=" w-full h-[680px] ">
       <div class="grid lg:grid-cols-2 grid-cols-1 px-11 w-full h-full lg:justify-items-center bg-[#06A157]">

    <div class=" flex space-x-2 overflow-x-auto my-auto snap-x scroll-smooth ">
            <div v-for="product in sliders" :key="product.id" class=" w-3/4 snap-center flex-none overflow-x-scroll scroll-smooth flex-col justify-center lg:hidden ">
            <!-- the image loop here -->
            <div  class=" snap-center w-full flex justify-center rounded-lg relative">
                <img src="../../assets/img/ceo.jpg" class=" object-cover rounded-lg aspect-auto self-center  " alt="" srcset="">
                <div class=" absolute top-3 right-3 bg-[#06A157] px-4 py-2 drop-shadow-lg rounded-lg flex text-center ">
                    <p class="text-sm"> N{{ product.price }}</p>
                </div>
                <p class="absolute bottom-0 bg-black rounded-t-lg px-4">{{product.name}}</p>
            </div>
        </div>
    </div>
          
          
           <div class=" flex flex-col lg:justify-center lg:px-24 space-y-2">
                   <h1 class=" text-2xl lg:text-4xl font-poppins text-white font-bold">Bridging the Poultry Production-Supply Gap In Nigeria.</h1>
                   <div class="">
                        <p class=" text-base lg:text-2xl text-white font-poppins ">Making Poultry Meat Product available, affordable and accessible.</p>
                   </div>
                   <div class=" relative py-3 max-w-max">
                    <a href="#" class="text-white px-5 py-2 cursor-pointer hover:bg-[#06A157] bg-[#0F5533] shadow-lg bg-[#0F5533]/60 mx-auto ">Learn More</a>

                   </div>
           </div>
           <div class=" hidden lg:block lg:relative w-full h-full  lg:px-20">
               <img src="../../assets/img/banner.png" alt="" class=" absolute  bottom-0 " srcset="">
           </div>


       </div>

    </section>
    <section class="w-full flex justify-center lg:my-10 ">
        <div class="lg:w-[1200px] w-full flex flex-col lg:flex-row justify-between lg:px-5  self-center">
            <div class=" w-full lg:px-10 lg:py-10 flex justify-center items-center">
                <div class=" w-full h-full lg:rounded-2xl transform lg:-rotate-3 lg:px-10 lg:py-10  lg:bg-[#06A157] shadow-2xl">
                   <img src="../../assets/img/ceo.jpg" class=" h-full w-full transform lg:rotate-3 object-cover shadow-lg lg:rounded-2xl" alt="" srcset="">
                </div>

            </div>
            <div class=" w-full">
                <div class=" flex  justify-items-center text-center w-full flex-col space-y-5 px-8 lg:py-24 my-10  ">
                    <h1 class=" text-3xl font-poppins font-bold ">About Our Company</h1>
                    <p class=" font-poppins ">
                        At Shopagric, a trademark of Shopnorth Global Limited, we are focused on improving the production-supply chain of poultry meat products in Nigeria, through the operation and maintenance of an organic, healthy and effective production-distribution system.
                    </p>
                    <p class="font-poppins">
                        We have been in operation since October 2019 with a vast experience in the production, processing, packaging, marketing and distribution of Poultry Products in Nigeria. 
                    </p>
                     <div class=" my-4">
                </div>
            </div>
            </div>
        </div>

    </section>

    

      <section class="w-full flex flex-col lg:flex-row justify-center mx-auto ">
        <div class="lg:w-[1200px] w-full flex flex-col lg:flex-row justify-between lg:px-5   self-center mx-auto">
                <div class=" flex  w-full flex-col space-y-5 py-8 lg:p-8 my-auto mx-auto  ">
                       <div class="w-full  flex flex-col lg:flex-row gap-2 h-full py-6 lg:rounded-xl shadow-lg px-2 lg:px-4 dark:bg-gray-700 dark:text-white bg-white">
                          <div class=" text-center lg:w-4/6 dark:text-white ">
                            <p class=" lg:text-xl text-lg font-poppins font-bold">Projected Production Capacity By Year End - 
                            <span class=" text-xl font-bold my-4">Dec. 31<sup>st</sup> 2022</span></p> 
                            <div class=" flex my-5 justify-center">
                                <h1 class=" text-2xl lg:text-4xl font-bold font-poppins space-x-0 ">39,700</h1> <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-8 h-6 lg:w-8 w-6 mt-3 text-green-500 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                                    </svg>
                                </span>

                            
                            </div>

                            <div class=" text-sm lg:text-base text-center">
                                With a current poultry production capacity of 19,700, we have been able to meet the production-supply demands of poultry meat by our customers through an effective production system design.
                            </div>
                          </div>
                          <div class="  lg:w-2/6 h-full py-2 px-10 lg:px-0 flex">
                            <div class="w-full border-b-2 h-[200px] lg:h-[270px] grid items-end grid-cols-3 gap-10 lg:gap-6 py-2 px-2 border-gray-600">
                                <div class=" h-2/6 bg-[#06A157] shadow-lg shadow-teal-900/30"></div>
                                <div class=" h-3/4 bg-[#06A157] shadow-lg shadow-teal-900/30"></div>
                                <div class=" h-full bg-[#06A157] shadow-lg shadow-teal-900/30"></div>
                            </div>
                          </div>
                       </div>
                    </div>
            </div>


                <div class=" grid grid-cols-2 lg:gap-6 gap-y-6 w-full items-center justify-items-center lg:px-8 xl:px-14 py-16">
                    <div class=" flex space-y-6 w-full flex-col col-span-2 lg:col-span-1 ">
                        <div class=" w-full h-52 lg:rounded-lg bg-white dark:bg-gray-700 shadow-lg lg:px-4 px-16 py-4 grid grid-cols-2">
                            <div class=" flex flex-col py-4 space-y-1 justify-center dark:text-white ">
                                <h3 class=" text-md font-bold font-poppins">Poultry</h3>
                                <p class=" text-[#06A157] text-md font-poppins font-bold"> Fish</p>
                            </div>
                            <div class=" flex justify-end md:px-16 lg:px-0">
                               <div class="w-full border-b-2 grid items-end grid-cols-3 gap-2 lg:gap-2 md:gap-16 py-1 px-2 border-gray-600">
                                   <div class="h-2/6 bg-[#06A157] shadow-lg shadow-teal-900/30"></div>
                                   <div class="h-3/4 bg-[#06A157] shadow-lg shadow-teal-900/30"></div>
                                   <div class="h-full bg-[#06A157] shadow-lg shadow-teal-900/30"></div>
                               </div>
                            </div>

                        </div>
                        <div class=" h-52 lg:rounded-lg w-full bg-white dark:bg-gray-700 shadow-lg px-4 py-5 flex flex-col justify-center">
                            <div class="flex flex-col justify-center  text-center space-y-1 dark:text-white">
                                <h1 class="text-4xl text-[#0F5533]00 font-poppins font-bold">40k+</h1>
                                <h2 class="tracking-wide text-lg font-poppins font-bold">Produced Birds</h2>
                                <p class="font-light text-xs font-poppins"></p>
                            </div>
                        </div>
                    </div>
                    <div class=" w-full h-52 col-span-2 lg:col-span-1 lg:rounded-lg bg-white shadow-lg px-4 py-5 dark:bg-gray-700 flex flex-col justify-center">
                            <div class="flex flex-col justify-center  text-center space-y-1 dark:text-white">
                                <h1 class="text-4xl text-[#0F5533]00 font-poppins font-bold">30%</h1>
                                <h2 class="tracking-wide text-lg font-poppins font-bold">Increase in productivity</h2>
                                <p class="font-light text-xs font-poppins"></p>
                            </div>
                        </div>
                </div>
    
    </section>
      <!-- end of another metric section -->



    <section class="w-full my-10">
        
        <div class=" grid grid-cols-2  ">
            <div class=" lg:px-16 bg-[#06A157] col-span-2 lg:col-span-1 text-white ">
                <div class=" flex  justify-items-center w-full flex-col space-y-5 text-center px-6 lg:px-8 py-24  ">
                    <h1 class=" text-3xl font-poppins font-bold">Our Progress & Marketing <br> Analytics</h1>
                    <p class=" font-poppins "> We are committed to the course of maintaining our unique production-supply chain of poultry meat products, hence the need for a gradual expansion of the farm, so as to exceed our supply target of 320,000 poultry birds in the next 12 months.</p>
                     <div class=" my-4">
                </div>
            </div>
            </div>
                <div class=" flex px-5 lg:px-10 py-10 bg-white col-span-2 lg:col-span-1 dark:bg-gray-700 space-y-3  ">
                 <ul class=" flex flex-col space-y-3">
                     <li class=" flex space-x-3 items-start ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-none  text-teal-700 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                          </svg>
                          <p>The activities list number one. Two this is not Two this is notTwo this is not</p>
                     </li>
                     
                     <li class=" flex space-x-3 items-start ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-none  text-teal-700 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                          </svg>
                          <p>The activities list number one. Two this is not Two this is notTwo this is not</p>
                     </li>

                     <li class=" flex space-x-3 items-start ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-none  text-teal-700 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                          </svg>
                          <p>The activities list number one. Two this is not Two this is notTwo this is not</p>
                     </li>

                     <li class=" flex space-x-3 items-start  ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-none  text-teal-700 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                          </svg>
                          <p>The  The activities list number one. Two this is not Two this is notTwo this is not The activities list number one. Two this is not Two this is notTwo this is not The activities list number one. Two this is not Two this is notTwo this is notactivities list number one. Two this is not Two this is notTwo this is not</p>
                     </li>

                     <li class=" flex space-x-3 items-start ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-none  text-teal-700 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                          </svg>
                          <p>The activities list number one. Two this is not Two this is notTwo this is not</p>
                     </li>
                 </ul>
                  
                </div>

        </div>
    </section>


<!-- quick order section -->
<section class="w-full bg-white dark:bg-gray-800 lg:dark:bg-gray-700 my-10">
  <div class=" grid grid-cols-2  ">
      <div class=" w-full md:px-6 py-6 lg:col-span-1 col-span-2 flex px- justify-center ">
          <div class=" w-full h-full bg-white dark:bg-gray-700 py-10 px-6">
              <div class=" flex flex-col space-y-1 ">
                  <h4 class="text-2xl font-poppins">Quick Order</h4>
                  <p class="text-sm font-poppins text-gray-700">Buy products directly from the Company</p>
              </div>
            <form  class="  flex flex-col">
           <div class="flex flex-col lg:flex-row lg:space-x-3">
                <!-- single form input -->
                <div class=" flex flex-col space-y-1 my-2 w-full h-full px-2 py-1 rounded-md border border-slate-400">
                    <label for="unit" class="text-xs font-poppins dark:text-white text-gray-700 px-1 ">Unit</label>
                    <input type="text" name="unit" class=" w-full bg-transparent focus:outline-none px-1" placeholder="100" id="unit">
                </div>
             <!--  end of single form input -->
             <!-- single form input -->
                 <div class=" flex flex-col space-y-1 my-2 w-full h-full px-2 py-1 rounded-md border border-slate-400">
                     <label for="product" class="text-xs font-poppins dark:text-white text-gray-700 px-1 ">Product Type</label>
                     <select name="product" id="" class=" bg-transparent dark:text-white rounded-lg w-full focus:outline-none">
                         <option value="One" class="  bg-white dark:bg-gray-700 " selected disabled>Select Product type</option>
                         <option value="Fish Stock" class="  bg-white dark:bg-gray-700 ">Fish Stock</option>
                         <option value="Poultry" class="  bg-white dark:bg-gray-700 ">Poultry</option>
                         <option value="Fish Feeds" class="  bg-white dark:bg-gray-700 ">Fish Feeds</option>
                         <option value="Poultry Feeds" class="  bg-white dark:bg-gray-700 ">Poultry Feeds</option>
                     </select>
                 </div>
             <!--  end of single form input -->
           </div>

               <div class=" flex flex-col lg:flex-row lg:space-x-3">
                     <!-- single form input -->
                <div class=" flex flex-col space-y-1 my-2 w-full h-full px-2 py-1 rounded-md border border-slate-400">
                    <label for="email" class="text-xs font-poppins text-gray-700 px-1   dark:text-white ">Email</label>
                    <input type="email" name="email" class=" w-full bg-transparent :bg-yellow-500 focus:outline-none px-1" placeholder="me@example.com" id="unit">
                </div>
                <!--  end of single form input -->

                <!-- single form input -->
                <div class=" flex flex-col space-y-1 my-2 w-full h-full px-2 py-1 rounded-md border border-slate-400">
                    <label for="phone" class="text-xs font-poppins text-gray-700 px-1 dark:text-white ">Phone Number</label>
                    <input type="tel" name="phone" class=" w-full bg-transparent focus:outline-none px-1" placeholder="080-000-000-000" id="unit">
                </div>
                <!--  end of single form input -->
               </div>
             <!-- single form input -->
             <div class=" flex flex-col space-y-1 my-2 w-full h-full px-2 py-1 rounded-md border border-slate-400">
                <label for="name" class="text-xs font-poppins text-gray-700 px-1 dark:text-white ">Full Name</label>
                <input type="text" name="name" class=" w-full bg-transparent focus:outline-none px-1" placeholder="Abdurahman Dauda" id="unit">
            </div>
            <!--  end of single form input -->
             <!-- single form input -->
             <div class=" flex flex-col space-y-1 my-2 w-full h-full px-2 py-1 rounded-md border border-slate-400">
                <label for="unit" class="text-xs font-poppins text-gray-700 dark:text-white px-1  bg-transparentdark:text-white ">Delivery Address</label>
                <textarea name="" id="" cols="10" rows="3" class=" bg-transparent focus:outline-none" placeholder="Enter Address"></textarea> 
            </div>

                <button class=" w-full px-3 py-3 bg-[#06A157] rounded-md shadow-lg text-white font-poppins font-bold text-lg">Place Order</button>
            <!--  end of single form input -->
  
            </form>

          </div>
      </div>
      <div class=" w-full col-span-2 lg:col-span-1 bg-[#06A157] flex-col h-full py-10 flex justify-center space-y-10 items-center ">
          <h1 class=" text-3xl font-poppins text-white font-bold">Our distributors</h1>

        
        <div class=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center space-x-4 px-10 lg:px-16  ">
            <div class="  lg:w-72 lg:flex-col space-y-3  lg:h-72 bg-[#1FACE3]   rounded-full text-center flex justify-center items-center">
                <img src="../../assets/img/farm1.png" class=" h-52 w-52 lg:h-64 lg:w-64 object-cover rounded-full drop-shadow-lg" alt="">
                <p class=" text-xl lg:text-2xl text-white font-bold font-poppins">Natnudo Foods</p>
            </div>

            <div class=" lg:w-72 lg:flex-col space-y-3 lg:h-72 bg-[#FFC308]  rounded-full text-center flex justify-center items-center">
              <img src="../../assets/img/farm2.jpeg" class=" object-cover h-52 w-52 lg:h-64 lg:w-64 rounded-full object-center drop-shadow-lg" alt="" srcset="">
              <p class=" text-xl lg:text-2xl text-white font-bold font-poppins ">Vaneltine Chicken</p>
            </div>
        </div>
      </div>

  </div>
</section>
<!-- end of quick order section -->


<section class=" w-full bg-[#06A157]  dark:bg-gray-800 text-white ">
    <div class=" flex flex-col w-full justify-center py-10 text-center space-y-3 px-4">
        <h3 class=" px-2 font-poppins text-xl lg:text-3xl font-bold">Subscribe to our news letter</h3>
        <p class=" tracking-wider text-base lg:text-xl"> Stay updated on all our activities in Shopagric... Don't miss out on anything </p>
        
       <form action=" flex">
            <div class=" flex flex-col lg:flex-row items-center mx-auto lg:space-y-0 space-y-6 border lg:border-none rounded-md justify-center lg:w-2/4 px-4 py-6 ">
                <input type="text" placeholder="Drop your email" class=" text-gray-900 focus:outline-none lg:mx-1 py-3 rounded-md dark:text-white  w-full px-3 dark:bg-gray-800 border roudned lg:rounded-l-full">
                <button type="submit" class="w-full lg:max-w-min bg-white dark:bg-[#06A157] dark:text-white text-[#0F5533]00 flex-none rounded-md  font-bold lg:rounded-r-full  lg:px-10 py-3 ">Submit</button>
                
            </div>
       </form>

    </div>
   
</section>

<footer class="bg-black w-full justify-center py-2  flex  ">
<nav class=" mx-auto lg:space-x-10 space-x-2">
    <a href="index.html" class=" border-b py-1">Home</a>
    <a href="./login.html" class=" border-b py-1">log In</a>
    <a href="./contact.html" class=" border-b py-1">Contact Us</a>
    <!-- <a href="/activities.html" class=" border-b py-1">Activities</a> -->
</nav>
</footer>
</template>

<script>
export default {
    data() {
        return {
            current: {
                name: 'Poultry',
                price: 2300,
                image: '../../assets/img/ceo.jpg'
            },
            sliders: [
                {
                    id: 1,
                    name: 'Poultry',
                    price: 2300,
                    image: '../../assets/img/ceo.jpg'
                },
                 {
                    id: 2,
                    name: 'Poultry Feeds',
                    price: 4400,
                    image: '../../assets/img/ceo.jpg'
                },
                {
                    id: 3,
                    name: 'Fish ',
                    price: 1200,
                    image: '../../assets/img/ceo.jpg'
                },
                {
                    id: 4,
                    name: 'Fish Feeds',
                    price: 1200,
                    image: '../../assets/img/ceo.jpg'
                },
            ]
        }
    },

    //methods

    methods: {
        next() {
            
        }
    }

}
</script>

<style>

</style>