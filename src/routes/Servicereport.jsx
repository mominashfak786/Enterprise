import React from 'react'

const Servicereport = () => {
  return (
      <>
      <div className="overflow-x-auto">
      <table className="table table-auto mx-auto mt-6 ">
        <thead>
          <tr>
            <th className="border-2  border-black px-4 py-2">Type of Services</th>
            <th className="border-2  border-black px-4 py-2">Allotted In Plan</th>
            <th className="border-2  border-black px-4 py-2">Used</th>
            <th className="border-2  border-black px-4 py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 text-center   border-black px-4 py-2">Electrical &amp; Electronics Maintenance</td>
            <td className="border-2 text-center  border-black px-4 py-2 bg-blue-600">120</td>
            <td className="border-2   text-center border-black px-4 py-2 bg-red-600">60</td>
            <td className="border-2  text-center  border-black px-4 py-2 bg-green-400">60</td>
          </tr>
          <tr>
            <td className="border-2 text-center  border-black px-4 py-2">Plumbing Maintenance</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">120</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-red-600">60</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">60</td>
          </tr>
          <tr>
            <td className="border-2  text-center border-black px-4 py-2">Computer System Maintenance (Hardware &amp; Software)</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">120</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-red-600">60</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">60</td>
          </tr>
          <tr>
            <td className="border-2  text-center border-black px-4 py-2">Carpenter Services</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">90</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-red-600">40</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">50</td>
          </tr>
          <tr>
            <td className="border-2  text-center border-black px-4 py-2">Cleaning Solutions</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">120</td>
            <td className="border-2 text-center  border-black px-4 py-2 bg-red-600">50</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">70</td>
          </tr>
          <tr>
            <td className="border-2 text-center  border-black px-4 py-2">Gardening Services </td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">120</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-red-600">40</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">80</td>
          </tr>
        </tbody>
      </table>
    </div>
      </>
  )
}

export default Servicereport