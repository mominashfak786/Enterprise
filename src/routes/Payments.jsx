import React from "react";
import "../styles/dashboard.css";
const Refrral = () => {
  const months = [
    "--Select Month--",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div class="custom-height flex justify-center items-center">
        <div class="w-90 border-2  border-gray-900  p-6 h-80 flex flex-col shadow-lg justify-center items-center">
          <h2 class="text-2xl font-bold mb-4">Billing Details</h2>
          <div class="bg-gray-100  rounded-lg mb-4 mt-3 p-6">
            <div className="flex">
              <p>Subscription Cost :- </p>
              <p className="ml-4"> SGD$</p>
            </div>
            <div className="flex">
              <p>Expires On :- </p>
              <p className="ml-4"> xx/xx/xxxx</p>
            </div>
          </div>
          <div className="select is-rounded has-fixed-size is-primary is-special">
          <div className="flex items-center ">
              <p>Download Invoice Select Month     :  -     </p>
              <p className="ml-4"> 
            
            <select className="is-fullwidth border-gray-900 rounded-lg">
        {months.map((month, index) => (
          <option key={index} value={index + 1}>
            {month}
          </option>
        ))}
                </select></p>
                </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default Refrral;
