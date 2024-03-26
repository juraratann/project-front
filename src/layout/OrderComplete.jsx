import React from 'react'

export default function OrderComplete() {
  return (
    <div>
      <section class="w-screen">
  
  <div class="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
    <div class="relative flex h-full flex-col text-gray-600 md:flex-row">
      <div class="relative p-8 md:w-4/6"> 
        <div class="flex flex-col md:flex-row md:items-end">
          <p class="mt-6 text-4xl font-black text-blue-500">Order summary<sup class="align-super text-sm"></sup></p>
        </div>
        <p class="mt-3 font-sans text-base tracking-normal">Address 48/1 Village No. 26, NongSaeng Subdistrict, WapiPathum District. MahaSarakham Province 44120</p>
        <div class="mt-8 flex flex-col sm:flex-row">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mx-auto mt-8 max-w-md md:mt-12">
      <div class="">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0 relative">
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Zinc-15mg.jpg?o=O2pqbxqynEMEExqXbpEBNKkoFSgj&V=7N9z&w=800&h=800" alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">Chemist Zinc 15mg</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">120 Tablets</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$250</p>
                    </div>
                  </div>

                </div>
              </li>
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0 relative">
      
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Vitamin-E-400iu.jpg?o=4Tg8m@TRQRC6cyEEJADeZEGYC7Qj&V=WmFt&w=600&h=600" alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">Vitamin E 400 iu</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">90 Tablets</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$ 290</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* <hr class="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" />  */}

          <div class="mt-6 space-y-3  py-8">
            <div class="flex items-center justify-between">
              <p class="text-gray-400">Subtotal</p>
              <p class="text-lg font-semibold text-gray-900">$540</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-gray-400">Shipping</p>
              <p class="text-lg font-semibold text-gray-900">$10</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400"></span> 558</p>
          </div>
        </div>
      </div>
    </div>
  </div>


        </div>
      </div>

      <div class="mx-auto flex items-center px-5 pt-1 md:p-8">
  <div class="my-10 flex h-full flex-col overflow-hidden rounded-2xl bg-white text-gray-600 shadow-lg ring-1 ring-gray-200">
    <div class=" p-6">
      <h6 class="mb-2 text-blue-500 font-semibold">Delivery status</h6>
      <p class="mb-4 text-sm font-light">
        <i class="inline-block font-black not-italic text-green-600" aria-hidden="true"></i>
        <span class="font-semibold">20 - 23</span> 
      </p>
    </div>
    <div class="flex-auto p-6">
      <div class="relative flex flex-col justify-center">
        <div class="absolute left-4 h-full border-r-2"></div>
        <div class="relative mb-4">
          <span class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">A</span>
          <div class="ml-12 w-auto pt-1">
            <h6 class="text-sm font-semibold text-blue-900">$ Design changes</h6>
            <p class="mt-1 text-xs text-gray-500">22 FED 7:20 PM</p>
          </div>
        </div>
        <div class="relative mb-4">
          <span class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">B</span>
          <div class="ml-12 w-auto pt-1">
            <h6 class="text-sm font-semibold text-blue-900">New order #1832412</h6>
            <p class="mt-1 text-xs text-gray-500">21 FED 11 PM</p>
          </div>
        </div>
        <div class="relative mb-4">
          <span class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">C</span>
          <div class="ml-12 w-auto pt-1">
            <h6 class="text-sm font-semibold text-blue-900">Server payments for April</h6>
            <p class="mt-1 text-xs text-gray-500">21 FED 9:34 PM</p>
          </div>
        </div>
        <div class="relative mb-4">
          <span class="absolute inline-flex h-6 w-6 items-center justify-center text-center text-base font-semibold">
            <span class="text-xl text-orange-600"></span>
          </span>
          <div class="ml-12 w-auto pt-1">
            <h6 class="text-sm font-semibold text-blue-900">New card added for order #4395133</h6>
            <p class="mt-1 text-xs text-gray-500">21 FED 2:20 AM</p>
          </div>
        </div>
        <div class="relative mb-4">
          <span class="absolute inline-flex h-6 w-6 items-center justify-center text-center text-base font-semibold">
            <span class="text-xl text-red-600"></span>
          </span>
          <div class="ml-12 w-auto pt-1">
            <h6 class="text-sm font-semibold text-blue-900">Unlock packages for development</h6>
            <p class="mt-1 text-xs text-gray-500">20 FED 4:54 AM</p>
          </div>
        </div>
        <div class="relative">
          <span class="absolute inline-flex h-6 w-6 items-center justify-center text-center text-base font-semibold">
            <span class="text-xl text-blue-900"></span>
          </span>
          <div class="ml-12 w-auto pt-1">
            <h6 class="text-sm font-semibold text-blue-900">New order #9583120</h6>
            <p class="mt-1 text-xs text-gray-500">20 FED</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <div class="mx-auto flex items-center px-5 pt-1 md:p-8">
      <img class="block h-auto max-w-full rounded-md shadow-lg" src="data:image/png;base64,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" alt="Shop image" />
    </div> */}
      </div>
    </div>
  
  
  </section>
    </div>
  )
}
