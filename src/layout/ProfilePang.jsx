import React from 'react'

export default function ProfilePang() {
  return (
    <div>
       <div class="h-full">
  <div class="border-b-2 block md:flex">
    <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
      <div class="flex justify-between">
        <span class="text-xl font-semibold block"> Profile</span>
        <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
      </div>

      <span class="text-gray-600">This information is secret so be careful</span>
      <div class="w-full p-8 mx-2 flex justify-center">
        <img id="showImage" class="max-w-xs w-32 items-center border" src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/419584935_1559040918186336_8233708977485550932_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=GDd9qo0U9V8AX94y1Jr&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfAuk0MXEt9rp00C5WvWw1budUaS5kBNgrFfwENJiF0j1Q&oe=65E41E9C" alt=""/>                          
        </div>
    </div>
    
    <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
      <div class="rounded  shadow p-6">
        <div class="pb-6">
          <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
          <div class="flex">
            <input disabled id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="jurarat" />
          </div>
        </div>
        <div class="pb-4">
          <label for="about" class="font-semibold text-gray-700 block pb-1">Email</label>
          <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="annyanny015@gmail.com" />
          <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
        </div>
      </div>
    </div>

  </div>
 
</div>
    </div>
  )
}
