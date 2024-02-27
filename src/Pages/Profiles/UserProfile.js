import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

export default function UserProfile(props) {
  const { profile, removeProfile } = props;

  const profileList = profile.map((val, index) => (
    <div className="flex flex-col px-10 py-0 bg-white max-md:px-5" key={index}>
      <div className="mt-1 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-16 py-12 w-full text-2xl whitespace-nowrap bg-white rounded-md shadow-sm max-md:px-5 max-md:mt-4 max-md:max-w-full">
              <div className="ml-5 max-w-full aspect-square w-[124px] max-md:ml-2.5" />
              <div className="mt-5 ml-7 font-semibold text-zinc-700 max-md:ml-2.5">
                {val.Fname}

                {val.Lname}
              </div>
              <div className="flex gap-3 mt-7 text-zinc-700">
                <MdOutlineEmail className="my-auto w-5 aspect-[1.43]" />
                <div className="grow">{val.email}</div>
              </div>
              <div className="flex gap-3.5 mt-5 text-zinc-700">
                <CiMobile1 className="w-4 aspect-[0.72] stroke-[2px] stroke-zinc-700" />
                <div className="flex-auto">{val.mobile}</div>
              </div>
              <div className="flex gap-3 mt-6 text-zinc-700">
                <CiLocationOn className="w-5 aspect-[0.71]" />
                <div className="flex-auto my-auto">{val.location}</div>
              </div>
              <div className="flex gap-4 mt-4 text-zinc-700">
                <IoIosLink className="my-auto aspect-square w-[11px]" />
                <div className="flex-auto">{val.link}</div>
              </div>
              <div className="flex gap-5 justify-between mt-8 text-base font-semibold">
                <button className="grow justify-center px-2.5 py-2 rounded-md border border-solid border-zinc-700 text-zinc-700">
                  Block User
                </button>
                <button
                  className="grow justify-center px-1.5 py-2 bg-red-500 rounded-md border border-red-500 border-solid text-slate-50"
                  onClick={() => removeProfile(val.id)}
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
              <div className="flex flex-col justify-end px-7 py-8 bg-white rounded-md shadow-sm text-zinc-700 max-md:px-5 max-md:max-w-full">
                <div className="text-2xl font-semibold max-md:max-w-full">
                  About Me
                </div>
                <div className="mt-9 text-xl max-md:max-w-full">
                  {val.AboutMe}
                </div>
              </div>
              <div className="flex flex-col items-start py-11 pr-20 pl-5 mt-3.5 bg-white rounded-md shadow-sm max-md:pr-5 max-md:max-w-full">
                <div className="max-w-full w-[761px]">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-10">
                        <div className="text-2xl font-semibold">
                          Personal Details
                        </div>
                        <div className="mt-7">First Name</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                          {val.Fname}
                        </div>
                        <div className="mt-7 text-zinc-800">Register Date</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          21 December 2023{" "}
                        </div>
                        <div className="mt-7 text-zinc-800">Address</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto text-base font-medium text-zinc-700 max-md:mt-10">
                        <div>Last Name</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          {val.Lname}
                        </div>
                        <div className="mt-7">Role</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          User
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 max-w-full text-sm whitespace-nowrap border-b border-solid border-b-slate-200 text-zinc-700 w-[761px] max-md:pr-5">
                  {val.Address}
                </div>
                <div className="mt-7 mb-4 max-w-full w-[761px]">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-10">
                        <div>Postal Code</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          {val.PostalCode}
                        </div>
                        <div className="mt-8">State</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          {val.State}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col whitespace-nowrap text-zinc-700 max-md:mt-10">
                        <div className="text-base font-medium">City</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                          {val.City}
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
    </div>
  ));

  return (
    <div>
      <div>{profileList}</div>
    </div>
  );
}
