import React, { useState } from "react";

const Invoice = ({ companydata, customerData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full text-center bg-black ">
        <button
          className="bg-green-500 text-white p-2 m-4 rounded-md"
          onClick={togglePopup}
        >
          Open Pop-up
        </button>
      </nav>
      <div className="flex justify-center pt-12  ">
        {isOpen && (
          <div className="  w-[700px] max-h-[400px] overflow-y-auto p-4 bg-slate-100 relative">
            <span
              onClick={togglePopup}
              className="absolute top-0 h-6 w-6 right-4  text-4xl  p-2 rounded-[50%] text-black "
            >
              x
            </span>

            <div className="flex justify-between m-6">
              <div className="flex flex-col">
                <div>
                  <h2 className="font-medium ">{companydata.companyName}</h2>
                </div>
                <div>
                  <h3>{companydata.address}</h3>
                </div>
                <div>
                  <h4>{companydata.zipcode}</h4>
                </div>
                <div>
                  <p>{companydata.Phone}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between w-2/4 ">
                <div className="flex justify-end flex-end">
                  <h2 className="text-blue-500 font-bold text-4xl pl-[80px] ">
                    INVOICE
                  </h2>
                </div>

                <div></div>
              </div>
            </div>
            <div className="flex justify-between  pt-8 gap-3">
              <div className="flex flex-col w-full ">
                <h2 className="bg-blue-400 w-full pl-4 font-semibold text-white">
                  BILL TO
                </h2>
                <form>
                  <p className="m-2 font-semibold">
                    Name:
                    <span className="pl-4 font-normal	 ">
                      {customerData[0].customerdetails.name}
                    </span>
                  </p>
                  <p className="m-2 font-semibold">
                    Company Name:
                    <span className="pl-4 font-normal		 ">
                      {customerData[0].customerdetails.companyName}
                    </span>
                  </p>
                  <p className="m-2 font-semibold">
                    Street Address:
                    <span className="pl-4 font-normal	">
                      {customerData[0].customerdetails.address}
                    </span>
                  </p>
                  <p className="m-2 font-semibold">
                    City, ST, ZIP:
                    <span className="pl-4 font-normal	">
                      {customerData[0].customerdetails.zipcode}
                    </span>
                  </p>
                  <p className="m-2 font-semibold">
                    Phone:
                    <span className="pl-4 font-normal	">
                      {customerData[0].customerdetails.phone}
                    </span>
                  </p>
                  <p className="m-2 font-semibold">
                    Email Address:
                    <span className="pl-4 font-normal	">
                      {customerData[0].customerdetails.email}
                    </span>
                  </p>
                </form>
              </div>
              <div>
                <table className="flex flex-col gap-2">
                  <tr className="bg-blue-400 text-white">
                    <th className="px-12">INVOICE </th>
                    <th className="px-12">DATE</th>
                  </tr>
                  <tr className="flex justify-around">
                    <td>{customerData[0].invocedetails.number}</td>
                    <td>{customerData[0].invocedetails.date}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="mt-6">
              <table className="w-full">
                <tr className="text-white bg-blue-400 w-full">
                  <th className="w-2/4">DESCRIPTION</th>
                  <th>QTY</th>
                  <th>UNIT PRICE</th>
                  <th>AMOUNT</th>
                </tr>
                <tr className="w-full border border-b-1 border-dashed border-black border-t-0 border-l-0 border-r-0">
                  <td className="w-2/4">
                    {customerData[0].invocedetails.description[0].name}
                  </td>
                  <td className="border border-l-1 border-r-1 border-black border-dashed border-t-0 text-center">
                    {customerData[0].invocedetails.description[0].qty}
                  </td>
                  <td className="text-center">
                    {customerData[0].invocedetails.description[0].price}
                  </td>
                  <td className="text-center border border-black border-l-1 border-dashed border-t-0 border-r-0">
                    {customerData[0].invocedetails.description[0].amount}
                  </td>
                </tr>
                <tr className="w-full border border-b-1 border-dashed border-black border-t-0 border-l-0 border-r-0">
                  <td className="w-2/4">
                    {customerData[0].invocedetails.description[1].Employee}
                  </td>
                  <td className="border border-l-1 border-r-1 border-black border-dashed border-t-0 text-center">
                    {customerData[0].invocedetails.description[1].qty}
                  </td>
                  <td className="text-center">
                    {" "}
                    {customerData[0].invocedetails.description[1].price}
                  </td>
                  <td className="text-center border border-black border-l-1 border-dashed border-t-0 border-r-0">
                    {customerData[0].invocedetails.description[1].amount}
                  </td>
                </tr>
                <tr className="w-full border border-b-1 border-dashed border-black border-t-0 border-l-0 border-r-0">
                  <td className="w-2/4">
                    {customerData[0].invocedetails.description[2].client}
                  </td>
                  <td className="border border-l-1 border-r-1 border-black border-dashed border-t-0 text-center"></td>
                  <td className="text-center">
                    {" "}
                    {customerData[0].invocedetails.description[2].price}
                  </td>
                  <td className="text-center border border-black border-l-1 border-dashed border-t-0 border-r-0">
                    {customerData[0].invocedetails.description[2].amount}
                  </td>
                </tr>

                <tr className="w-full border border-b-1 h-6 border-dashed border-black border-t-0 border-l-0 border-r-0">
                  <td className="w-2/4"></td>
                  <td className="border border-l-1 border-r-1 border-black border-dashed border-t-0 text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center border border-black border-l-1 border-dashed border-t-0 border-r-0">
                    -
                  </td>
                </tr>
                <tr className="w-full border border-b-1 h-6 border-dashed border-black border-t-0 border-l-0 border-r-0">
                  <td className="w-2/4"></td>
                  <td className="border border-l-1 border-r-1 border-black border-dashed border-t-0 text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center border border-black border-l-1 border-dashed border-t-0 border-r-0">
                    -
                  </td>
                </tr>
                <tr className="w-full border border-b-1 h-6 border-dashed border-black border-t-0 border-l-0 border-r-0">
                  <td className="w-2/4"></td>
                  <td className="border border-l-1 border-r-1 border-black border-dashed border-t-0 text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center border border-black border-l-1 border-dashed border-t-0 border-r-0">
                    -
                  </td>
                </tr>
                <tr className="w-full border border-b-1 h-6 border-dashed border-black border-t-0 border-l-0 border-r-0">
                  <td className="w-2/4"></td>
                  <td className="border border-l-1 border-r-1 border-black border-dashed border-t-0 text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center border border-black border-l-1 border-dashed border-t-0 border-r-0">
                    -
                  </td>
                </tr>
                <tr className="w-full border border-b-1 h-6  border-blue-500 border-t-0 border-l-0 border-r-0">
                  <td className="w-2/4"></td>
                  <td className="border border-l-1 border-r-1 border-black border-dashed border-t-0 text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center border border-black border-l-1 border-dashed border-t-0 border-r-0">
                    -
                  </td>
                </tr>
              </table>
            </div>
            <div className="flex justify-between w-full">
              <div className="w-2/4 bg-blue-200 text-blue-500 h-8 text-center">
                Thank you for your business!
              </div>
              <div className="w-2/4">
                <table className="flex  flex-col bg-slate-200">
                  <tr className="flex justify-between pr-3">
                    <th>SUBTOTAL</th>
                    <td>525</td>
                  </tr>
                  <tr className="flex justify-between pr-3">
                    <th>TAX RATE </th>
                    <td>4.250%</td>
                  </tr>
                  <tr className="flex justify-between pr-3">
                    <th>TAX</th>
                    <td>22.31</td>
                  </tr>
                  <tr className="flex justify-between pr-3">
                    <th>TOTAL</th>
                    <td>547.31</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="flex flex-col text-center mx-auto mt-10">
              <h2>
                If you have any questions about this invoice, please contact
              </h2>
              <h2 className="font-semibold">
                VlackSolutionspvtLtd, 7732037931, vlack@gmail.com
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Invoice;
