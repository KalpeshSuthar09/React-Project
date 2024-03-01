import React from 'react';

const BookingProfile = (props) => {
    const [booking] = props;
    const bookingDetails = booking.map((val, index) => {
        <div  className="flex flex-col px-10 py-8 bg-white max-md:px-5" key={index}>
          <div className="mt-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-16 py-12 w-full bg-white rounded-md shadow-2xl text-zinc-700 max-md:px-5 max-md:mt-4 max-md:max-w-full">
                  <div className="flex gap-2 justify-between items-center mt-5 font-medium whitespace-nowrap">
                    <div className="flex flex-col flex-1 self-start text-2xl font-semibold">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/799d1e1a6aa534b47d32b6524fa83be6ff1dc2861d9c4be3fe1141f2d0843d3e?"
                        className="self-center aspect-square w-[124px]"
                      />
                      <div className="mt-5 ">{val.name}</div>
                    </div>
                    <div className="grow justify-center text-center mt-36 text-sm text-white bg-green-600 rounded max-md:mt-9">
                      AMOUNT
                    </div>
                    <div className="grow mt-36 text-sm max-md:mt-10">INR 249</div>
                  </div>
                  <div className="mt-7 mr-2.5 text-sm whitespace-nowrap">
                    Booking Number:PETCARE-123456
                  </div>
                  <div className="mt-7 text-sm font-medium">Date and Time</div>
                  <div className="mt-3.5 text-sm whitespace-nowrap">
                    Tuesday, January 30, 2024, 10:00 AM
                  </div>
                  <div className="mt-8 text-sm font-medium">Contact Details:</div>
                  <div className="flex gap-3 justify-between mt-6 text-sm whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/016db9d0bc17d48807449f6d6e5d5e824f2075687ffe7b2cc2d758a9ba06b0b1?"
                      className="self-start w-5 aspect-[1.25]"
                    />
                    <div className="flex-auto ">Jhondoe@gmail.com</div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-4 text-sm whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9a6d939b0ad1e2a01076ed5e0b42bf3634201bc3d84eee989c8356c7880274?"
                      className="w-4 aspect-[0.64] stroke-[2px] stroke-zinc-700"
                    />
                    <div className="flex-auto my-auto">{val.mobile}</div>
                  </div>
                  <div className="flex gap-3 self-start mt-3.5 text-sm whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/25275e1c6110c576ad0ae57dae4c2dd96212b28d7e3ebab4d919d4d2430428f8?"
                      className="w-5 aspect-[0.63]"
                    />
                    <div className="self-start mt-2.5">Jaipur</div>
                  </div>
                  <div className="mt-8 text-sm font-medium">Allergies:</div>
                  <div className="justify-center px-14 py-1.5 mt-5 text-sm whitespace-nowrap border border-green-600 border-solid max-md:px-5">
                    None
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
                  <div className="flex flex-col py-8 pr-20 pl-7 bg-white rounded-md shadow-2xl max-md:px-5 max-md:max-w-full">
                    <div className="mr-6 max-md:mr-2.5 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow text-lg font-medium text-zinc-700 max-md:mt-10">
                            <div className="text-base font-semibold">
                              Service Details:
                            </div>
                            <div className="mt-6 text-sm">
                              Service: <span className="">Vet Service</span>
                            </div>
                            <div className="mt-7 text-sm">Date and Time</div>
                            <div className="mt-3.5 whitespace-nowrap text-sm">
                              Tuesday, January 30, 2024, 10:00 AM
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col mt-10 text-lg font-medium text-zinc-700 max-md:mt-10">
                            <div className='text-sm'>
                              Address:{" "}
                              <span className="text-sm">456 Anytown Lane, Anytown,</span>
                              <br />
                              <span className="text-sm">CA 90210</span>{" "}
                            </div>
                            <div className="mt-4 text-sm">
                              Payment Status: <span className="text-sm">Paid</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 mr-6 text-sm font-medium text-red-500 max-md:mr-2.5 max-md:max-w-full">
                      Concern:{" "}
                      <span className="font-semibold text-red-500 text-sm">
                        Vomiting and loss of appetite for the past 2 days.
                      </span>
                    </div>
                    <div className="mt-5 mr-6 text-sm font-medium text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
                      Additional Details:{" "}
                      <span className="text-sm">
                        No recent dietary changes, up-to-date on vaccinations.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start py-11 pr-20 pl-4 mt-3 bg-white rounded-md shadow-2xl max-md:pr-5 max-md:max-w-full">
                    <div className="max-w-full w-[840px]">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-10">
                            <div className="text-base font-semibold">
                              Pet Details:
                            </div>
                            <div className="mt-7 text-sm">Pet Name</div>
                            <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                              Whiskers{" "}
                            </div>
                            <div className="mt-7 text-zinc-800 text-sm">Breed</div>
                            <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                              Persian
                            </div>
                            <div className="mt-7 text-zinc-800 text-sm">Special Needs</div>
                            <div className="justify-center px-2.5 py-2 text-sm border-b border-solid border-b-slate-200">
                              Diabetic, requires insulin injection twice daily.
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow mt-11 text-base font-medium text-zinc-700 max-md:mt-10">
                            <div>Species</div>
                            <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                              Cat
                            </div>
                            <div className="mt-7">Age</div>
                            <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                              8 years
                            </div>
                            <div className="mt-8">Years of experience</div>
                            <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                              10 years
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 mb-1.5 max-w-full w-[840px]">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow text-sm font-medium text-zinc-700 max-md:mt-8">
                            <div>Pet Images</div>
                            <div className="shrink-0 mt-2.5 h-24 border-2 border-dashed border-zinc-200" />
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                          <div className="mx-auto mt-6 h-24 border-2 border-dashed border-zinc-200 w-[186px] max-md:mt-10" />
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                          <div className="mx-auto mt-6 h-24 border-2 border-dashed border-zinc-200 w-[186px] max-md:mt-10" />
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                          <div className="mx-auto mt-6 h-24 border-2 border-dashed border-zinc-200 w-[186px] max-md:mt-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start py-8 pr-20 pl-6 mt-3.5 text-base font-semibold bg-white rounded-md shadow-2xl max-md:px-5 max-md:max-w-full">
            <div className="text-red-500 max-md:max-w-full">
              Special Instructions
            </div>
            <div className="mt-6 text-zinc-700 max-md:max-w-full">
               Whiskers is timid and prefers quiet environments. He's indoor-only
              and uses a litter box in the laundry room.
            </div>
          </div>
        </div>
    })

    return (
        <div>
            {bookingDetails}
        </div>
      );
};

export default BookingProfile;