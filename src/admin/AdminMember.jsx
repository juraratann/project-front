import React from 'react'

export default function AdminMember() {
  return (
  

    <div className="mx-auto"> 
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span class="sr-only">Action button</span>
                Action
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
          
            <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Position
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Point
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/419584935_1559040918186336_8233708977485550932_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF-9zt2PUlYvYdvy0aX0oosUgqEt_Yh-clSCoS39iH5yWONOgISFjVlDPiMCmYzgH3bNJpJ-eclJIgW_aiXFpKp&_nc_ohc=D3M4HakJJUIAX_6hvsI&_nc_ht=scontent-bkk1-1.xx&oh=00_AfDE6eG11fK8Dupj5smmloh82VAMHG_hGlVmDgxugcIAuQ&oe=65EE01DC" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">andy</div>
                        <div class="font-normal text-gray-500">andy@gmail.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                USER
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full  me-2"></div> 292
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit User</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/395119814_1515278315895930_2051804015463922926_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF8aG8ZoXrzrFXk3I-4sBjd7FKS8QYv1ULsUpLxBi_VQoO3UDUx4cbm7k572PVnmhl3RNJG_9SqoZouvsgRej7e&_nc_ohc=IWyV9rPorIkAX_Iy3P2&_nc_ht=scontent-bkk1-1.xx&oh=00_AfCL8EO7BikOf9aVcFurreUZF7IiPoTwihoc5P18nhy33g&oe=65EEEE81" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">patty</div>
                        <div class="font-normal text-gray-500">pat@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                USER
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full  me-2"></div> 456
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit User</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/430201371_1588296408594120_7101973384605462978_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGa6flzamiq5K0ydogfIuNAgonDolGfucKCicOiUZ-5woHY_F36ABDj_kPRelv10HeBHt-7OB-XdAb4U2FLpE9v&_nc_ohc=WYo53Z1kr2wAX9gSirP&_nc_ht=scontent-bkk1-1.xx&oh=00_AfARtLJ1Qon-OkctfDZVy7PAmLuuritRoAdZQpezyBH0uA&oe=65EDE80B" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">jurarat</div>
                        <div class="font-normal text-gray-500">anny015@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                USER
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full  me-2"></div> 248
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit User</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/292132964_378274227624482_4986858888693817229_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEj4FSWVF_SmO0seCAtseK3PM3sF90cR0E8zewX3RxHQU433twU0uLQ7bIOZKjYXAyXTtmJJcnjEW2pcYdDRBOs&_nc_ohc=H1QiBe1_MUwAX8sANTS&_nc_ht=scontent-bkk1-1.xx&oh=00_AfC9NBkkUaUmS819LFql80IwpL0VdZxnl6mqPoQ-kzY9aQ&oe=65EDFD60" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">big</div>
                        <div class="font-normal text-gray-500">big@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    USER
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full  me-2"></div> 590
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit User</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/395076941_1514087902681638_980757355223892419_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEs-XwcuR4SdSZqXp4n0tlt2VySfaeikQfZXJJ9p6KRBzgFG4gYX23FkJvgAFWJRcdORgDgKqZOFu5EIisYSCHb&_nc_ohc=1dyBmvjt14gAX8JdsTO&_nc_ht=scontent-bkk1-1.xx&oh=00_AfAusFSIkPPnXOvPzrWd6KF7wfnM6urJPy3idBncfmKfZw&oe=65EDB1B5" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">cat</div>
                        <div class="font-normal text-gray-500">cat@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    USER
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full  me-2"></div> 320
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit User</a>
                </td>
            </tr>
            {/* <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/341875010_785211906562859_2883827838063967163_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEzZvEj2_T_45RDa6eSt7yBcQFhK7yyxOdxAWErvLLE51WAlyUR9uT6cH_SDqGJX4V7oi32t6pffFYxGcTmnbiS&_nc_ohc=mN6_XJpx_DcAX90b3Hm&_nc_ht=scontent-bkk1-1.xx&oh=00_AfCO8acbj5dut8T_yAE4oRap4_oJig-c6CUmr9r-YLpXBw&oe=65EE0440" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">nany</div>
                        <div class="font-normal text-gray-500">nany@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    ADMIN
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit Admin</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/399618347_1526128178144277_7133057298971345633_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGei7STQzJQPVpTH_AlaF5lrEJd0wayqzesQl3TBrKrNxNf1vmb0dEkHh_d92JJAybttCEWLFvvT9dCnSPhH1gC&_nc_ohc=GbRASRQX8NMAX-FM_MY&_nc_ht=scontent-bkk1-1.xx&oh=00_AfC2sJYm23f10O_UDRiEFRL3p7OpEsb_bgiozHhuRRskSA&oe=65EF05B0" alt="Jese image"/>
                    <div class="ps-3">
                        <div class="text-base font-semibold">anny</div>
                        <div class="font-normal text-gray-500">annyanny015@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    ADMIN
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit Admin</a>
                </td>
            </tr> */}
        </tbody>
    </table>
</div>
  )
}
