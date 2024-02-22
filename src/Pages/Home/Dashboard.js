import React from "react";

const Dashboard = () => {
  return (
    <div className="  flex flex-col py-10 pr-2.5 pl-5 bg-white">
      <div className="self-center  max-w-full w-[804px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-7 py-7 mx-auto w-full whitespace-nowrap rounded-md border border-indigo-500 border-solid text-zinc-800 max-md:px-5 max-md:mt-10">
              <div className="justify-center items-center px-16 py-2 text-xl border-b border-solid border-b-zinc-800 max-md:px-5">
                Total Bookings
              </div>
              <div className="flex gap-0.5 self-center mt-7">
                <div className="grow text-xl">500</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3bf129c622cabfd9c4a10c9c7be5234820bc51d7985a9fa17ecd6e56df3c0c8?"
                  className="my-auto w-3.5 aspect-square fill-green-600"
                />
                <div className="grow self-start mt-1.5 text-base">30%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-7 py-6 mx-auto w-full whitespace-nowrap rounded-md border border-indigo-500 border-solid  text-zinc-800 max-md:px-5 max-md:mt-10  shadow-lg ">
              <div className="justify-center items-center px-16 py-2 text-xl border-b border-solid border-b-zinc-800 max-md:px-5">
                Revenue
              </div>
              <div className="flex gap-0.5 self-center mt-7">
                <div className="grow text-xl">INR 40,000</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9796ac09c8f61dff819550787674ef95bc30f3b31db6a9444b64698ba767ac86?"
                  className="self-start w-3.5 aspect-square fill-green-600"
                />
                <div className="my-auto text-base">30%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-2 py-4 w-full bg-white rounded-md shadow-2xl text-zinc-800 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between pr-9 text-zinc-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto text-xl">
                  Recent Bookings
                </div>
                <div className="justify-center px-14 py-2.5 text-base whitespace-nowrap rounded-md border border-solid border-zinc-700 max-md:px-5">
                  View All{" "}
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-3 text-base font-medium max-md:flex-wrap max-md:max-w-full">
                <div className="grow whitespace-nowrap">Booking Id</div>
                <div className="flex-auto">Customer Name</div>
                <div className="flex-auto">Service Booked</div>
                <div className="flex-auto">Booking Time </div>
                <div>Status</div>
              </div>
              <div className="flex gap-5 justify-between items-start px-3 py-2.5 mt-5 text-base rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="mt-1">7896541</div>
                <div className="mt-1">Jhon Doe</div>
                <div className="mt-1">Grooming</div>
                <div className="mt-1">Feb 5, 2024</div>
                <div className="grow justify-center self-stretch px-2.5 py-1 whitespace-nowrap bg-green-100 rounded-md text-neutral-800">
                  Upcoming
                </div>
              </div>
              <div className="flex gap-5 justify-between items-start p-2.5 mt-2.5 text-base rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="mt-1">7896541</div>
                <div className="mt-1">Jhon Doe</div>
                <div className="mt-1">Grooming</div>
                <div className="mt-1">Feb 5, 2024</div>
                <div className="grow justify-center self-stretch px-2.5 py-1 whitespace-nowrap bg-indigo-500 rounded-md text-slate-50">
                  Completed
                </div>
              </div>
              <div className="flex gap-5 justify-between items-start px-3 py-2.5 mt-2.5 text-base rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="mt-1">7896541</div>
                <div className="mt-1">Jhon Doe</div>
                <div className="mt-1">Grooming</div>
                <div className="mt-1">Feb 5, 2024</div>
                <div className="grow justify-center self-stretch px-2.5 py-1 whitespace-nowrap bg-green-100 rounded-md text-neutral-800">
                  Upcoming
                </div>
              </div>
              <div className="flex gap-5 justify-between items-start px-4 py-2.5 mt-2.5 text-base rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="mt-1">7896541</div>
                <div className="mt-1">Jhon Doe</div>
                <div className="mt-1">Grooming</div>
                <div className="mt-1">Feb 5, 2024</div>
                <div className="grow justify-center self-stretch px-2.5 py-1 text-red-500 whitespace-nowrap bg-rose-400 rounded-md">
                  Cancelled
                </div>
              </div>
              <div className="flex gap-5 justify-between items-start px-3 py-2.5 mt-2.5 text-base rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="mt-1">7896541</div>
                <div className="mt-1">Jhon Doe</div>
                <div className="mt-1">Grooming</div>
                <div className="mt-1">Feb 5, 2024</div>
                <div className="grow justify-center self-stretch px-2.5 py-1 whitespace-nowrap bg-green-100 rounded-md text-neutral-800">
                  Upcoming
                </div>
              </div>
              <div className="flex gap-5 justify-between items-start px-3 py-2.5 mt-2.5 text-base rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="mt-1">7896541</div>
                <div className="mt-1">Jhon Doe</div>
                <div className="mt-1">Grooming</div>
                <div className="mt-1">Feb 5, 2024</div>
                <div className="grow justify-center self-stretch px-2.5 py-1 whitespace-nowrap bg-green-100 rounded-md text-neutral-800">
                  Upcoming
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-11 pt-3 pb-6 w-full bg-white rounded-md shadow-2xl text-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between pr-8 text-zinc-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto text-xl">
                  New Partner Users
                </div>
                <div className="justify-center px-14 py-2.5 text-base whitespace-nowrap rounded-md border border-solid border-zinc-700 max-md:px-5">
                  View All
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-4 text-base font-medium whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div>Name</div>
                <div>Email</div>
                <div>Services</div>
                <div>Date</div>
              </div>
              <div className="flex gap-5 justify-between px-2.5 py-3.5 mt-4 text-base whitespace-nowrap rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div>Jhon Doe</div>
                <div className="flex-auto">JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div className="grow">Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between px-2.5 py-3.5 mt-2.5 text-base whitespace-nowrap rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div>Jhon Doe</div>
                <div className="flex-auto">JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div className="grow">Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between px-2.5 py-3.5 mt-2.5 text-base whitespace-nowrap rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div>Jhon Doe</div>
                <div className="flex-auto">JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div className="grow">Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between px-2.5 py-3.5 mt-2.5 text-base whitespace-nowrap rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div>Jhon Doe</div>
                <div className="flex-auto">JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div className="grow">Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between px-2.5 py-3.5 mt-2.5 text-base whitespace-nowrap rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div>Jhon Doe</div>
                <div className="flex-auto">JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div className="grow">Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between px-2.5 py-3.5 mt-2.5 text-base whitespace-nowrap rounded border-b border-solid border-b-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div>Jhon Doe</div>
                <div className="flex-auto">JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div className="grow">Feb 5, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
