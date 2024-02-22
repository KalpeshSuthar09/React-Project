/* import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("userDetails"));
    if (token.email === detail.email && token.password === detail.password) {
      console.log("user is authenticated");
      navigate("/Dashboard");
    } else {
      console.log("user is not authenticated");
    }
  };

  return (
    <div className="flex justify-center items-center px-16 py-12 text-lg font-medium whitespace-nowrap bg-white text-zinc-700 max-md:px-5">
      <div className="flex flex-col items-center px-16 pt-4 pb-12 mt-20 max-w-full bg-white rounded-md shadow-sm w-[846px] max-md:px-5 max-md:mt-10">
        <div  className="flex flex-col mb-2 max-w-full w-[550px]">
           <svg
            className="self-center max-w-full aspect-[3.85] w-[213px]"
            width="213"
            height="56"
            viewBox="0 0 213 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_157)">
              <path
                d="M137.179 11.0362C136.416 11.2093 135.496 11.6204 135.205 11.9341C134.768 12.3993 134.42 13.3729 134.319 14.433C134.196 15.8502 134.196 43.0138 134.33 45.4044C134.723 52.6091 136.405 54.7837 142.147 55.5084C145.107 55.8869 147.878 55.822 148.977 55.3569C149.818 54.9892 150.255 54.1453 150.479 52.4253C150.793 49.9048 150.39 47.4165 149.56 46.7459C148.921 46.2267 148.573 46.1186 147.137 46.032C145.579 45.9346 145.298 45.8264 145.007 45.1989C144.827 44.8311 144.816 43.4573 144.76 29.3291C144.704 16.986 144.67 13.7731 144.547 13.427C144.121 12.1829 143.448 11.5122 142.237 11.1336C141.452 10.8956 138.132 10.8307 137.179 11.0362Z"
                fill="#7B48E7"
              />
              <path
                d="M121.814 11.2525C120.446 11.5554 119.762 12.0963 119.291 13.2322L119.022 13.8596L118.988 21.0427L118.955 28.2366L118.315 27.6308C116.588 25.9972 114.39 25.2833 111.508 25.4131C109.422 25.5105 107.717 26.0189 105.833 27.1223C104.555 27.8579 103.837 28.4096 102.603 29.6104C100.226 31.9037 98.6446 34.7056 98.0614 37.7023C97.3773 41.1964 98.0278 45.0582 99.7997 48.0548C101.325 50.6295 104.061 53.1715 106.629 54.4264C108.615 55.3892 110.297 55.7246 112.652 55.638C115.097 55.5517 116.913 54.9026 118.371 53.5828C118.831 53.1608 119.089 52.9986 119.123 53.0852C119.156 53.1715 119.224 53.4096 119.302 53.6262C119.37 53.8424 119.605 54.2209 119.818 54.4697C120.839 55.6165 122.992 56.0275 125.863 55.6165C127.433 55.3892 128.308 54.9566 128.801 54.1668C128.992 53.8532 129.216 53.3663 129.295 53.0852C129.485 52.4253 129.575 16.7913 129.407 14.8982C129.205 12.7995 128.566 11.8043 127.108 11.3607C126.311 11.1119 122.768 11.047 121.814 11.2525ZM115.713 35.939C116.656 36.3715 117.071 36.7177 117.743 37.648C118.517 38.6973 118.786 39.5845 118.719 40.8827C118.686 41.7155 118.618 41.9969 118.327 42.5919C117.844 43.587 116.7 44.7445 115.736 45.1988C115.018 45.5451 114.94 45.5558 113.639 45.5558C112.315 45.5558 112.271 45.5451 111.43 45.1555C110.308 44.6364 109.366 43.7384 108.794 42.6242C107.841 40.7635 108.289 38.5351 109.938 36.9233C110.487 36.3823 111.048 36.0253 111.799 35.7657C112.304 35.5817 112.629 35.5495 113.695 35.571C114.872 35.6035 115.052 35.6361 115.713 35.939Z"
                fill="#7B48E7"
              />
              <path
                d="M168.3 11.0796C167.122 11.6637 166.404 13.1241 166.404 14.8766C166.404 15.9908 166.606 16.7264 167.111 17.4404C168.008 18.7386 169.466 18.7927 170.599 17.5919C172.157 15.9259 172.18 12.7022 170.643 11.3608C169.858 10.6793 169.241 10.6036 168.3 11.0796Z"
                fill="#7B48E7"
              />
              <path
                d="M161.088 11.6854C158.655 12.5508 159.058 17.4404 161.694 18.8251C162.457 19.2254 163.365 19.1929 163.971 18.7494C164.531 18.3383 164.969 17.4296 165.036 16.5101C165.238 13.6758 163.051 10.993 161.088 11.6854Z"
                fill="#7B48E7"
              />
              <path
                d="M174.03 15.8503C173.245 16.0774 172.269 16.9104 171.843 17.7001C170.744 19.7555 170.969 22.0164 172.371 23.0333C173.144 23.5959 174.4 23.2821 175.376 22.2869C176.957 20.675 177.271 17.7326 176.015 16.4128C175.522 15.8935 174.692 15.6556 174.03 15.8503Z"
                fill="#7B48E7"
              />
              <path
                d="M156.446 17.6676C155.234 18.241 154.954 20.0476 155.795 21.7676C156.569 23.347 158.117 24.5153 159.418 24.5153C161.436 24.5153 162.154 22.4491 160.965 20.1017C159.967 18.1653 157.825 17.0078 156.446 17.6676Z"
                fill="#7B48E7"
              />
              <path
                d="M167.077 23.9852C164.06 24.3205 161.212 25.359 158.857 26.9709C157.612 27.8256 155.829 29.5671 155.044 30.6921C153.922 32.315 153.193 34.0458 152.711 36.1986C152.487 37.1829 152.453 37.6483 152.453 39.7685C152.453 41.8888 152.476 42.3431 152.7 43.3059C153.474 46.7459 155.391 50.0237 157.825 52.0899C159.698 53.6692 162.176 54.8052 164.946 55.3462C169.713 56.2764 177.227 55.6058 179.974 53.9939C180.726 53.5503 181.6 52.6849 181.836 52.144C182.127 51.4626 182.24 50.6403 182.116 49.9911C181.858 48.6714 180.938 46.9732 180.053 46.1834C178.987 45.2314 177.922 45.1666 175.881 45.9238C174.165 46.5511 172.763 46.8107 170.666 46.8758C168.546 46.9407 167.716 46.8 166.247 46.1076C164.655 45.3614 163.892 44.5823 163.657 43.4789L163.589 43.1327L171.249 43.1004C178.875 43.0571 178.909 43.0571 179.582 42.819C181.612 42.0836 183.013 40.4932 183.507 38.3622C183.765 37.2262 183.742 34.9437 183.462 33.6563C182.879 30.9843 181.275 28.4637 179.077 26.7545C176.206 24.5153 171.686 23.4767 167.077 23.9852ZM171.07 33.2237C172.516 33.6129 173.447 34.8138 173.335 36.166C173.279 36.8259 173.021 37.2262 172.449 37.5509C172.09 37.7564 171.832 37.7671 167.772 37.7997L163.466 37.832L163.545 37.3669C163.668 36.6204 164.15 35.7765 164.857 35.0951C165.597 34.3812 166.752 33.624 167.537 33.3426C168.546 32.9749 169.937 32.9316 171.07 33.2237Z"
                fill="#7B48E7"
              />
              <path
                d="M39.1729 24.2881C37.0531 24.6559 34.7541 25.543 33.016 26.668C27.9917 29.9459 25.5469 34.2946 25.5469 39.974C25.5469 43.7277 26.5562 46.6052 28.8439 49.4397C32.3542 53.7776 37.9057 56.1683 43.356 55.6924C48.2904 55.2703 52.4287 53.0745 55.2549 49.3964C56.6678 47.568 57.4305 46.0535 57.9576 44.0414C59.1238 39.6278 58.3388 34.7815 55.8829 31.2331C53.4156 27.6524 49.0418 24.9264 44.6681 24.2448C43.2774 24.0285 40.5972 24.0501 39.1729 24.2881ZM43.5355 34.4135C44.41 34.6408 45.5539 35.2248 46.2492 35.8091C47.27 36.6745 47.8642 38.1241 47.8642 39.7793C47.8642 42.235 46.8772 43.8036 44.6007 44.896C42.8176 45.7616 41.1914 45.8047 39.4868 45.0259C37.8383 44.2687 36.8739 43.2952 36.4028 41.9211C36.0774 40.9801 36.0664 39.0543 36.369 38.0593C36.8849 36.35 38.4776 34.9437 40.496 34.4135C41.2812 34.2187 42.728 34.208 43.5355 34.4135Z"
                fill="#7B48E7"
              />
              <path
                d="M75.1723 24.2881C72.862 24.6775 70.3722 25.7161 68.3986 27.0791C64.9667 29.459 62.724 32.672 61.8827 36.3608C61.4454 38.3296 61.4116 41.3911 61.8266 43.2626C62.4324 46.0753 63.8901 48.6391 66.1218 50.835C67.894 52.5876 69.8341 53.8207 72.2114 54.7294C76.9777 56.5578 82.9664 55.8869 87.3289 53.0527C89.8635 51.3975 92.1402 48.6932 93.2841 45.9887C95.0112 41.9211 94.854 36.7503 92.8804 32.9208C90.5926 28.4529 85.7926 25.0453 80.6674 24.2448C79.2767 24.0285 76.5965 24.0501 75.1723 24.2881ZM79.5348 34.4135C81.0824 34.803 82.6413 35.9172 83.2357 37.0422C84.0655 38.6325 84.0655 41.0124 83.2357 42.6135C82.5404 43.9225 80.5552 45.2207 78.8059 45.5018C76.7759 45.8372 74.1853 44.7878 73.0414 43.1867C71.9536 41.6615 71.8077 39.0976 72.6938 37.2047C73.2322 36.0905 74.735 34.9545 76.3497 34.4568C77.1349 34.208 78.66 34.1972 79.5348 34.4135Z"
                fill="#7B48E7"
              />
              <path
                d="M197.525 24.3206C196.235 24.4613 194.419 24.8723 193.376 25.2618C192.007 25.7702 191.11 26.3219 190.123 27.2739C188.52 28.8099 187.824 30.6383 187.824 33.3319C187.824 36.5663 188.8 39.2061 190.639 40.9261C191.379 41.6292 191.75 41.867 193.107 42.5702C195.193 43.6414 196.953 44.1931 199.903 44.6908C202.37 45.1018 203.301 45.5343 203.301 46.2593C203.301 46.7137 202.807 47.1788 202.168 47.341C201.383 47.5465 199.735 47.6439 198.837 47.5357C197.761 47.4058 196.471 46.9514 195.002 46.1727C193.6 45.4154 192.535 44.9937 191.682 44.8422C190.841 44.6908 189.955 44.8745 189.462 45.2965C188.677 45.9564 187.096 48.5633 186.804 49.6452C186.636 50.2943 186.725 51.0839 187.039 51.6574C187.342 52.2524 188.015 52.7068 189.899 53.6154C194.026 55.595 197.884 56.1575 202.975 55.5084C205.252 55.2273 207.73 54.4916 209.088 53.7128C210.882 52.6742 212.216 50.7161 212.8 48.2714C213.091 47.0599 213.058 44.2039 212.744 43.003C212.318 41.3156 211.465 39.8441 210.321 38.8166C208.908 37.5291 204.781 36.0797 201.506 35.7117C200.374 35.5821 198.68 35.2141 198.254 35.0085C197.581 34.6734 197.245 34.219 197.245 33.6132C197.245 33.029 197.469 32.7586 198.164 32.4772C198.736 32.2392 200.946 32.0662 201.798 32.1851C202.583 32.2932 205.106 33.0182 206.407 33.4941C207.697 33.9702 208.145 33.9269 208.998 33.2452C210.22 32.2502 211.241 30.6491 211.544 29.2212C211.779 28.0852 211.532 27.3713 210.669 26.7438C209.39 25.8243 205.6 24.6019 203.132 24.3098C201.955 24.1692 198.815 24.18 197.525 24.3206Z"
                fill="#7B48E7"
              />
              <path
                d="M4.2932 0.0777975C3.35116 0.207612 2.64462 0.456422 2.10631 0.835046C1.09699 1.53821 0.569892 3.52869 0.861476 5.47589C1.24278 7.98563 1.3325 9.29459 1.39978 13.2106C1.46707 17.8082 1.35492 20.1341 0.704469 28.6262C0.166161 35.5603 0.0988729 36.8152 0.0203697 40.0389C-0.114207 45.3073 0.424101 49.4938 1.45586 51.3652C1.92688 52.2199 3.12687 53.453 4.09133 54.0695C8.07256 56.6334 11.9641 56.2657 15.4743 52.9879C16.9434 51.6141 17.863 50.1644 18.278 48.5526C18.5023 47.7412 18.5359 47.3302 18.5247 45.4477C18.5247 43.0138 18.3677 41.7263 17.5266 37.3884C16.7752 33.5374 16.6631 32.7801 16.6406 31.6011C16.6294 30.6924 16.6631 30.4651 16.8537 30.1407C16.9883 29.9349 17.2126 29.7404 17.3584 29.6971C17.5154 29.6538 18.3228 29.6212 19.1527 29.6105C24.3676 29.5779 27.9228 28.4097 30.5244 25.8892C32.4983 23.9852 33.8104 21.5404 34.4832 18.5547C34.7638 17.2782 34.7638 13.8381 34.4832 12.4534C34.2141 11.1444 33.687 9.50014 33.2159 8.51572C31.3432 4.58883 26.9245 1.36512 21.9003 0.250883C20.9359 0.0345263 20.5322 0.0237084 12.9286 0.00207272C8.5548 -0.00874513 4.66327 0.0237084 4.2932 0.0777975Z"
                fill="#7B48E7"
              />
              <path
                d="M19.1405 21.8674C19.2513 24.173 18.2872 27.7222 14.4066 27.153C12.4224 26.4548 12.4522 24.9636 11.9848 24.0773C11.1328 22.4847 9.11074 23.1504 7.63538 22.6248C6.35711 22.1695 5.64379 20.3142 5.94837 19.033C6.40397 17.1165 8.65973 15.6961 10.6467 15.2576C17.9558 13.6447 18.5314 15.0389 19.1405 21.8674Z"
                fill="#F5F5F5"
              />
              <path
                d="M10.3399 14.1841C11.891 14.3628 13.3936 12.5263 13.6962 10.0823C13.9987 7.63829 12.9866 5.51219 11.4356 5.33354C9.88454 5.15487 8.38191 6.99131 8.07934 9.43533C7.7768 11.8794 8.7889 14.0055 10.3399 14.1841Z"
                fill="#F5F5F5"
              />
              <path
                d="M16.0338 12.3775C17.5191 12.8439 19.3645 11.325 20.1556 8.98493C20.9467 6.64485 20.3839 4.36971 18.8985 3.90328C17.4132 3.43682 15.5678 4.95575 14.7767 7.29583C13.9856 9.63594 14.5484 11.9111 16.0338 12.3775Z"
                fill="#F5F5F5"
              />
              <path
                d="M20.4395 14.6622C21.5943 15.6768 23.9234 15.0242 25.6417 13.2045C27.36 11.3848 27.8168 9.08716 26.6619 8.07251C25.5072 7.05786 23.178 7.71047 21.4597 9.53016C19.7415 11.3498 19.2847 13.6475 20.4395 14.6622Z"
                fill="#F5F5F5"
              />
              <path
                d="M20.5954 21.3061C21.5928 22.4749 23.9641 22.1052 25.8918 20.4805C27.8195 18.8558 28.5736 16.5913 27.5762 15.4226C26.5789 14.2538 24.2076 14.6235 22.2798 16.2482C20.3521 17.8729 19.598 20.1374 20.5954 21.3061Z"
                fill="#F5F5F5"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_157">
                <rect width="213" height="56" fill="white" />
              </clipPath>
            </defs>
          </svg> 
          <h1 className="justify-center self-center p-2.5 mt-4 text-2xl font-bold border-b-2 border-solid border-b-slate-200">Access Poodles Dashboard</h1>
          <br />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 ">
            <div>
              <label className="text-lg">Email</label>
              <input
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                type="email"
                placeholder="Email"
                required
                value={detail.email}
                onChange={(e) =>
                  setDetail({ ...detail, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-lg">Password</label>
              <input
                type="password"
                className="block  py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                placeholder="Password"
                required
                value={detail.password}
                onChange={(e) =>
                  setDetail({ ...detail, password: e.target.value })
                }
              />
            </div>
            <div >
              <div className="text-right text-sm py-3">
                <Link to="/Signup">Forgot Password?</Link>
              </div>
              <button
                type="submit"
                className="bg-violet-700 text-white font-bold py-1 px-8 rounded w-80"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
 */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (!formErrors.email && !formErrors.password && isSubmit) {
      console.log(detail);
      localStorage.setItem("userDetails", JSON.stringify({ ...detail, role: "ADMIN" }));
      navigate("/Dashboard");
    }
  }, [formErrors, isSubmit, detail, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* const token = JSON.parse(localStorage.getItem("userDetails"));
    if (token.email === detail.email && token.password === detail.password) {
      console.log("user is authenticated");
      navigate("/Dashboard");
    } else {
      console.log("user is not authenticated");
    } */
    setFormErrors(validate(detail));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password must be less than or equal to 12 characters";
    }
    return errors;
  };

  return (
    <div className="flex justify-center items-center px-16 py-12 text-lg font-medium whitespace-nowrap bg-white text-zinc-700 max-md:px-5">
      <div className="flex flex-col items-center px-16 pt-4 pb-12 mt-20 max-w-full bg-white rounded-md shadow-sm w-[846px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-col mb-2 max-w-full w-[550px]">
          <svg
            className="self-center max-w-full aspect-[3.85] w-[213px]"
            width="213"
            height="56"
            viewBox="0 0 213 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_157)">
              <path
                d="M137.179 11.0362C136.416 11.2093 135.496 11.6204 135.205 11.9341C134.768 12.3993 134.42 13.3729 134.319 14.433C134.196 15.8502 134.196 43.0138 134.33 45.4044C134.723 52.6091 136.405 54.7837 142.147 55.5084C145.107 55.8869 147.878 55.822 148.977 55.3569C149.818 54.9892 150.255 54.1453 150.479 52.4253C150.793 49.9048 150.39 47.4165 149.56 46.7459C148.921 46.2267 148.573 46.1186 147.137 46.032C145.579 45.9346 145.298 45.8264 145.007 45.1989C144.827 44.8311 144.816 43.4573 144.76 29.3291C144.704 16.986 144.67 13.7731 144.547 13.427C144.121 12.1829 143.448 11.5122 142.237 11.1336C141.452 10.8956 138.132 10.8307 137.179 11.0362Z"
                fill="#7B48E7"
              />
              <path
                d="M121.814 11.2525C120.446 11.5554 119.762 12.0963 119.291 13.2322L119.022 13.8596L118.988 21.0427L118.955 28.2366L118.315 27.6308C116.588 25.9972 114.39 25.2833 111.508 25.4131C109.422 25.5105 107.717 26.0189 105.833 27.1223C104.555 27.8579 103.837 28.4096 102.603 29.6104C100.226 31.9037 98.6446 34.7056 98.0614 37.7023C97.3773 41.1964 98.0278 45.0582 99.7997 48.0548C101.325 50.6295 104.061 53.1715 106.629 54.4264C108.615 55.3892 110.297 55.7246 112.652 55.638C115.097 55.5517 116.913 54.9026 118.371 53.5828C118.831 53.1608 119.089 52.9986 119.123 53.0852C119.156 53.1715 119.224 53.4096 119.302 53.6262C119.37 53.8424 119.605 54.2209 119.818 54.4697C120.839 55.6165 122.992 56.0275 125.863 55.6165C127.433 55.3892 128.308 54.9566 128.801 54.1668C128.992 53.8532 129.216 53.3663 129.295 53.0852C129.485 52.4253 129.575 16.7913 129.407 14.8982C129.205 12.7995 128.566 11.8043 127.108 11.3607C126.311 11.1119 122.768 11.047 121.814 11.2525ZM115.713 35.939C116.656 36.3715 117.071 36.7177 117.743 37.648C118.517 38.6973 118.786 39.5845 118.719 40.8827C118.686 41.7155 118.618 41.9969 118.327 42.5919C117.844 43.587 116.7 44.7445 115.736 45.1988C115.018 45.5451 114.94 45.5558 113.639 45.5558C112.315 45.5558 112.271 45.5451 111.43 45.1555C110.308 44.6364 109.366 43.7384 108.794 42.6242C107.841 40.7635 108.289 38.5351 109.938 36.9233C110.487 36.3823 111.048 36.0253 111.799 35.7657C112.304 35.5817 112.629 35.5495 113.695 35.571C114.872 35.6035 115.052 35.6361 115.713 35.939Z"
                fill="#7B48E7"
              />
              <path
                d="M168.3 11.0796C167.122 11.6637 166.404 13.1241 166.404 14.8766C166.404 15.9908 166.606 16.7264 167.111 17.4404C168.008 18.7386 169.466 18.7927 170.599 17.5919C172.157 15.9259 172.18 12.7022 170.643 11.3608C169.858 10.6793 169.241 10.6036 168.3 11.0796Z"
                fill="#7B48E7"
              />
              <path
                d="M161.088 11.6854C158.655 12.5508 159.058 17.4404 161.694 18.8251C162.457 19.2254 163.365 19.1929 163.971 18.7494C164.531 18.3383 164.969 17.4296 165.036 16.5101C165.238 13.6758 163.051 10.993 161.088 11.6854Z"
                fill="#7B48E7"
              />
              <path
                d="M174.03 15.8503C173.245 16.0774 172.269 16.9104 171.843 17.7001C170.744 19.7555 170.969 22.0164 172.371 23.0333C173.144 23.5959 174.4 23.2821 175.376 22.2869C176.957 20.675 177.271 17.7326 176.015 16.4128C175.522 15.8935 174.692 15.6556 174.03 15.8503Z"
                fill="#7B48E7"
              />
              <path
                d="M156.446 17.6676C155.234 18.241 154.954 20.0476 155.795 21.7676C156.569 23.347 158.117 24.5153 159.418 24.5153C161.436 24.5153 162.154 22.4491 160.965 20.1017C159.967 18.1653 157.825 17.0078 156.446 17.6676Z"
                fill="#7B48E7"
              />
              <path
                d="M167.077 23.9852C164.06 24.3205 161.212 25.359 158.857 26.9709C157.612 27.8256 155.829 29.5671 155.044 30.6921C153.922 32.315 153.193 34.0458 152.711 36.1986C152.487 37.1829 152.453 37.6483 152.453 39.7685C152.453 41.8888 152.476 42.3431 152.7 43.3059C153.474 46.7459 155.391 50.0237 157.825 52.0899C159.698 53.6692 162.176 54.8052 164.946 55.3462C169.713 56.2764 177.227 55.6058 179.974 53.9939C180.726 53.5503 181.6 52.6849 181.836 52.144C182.127 51.4626 182.24 50.6403 182.116 49.9911C181.858 48.6714 180.938 46.9732 180.053 46.1834C178.987 45.2314 177.922 45.1666 175.881 45.9238C174.165 46.5511 172.763 46.8107 170.666 46.8758C168.546 46.9407 167.716 46.8 166.247 46.1076C164.655 45.3614 163.892 44.5823 163.657 43.4789L163.589 43.1327L171.249 43.1004C178.875 43.0571 178.909 43.0571 179.582 42.819C181.612 42.0836 183.013 40.4932 183.507 38.3622C183.765 37.2262 183.742 34.9437 183.462 33.6563C182.879 30.9843 181.275 28.4637 179.077 26.7545C176.206 24.5153 171.686 23.4767 167.077 23.9852ZM171.07 33.2237C172.516 33.6129 173.447 34.8138 173.335 36.166C173.279 36.8259 173.021 37.2262 172.449 37.5509C172.09 37.7564 171.832 37.7671 167.772 37.7997L163.466 37.832L163.545 37.3669C163.668 36.6204 164.15 35.7765 164.857 35.0951C165.597 34.3812 166.752 33.624 167.537 33.3426C168.546 32.9749 169.937 32.9316 171.07 33.2237Z"
                fill="#7B48E7"
              />
              <path
                d="M39.1729 24.2881C37.0531 24.6559 34.7541 25.543 33.016 26.668C27.9917 29.9459 25.5469 34.2946 25.5469 39.974C25.5469 43.7277 26.5562 46.6052 28.8439 49.4397C32.3542 53.7776 37.9057 56.1683 43.356 55.6924C48.2904 55.2703 52.4287 53.0745 55.2549 49.3964C56.6678 47.568 57.4305 46.0535 57.9576 44.0414C59.1238 39.6278 58.3388 34.7815 55.8829 31.2331C53.4156 27.6524 49.0418 24.9264 44.6681 24.2448C43.2774 24.0285 40.5972 24.0501 39.1729 24.2881ZM43.5355 34.4135C44.41 34.6408 45.5539 35.2248 46.2492 35.8091C47.27 36.6745 47.8642 38.1241 47.8642 39.7793C47.8642 42.235 46.8772 43.8036 44.6007 44.896C42.8176 45.7616 41.1914 45.8047 39.4868 45.0259C37.8383 44.2687 36.8739 43.2952 36.4028 41.9211C36.0774 40.9801 36.0664 39.0543 36.369 38.0593C36.8849 36.35 38.4776 34.9437 40.496 34.4135C41.2812 34.2187 42.728 34.208 43.5355 34.4135Z"
                fill="#7B48E7"
              />
              <path
                d="M75.1723 24.2881C72.862 24.6775 70.3722 25.7161 68.3986 27.0791C64.9667 29.459 62.724 32.672 61.8827 36.3608C61.4454 38.3296 61.4116 41.3911 61.8266 43.2626C62.4324 46.0753 63.8901 48.6391 66.1218 50.835C67.894 52.5876 69.8341 53.8207 72.2114 54.7294C76.9777 56.5578 82.9664 55.8869 87.3289 53.0527C89.8635 51.3975 92.1402 48.6932 93.2841 45.9887C95.0112 41.9211 94.854 36.7503 92.8804 32.9208C90.5926 28.4529 85.7926 25.0453 80.6674 24.2448C79.2767 24.0285 76.5965 24.0501 75.1723 24.2881ZM79.5348 34.4135C81.0824 34.803 82.6413 35.9172 83.2357 37.0422C84.0655 38.6325 84.0655 41.0124 83.2357 42.6135C82.5404 43.9225 80.5552 45.2207 78.8059 45.5018C76.7759 45.8372 74.1853 44.7878 73.0414 43.1867C71.9536 41.6615 71.8077 39.0976 72.6938 37.2047C73.2322 36.0905 74.735 34.9545 76.3497 34.4568C77.1349 34.208 78.66 34.1972 79.5348 34.4135Z"
                fill="#7B48E7"
              />
              <path
                d="M197.525 24.3206C196.235 24.4613 194.419 24.8723 193.376 25.2618C192.007 25.7702 191.11 26.3219 190.123 27.2739C188.52 28.8099 187.824 30.6383 187.824 33.3319C187.824 36.5663 188.8 39.2061 190.639 40.9261C191.379 41.6292 191.75 41.867 193.107 42.5702C195.193 43.6414 196.953 44.1931 199.903 44.6908C202.37 45.1018 203.301 45.5343 203.301 46.2593C203.301 46.7137 202.807 47.1788 202.168 47.341C201.383 47.5465 199.735 47.6439 198.837 47.5357C197.761 47.4058 196.471 46.9514 195.002 46.1727C193.6 45.4154 192.535 44.9937 191.682 44.8422C190.841 44.6908 189.955 44.8745 189.462 45.2965C188.677 45.9564 187.096 48.5633 186.804 49.6452C186.636 50.2943 186.725 51.0839 187.039 51.6574C187.342 52.2524 188.015 52.7068 189.899 53.6154C194.026 55.595 197.884 56.1575 202.975 55.5084C205.252 55.2273 207.73 54.4916 209.088 53.7128C210.882 52.6742 212.216 50.7161 212.8 48.2714C213.091 47.0599 213.058 44.2039 212.744 43.003C212.318 41.3156 211.465 39.8441 210.321 38.8166C208.908 37.5291 204.781 36.0797 201.506 35.7117C200.374 35.5821 198.68 35.2141 198.254 35.0085C197.581 34.6734 197.245 34.219 197.245 33.6132C197.245 33.029 197.469 32.7586 198.164 32.4772C198.736 32.2392 200.946 32.0662 201.798 32.1851C202.583 32.2932 205.106 33.0182 206.407 33.4941C207.697 33.9702 208.145 33.9269 208.998 33.2452C210.22 32.2502 211.241 30.6491 211.544 29.2212C211.779 28.0852 211.532 27.3713 210.669 26.7438C209.39 25.8243 205.6 24.6019 203.132 24.3098C201.955 24.1692 198.815 24.18 197.525 24.3206Z"
                fill="#7B48E7"
              />
              <path
                d="M4.2932 0.0777975C3.35116 0.207612 2.64462 0.456422 2.10631 0.835046C1.09699 1.53821 0.569892 3.52869 0.861476 5.47589C1.24278 7.98563 1.3325 9.29459 1.39978 13.2106C1.46707 17.8082 1.35492 20.1341 0.704469 28.6262C0.166161 35.5603 0.0988729 36.8152 0.0203697 40.0389C-0.114207 45.3073 0.424101 49.4938 1.45586 51.3652C1.92688 52.2199 3.12687 53.453 4.09133 54.0695C8.07256 56.6334 11.9641 56.2657 15.4743 52.9879C16.9434 51.6141 17.863 50.1644 18.278 48.5526C18.5023 47.7412 18.5359 47.3302 18.5247 45.4477C18.5247 43.0138 18.3677 41.7263 17.5266 37.3884C16.7752 33.5374 16.6631 32.7801 16.6406 31.6011C16.6294 30.6924 16.6631 30.4651 16.8537 30.1407C16.9883 29.9349 17.2126 29.7404 17.3584 29.6971C17.5154 29.6538 18.3228 29.6212 19.1527 29.6105C24.3676 29.5779 27.9228 28.4097 30.5244 25.8892C32.4983 23.9852 33.8104 21.5404 34.4832 18.5547C34.7638 17.2782 34.7638 13.8381 34.4832 12.4534C34.2141 11.1444 33.687 9.50014 33.2159 8.51572C31.3432 4.58883 26.9245 1.36512 21.9003 0.250883C20.9359 0.0345263 20.5322 0.0237084 12.9286 0.00207272C8.5548 -0.00874513 4.66327 0.0237084 4.2932 0.0777975Z"
                fill="#7B48E7"
              />
              <path
                d="M19.1405 21.8674C19.2513 24.173 18.2872 27.7222 14.4066 27.153C12.4224 26.4548 12.4522 24.9636 11.9848 24.0773C11.1328 22.4847 9.11074 23.1504 7.63538 22.6248C6.35711 22.1695 5.64379 20.3142 5.94837 19.033C6.40397 17.1165 8.65973 15.6961 10.6467 15.2576C17.9558 13.6447 18.5314 15.0389 19.1405 21.8674Z"
                fill="#F5F5F5"
              />
              <path
                d="M10.3399 14.1841C11.891 14.3628 13.3936 12.5263 13.6962 10.0823C13.9987 7.63829 12.9866 5.51219 11.4356 5.33354C9.88454 5.15487 8.38191 6.99131 8.07934 9.43533C7.7768 11.8794 8.7889 14.0055 10.3399 14.1841Z"
                fill="#F5F5F5"
              />
              <path
                d="M16.0338 12.3775C17.5191 12.8439 19.3645 11.325 20.1556 8.98493C20.9467 6.64485 20.3839 4.36971 18.8985 3.90328C17.4132 3.43682 15.5678 4.95575 14.7767 7.29583C13.9856 9.63594 14.5484 11.9111 16.0338 12.3775Z"
                fill="#F5F5F5"
              />
              <path
                d="M20.4395 14.6622C21.5943 15.6768 23.9234 15.0242 25.6417 13.2045C27.36 11.3848 27.8168 9.08716 26.6619 8.07251C25.5072 7.05786 23.178 7.71047 21.4597 9.53016C19.7415 11.3498 19.2847 13.6475 20.4395 14.6622Z"
                fill="#F5F5F5"
              />
              <path
                d="M20.5954 21.3061C21.5928 22.4749 23.9641 22.1052 25.8918 20.4805C27.8195 18.8558 28.5736 16.5913 27.5762 15.4226C26.5789 14.2538 24.2076 14.6235 22.2798 16.2482C20.3521 17.8729 19.598 20.1374 20.5954 21.3061Z"
                fill="#F5F5F5"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_157">
                <rect width="213" height="56" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="justify-center self-center p-2.5 mt-4 text-2xl font-bold border-b-2 border-solid border-b-slate-200">
            Access Poodles Dashboard
          </h1>
          <br />
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5 "
          >
            <div>
              <label className="text-lg">Email</label>
              <input
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={detail.email}
                onChange={handleChange}
              />
            </div>
            <p className="text-rose-500">{formErrors.email}</p>
            <div>
              <label className="text-lg">Password</label>
              <input
                type="password"
                name="password"
                className="block  py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent  border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Password"
                required
                value={detail.password}
                onChange={handleChange}
              />
            </div>
            <p className="text-rose-500">{formErrors.password}</p>
            <div>
              <div className="text-right text-sm py-3">
                <Link to="/Signup">Forgot Password?</Link>
              </div>
              <button
                type="submit"
                className="bg-violet-700 text-white font-bold py-1 px-8 rounded w-80"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
