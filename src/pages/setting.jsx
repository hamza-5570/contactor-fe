import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";

const payment = [
  {
    invoice: "Facture#1",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
  {
    invoice: "Facture#1",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
  {
    invoice: "Facture#1",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
  {
    invoice: "Facture#1",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
  {
    invoice: "Facture#1",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
];

const beneficiary = [
  {
    cross: "Croix-Rouge",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
  {
    cross: "Croix-Rouge",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
  {
    cross: "Croix-Rouge",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
  {
    cross: "Croix-Rouge",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
  {
    cross: "Croix-Rouge",
    amount: "$2000.00",
    date: "Nov 04, 2023",
    btn: "succès",
    download: "télécharger",
  },
];

export default function Setting() {
  return (
    <>
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-2 2xl:col-span-2 ">
          <Sidebar />
        </div>
        <div className="lg:col-span-10 2xl:col-span-10 h-[100vh] overflow-y-scroll">
          <Navbar />
          <div className="bg-[#f0f4f8]">
            <div className="w-[95%] mx-auto py-10">
              <div className="hidden md:flex justify-between">
                <p className="font-inter font-[700] text-[25px] text-black">
                  {/* Settings */}
                  Paramètres
                </p>
                <div className="flex gap-4">
                  <button className="flex gap-2 font-inter font-[500] text-[16px] text-[#8D6AFF] border-[1px] border-[#8D6AFF] py-2 px-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-[3px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                    Editer
                  </button>

                  <button className="flex gap-2 font-inter font-[500]  text-[16px] text-[#8D6AFF] border-[1px] border-[#8D6AFF] py-2 px-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mt-[2px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                    Notifier
                  </button>

                  <button className="flex gap-2 font-inter font-[500] text-[16px] bg-white text-black border-[1px] border-black py-2 px-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-[2px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    {/* Add a Comment */}
                    ajouter un
                  </button>

                  <button className="flex gap-2 font-inter font-[500]  text-[16px] text-white  bg-[#8D6AFF] py-2 px-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mt-[2px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                    {/* Cash in */}
                    Espèces A
                  </button>
                </div>
              </div>

              <div className="block md:hidden justify-between">
                <p className="font-inter font-[700] text-[25px] text-black">
                  {/* Settings */}
                  Paramètres
                </p>
                <div className=" gap-2">
                  <div className="mt-5 flex gap-3">
                    <button className="flex gap-2 font-inter font-[500] text-[10px] md:text-[16px] text-[#8D6AFF] border-[1px] border-[#8D6AFF] py-2 px-5 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-2 md:w-4 h-2 md:h-4 mt-[3px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                      {/* Edit */}
                      Editer
                    </button>

                    <button className="flex gap-2 font-inter font-[500]  text-[10px] md:text-[16px] text-[#8D6AFF] border-[1px] border-[#8D6AFF] py-2 px-5 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 md:w-4 h-3 md:h-4 mt-[2px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                      </svg>
                      {/* Notify */}
                      Notifier
                    </button>

                    <button className="flex gap-2 font-inter font-[500]  text-[10px] md:text-[16px] text-white  bg-[#8D6AFF] py-2 px-5 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 md:w-4 h-3 md:h-4 mt-[2px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      {/* Cash */}
                      Espèces A
                    </button>
                  </div>

                  <button className="mt-5 flex gap-2 font-inter font-[500] text-[12px] md:text-[16px] bg-white text-black border-[1px] border-black py-2 px-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-[2px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    {/* Add a Comment */}
                    ajouter un
                  </button>
                </div>
              </div>

              <div className="bg-white p-7 rounded-xl shadow-md mt-10">
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <p className="font-[400] text-[10px] text-gray-500">
                      {/* First Name */}
                      prénom
                    </p>
                    <input
                      type="text"
                      className="mt-1 py-1 border-[1px] border-gray-500 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <p className="font-[400] text-[10px] text-gray-500">nom</p>
                    <input
                      type="text"
                      className="mt-1 py-1 border-[1px] border-gray-500 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <p className="font-[400] text-[10px] text-gray-500">
                      {/* Date of Birth */}
                      date de naissance
                    </p>
                    <input
                      type="date"
                      className="mt-1 py-[2px] border-[1px] border-gray-500 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <p className="font-[400] text-[10px] text-gray-500">
                      {/* Email */}
                      Courriel
                    </p>
                    <input
                      type="email"
                      className="mt-1 py-1 border-[1px] border-gray-500 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <p className="font-[400] text-[10px] text-gray-500">
                      {/* Address */}
                      adresse
                    </p>
                    <input
                      type="text"
                      className="mt-1 py-1 border-[1px] border-gray-500 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <p className="font-[400] text-[10px] text-gray-500">
                      un profession
                    </p>
                    <input
                      type="text"
                      className="mt-1 py-1 border-[1px] border-gray-500 rounded-md w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="font-inter font-[700] text-[18px] md:text-[25px] text-black">
                  {/* History of Payment */}
                  Historique de paiement
                </p>

                <div>
                  <div className=" bg-[#BFD5FF] hidden md:grid  grid-cols-12 px-5 py-3 rounded-t-lg mt-5">
                    <div className="col-span-3 text-center">
                      <p className="font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        {/* Payment Invoice */}
                        paiement est
                      </p>
                    </div>
                    <div className="col-span-2  text-center">
                      <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        {/* Amount */}
                        quantité
                      </p>
                    </div>
                    <div className="col-span-3 text-center">
                      <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        Date
                      </p>
                    </div>
                    <div className="col-span-2 text-center ">
                      <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        {/* Status */}
                        statut
                      </p>
                    </div>
                    <div className="col-span-2 text-center ">
                      <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        {/* Download */}
                        télécharger
                      </p>
                    </div>
                  </div>
                  {payment.map((item) => (
                    <div className="hidden md:grid grid-cols-12 px-5 py-3 border-[1px] border-gray-300 bg-white">
                      <div className="col-span-3  flex gap-2 justify-center">
                        <input type="checkbox" />
                        <p className="self-center font-inter font-[500] text-[14px] text-[#2E3646]">
                          {item.invoice}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-center font-inter font-[500] text-[14px] text-[#2E3646]">
                          {item.amount}
                        </p>
                      </div>
                      <div className="col-span-3">
                        <p className="text-center font-inter font-[500] text-[14px] text-[#2E3646]">
                          {item.date}
                        </p>
                      </div>
                      <div className="col-span-2 ">
                        <button className="font-inter font-[400] text-[13px] text-[#5E83F5] border-[1px] border-[#5E83F5] rounded-full bg-[#e5ebf9] py-1 px-5 block mx-auto">
                          {item.btn}
                        </button>
                      </div>
                      <div className="col-span-2 ">
                        <p className="cursor-pointer text-center font-inter font-[500] text-[14px] text-[#5E83F5]">
                          {item.download}
                        </p>
                      </div>
                    </div>
                  ))}

                  {payment.map((item) => (
                    <div className=" grid md:hidden mt-5   py-5 border-[1px] border-gray-300 bg-white rounded-lg">
                      <div className=" flex gap-2 justify-center">
                        <input type="checkbox" className="mt-1" />
                        <p className="self-center font-inter font-[500] text-[16px] text-[#2E3646]">
                          {item.invoice}
                        </p>
                      </div>
                      <div className="mt-3">
                        <p className="text-center font-inter font-[500] text-[16px] text-[#2E3646]">
                          {item.amount}
                        </p>
                      </div>
                      <div className="mt-3">
                        <p className="text-center font-inter font-[500] text-[16px] text-[#2E3646]">
                          {item.date}
                        </p>
                      </div>
                      <div className="mt-3">
                        <button className="font-inter font-[400] text-[16px] text-[#5E83F5] border-[1px] border-[#5E83F5] rounded-full bg-[#e5ebf9] py-1 px-5 block mx-auto">
                          {item.btn}
                        </button>
                      </div>
                      <div className="mt-3">
                        <p className="cursor-pointer text-center font-inter font-[500] text-[16px] text-[#5E83F5]">
                          {item.download}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="font-inter font-[700] text-[18px] md:text-[25px] text-black">
                  {/* History of Beneficiaries */}
                  Historique des bénéficiaires
                </p>

                <div>
                  <div className=" bg-[#BFD5FF] hidden md:grid  grid-cols-12 px-5 py-3 rounded-t-lg mt-5">
                    <div className="col-span-3 text-center">
                      <p className="font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        {/* Beneficiary */}
                        Bénéficiaire
                      </p>
                    </div>
                    <div className="col-span-2  text-center">
                      <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        Valeur
                      </p>
                    </div>
                    <div className="col-span-3 text-center">
                      <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        Date
                      </p>
                    </div>
                    <div className="col-span-2 text-center ">
                      <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        {/* Status */}
                        statut
                      </p>
                    </div>
                    <div className="col-span-2 text-center ">
                      <p className=" font-inter font-[500] text-[12px] text-[#5F6D7E]">
                        {/* Download */}
                        télécharger
                      </p>
                    </div>
                  </div>
                  {beneficiary.map((item) => (
                    <div className="hidden md:grid grid-cols-12 px-5 py-3 border-[1px] border-gray-300 bg-white">
                      <div className="col-span-3  flex gap-2 justify-center">
                        <input type="checkbox" />
                        <p className="self-center font-inter font-[500] text-[14px] text-[#5E83F5] underline">
                          {item.cross}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-center font-inter font-[500] text-[14px] text-[#2E3646]">
                          {item.amount}
                        </p>
                      </div>
                      <div className="col-span-3">
                        <p className="text-center font-inter font-[500] text-[14px] text-[#2E3646]">
                          {item.date}
                        </p>
                      </div>
                      <div className="col-span-2 ">
                        <button className="font-inter font-[400] text-[13px] text-[#5E83F5] border-[1px] border-[#5E83F5] rounded-full bg-[#e5ebf9] py-1 px-5 block mx-auto">
                          {item.btn}
                        </button>
                      </div>
                      <div className="col-span-2 ">
                        <p className="cursor-pointer text-center font-inter font-[500] text-[14px] text-[#5E83F5]">
                          {item.download}
                        </p>
                      </div>
                    </div>
                  ))}

                  {beneficiary.map((item) => (
                    <div className=" grid md:hidden mt-5   py-5 border-[1px] border-gray-300 bg-white rounded-lg">
                      <div className=" flex gap-2 justify-center">
                        <input type="checkbox" className="mt-1" />
                        <p className="self-center font-inter font-[500] text-[16px] text-[#5E83F5] underline">
                          {item.cross}
                        </p>
                      </div>
                      <div className="mt-3">
                        <p className="text-center font-inter font-[500] text-[16px] text-[#2E3646]">
                          {item.amount}
                        </p>
                      </div>
                      <div className="mt-3">
                        <p className="text-center font-inter font-[500] text-[16px] text-[#2E3646]">
                          {item.date}
                        </p>
                      </div>
                      <div className="mt-3">
                        <button className="font-inter font-[400] text-[16px] text-[#5E83F5] border-[1px] border-[#5E83F5] rounded-full bg-[#e5ebf9] py-1 px-5 block mx-auto">
                          {item.btn}
                        </button>
                      </div>
                      <div className="mt-3">
                        <p className="cursor-pointer text-center font-inter font-[500] text-[16px] text-[#5E83F5]">
                          {item.download}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
