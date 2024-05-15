import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import BenefitTable from "../component/benefit-table";
import { useNavigate } from "react-router-dom";
import axiosClient from "../connection";
import DateInput from "../component/dateInputWithClear";

export default function Landing() {
  // for contactor
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // for payment
  const [data2, setData2] = useState([]);
  const [filteredData2, setFilteredData2] = useState([]);
  const [searchTerm2, setSearchTerm2] = useState("");
  const [fromDate2, setFromDate2] = useState("");
  const [toDate2, setToDate2] = useState("");
  useEffect(() => {
    axiosClient()
      .get("/corporate/getAllCorporate")
      .then(async (res) => {
        await setData(res.data.data);
        await setFilteredData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosClient()
      .get("/pagos/getAllPayment")
      .then(async (res) => {
        await setData2(res.data.data);
        await setFilteredData2(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const nameMatches = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const creationDate = new Date(item.createdAt); // Converts UTC date to local time
      const startDate = fromDate
        ? new Date(fromDate + "T00:00:00Z")
        : new Date("1970-01-01T00:00:00Z");
      const endDate = toDate ? new Date(toDate + "T23:59:59Z") : new Date();
      const dateMatches = creationDate >= startDate && creationDate <= endDate;
      return nameMatches && dateMatches;
    });
    setFilteredData(filtered);
  }, [searchTerm, fromDate, toDate, data]);

  useEffect(() => {
    const filtered = data2.filter((item) => {
      const nameMatches = item.corporate.name
        .toLowerCase()
        .includes(searchTerm2.toLowerCase());
      const creationDate = new Date(item.createdAt); // Converts UTC date to local time
      const startDate = fromDate2
        ? new Date(fromDate2 + "T00:00:00Z")
        : new Date("1970-01-01T00:00:00Z");
      const endDate = toDate2 ? new Date(toDate2 + "T23:59:59Z") : new Date();
      const dateMatches = creationDate >= startDate && creationDate <= endDate;
      return nameMatches && dateMatches;
    });
    setFilteredData2(filtered);
  }, [searchTerm2, fromDate2, toDate2, data2]);

  const column = [
    {
      Header: "IDENTITA",
      accessor: "_manualId", // This doesn't need to match any data property since it's manually generated
      Cell: ({ rowIndex }) => rowIndex + 1, // Ensure this uses `rowIndex`
    },
    {
      Header: "NOMBRE",
      accessor: (item) => (item.corporate ? item.corporate.name : ""),
    },
    ,
    {
      Header: "PAGO DE SERVICIOS PRESTADOS",
      accessor: "professional_services_payment",
    },
    {
      Header: "RETENCION DE SERVICIOS PRESTADOS",
      accessor: "retention_professional_services",
    },
    { Header: "GROSS PAY RETENTION", accessor: "net_pay" },
    { Header: "GASTOS REEMBOLSADOS", accessor: "reimbursable_expenses" },
    { Header: "DIVIDENDOS", accessor: "dividens" },
    { Header: "RETENCIÓN DE DIVIDENDOS", accessor: "dividens_retention" },
    { Header: "OTROS PAGOS", accessor: "other_payments" },
  ];

  const columns = [
    {
      Header: "IDENTITA",
      accessor: "_manualId", // This doesn't need to match any data property since it's manually generated
      Cell: ({ rowIndex }) => rowIndex + 1, // Ensure this uses `rowIndex`
    },
    ,
    { Header: "NOMBRE", accessor: "name" },
    { Header: "SSN OR EIN", accessor: "employer_identification_number" },
    { Header: "INDIRIZZO POSTALE", accessor: "postal_address" },
    { Header: "TELEFONO", accessor: "telephone" },
    { Header: "DATA DI NASCITA", accessor: "date_of_birth" },
    { Header: "TIPI", accessor: "types" },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-2 2xl:col-span-2 ">
          <Sidebar />
        </div>
        <div className="lg:col-span-10 2xl:col-span-10 h-[100vh] overflow-y-scroll">
          <Navbar />
          <div className="bg-[#f0f4f8] h-full">
            <div className="w-[90%] mx-auto py-10">
              <p className="font-inter font-[700] text-[16px] md:text-[25px] text-black text-center mb-10">
                INFORMES
              </p>
              <div className="mb-10">
                <div className="flex justify-end gap-5 mt-5 md:mt-8 mb-4">
                  <div className="hidden lg:block relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="ricerca per nome"
                      className="font-[500] font-inter text-[14px] text-[#BFBFBF] py-2 px-8 rounded-md"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-[#BFBFBF] absolute top-3 left-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <div className="hidden lg:block relative">
                    <DateInput
                      id="fromDate"
                      label="From:"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                  <div className="hidden lg:block relative">
                    <DateInput
                      id="toDate"
                      label="To:"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                </div>

                <BenefitTable
                  columns={columns}
                  data={filteredData}
                  width={"1000px"}
                />
              </div>
              <div className="flex justify-end gap-5 mt-5 md:mt-8 mb-4">
                <div className="hidden lg:block relative">
                  <input
                    type="text"
                    value={searchTerm2}
                    onChange={(e) => setSearchTerm2(e.target.value)}
                    placeholder="ricerca per nome"
                    className="font-[500] font-inter text-[14px] text-[#BFBFBF] py-2 px-8 rounded-md"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-[#BFBFBF] absolute top-3 left-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <div className="hidden lg:block relative">
                  <DateInput
                    id="fromDate"
                    label="From:"
                    value={fromDate2}
                    onChange={(e) => setFromDate2(e.target.value)}
                  />
                </div>
                <div className="hidden lg:block relative">
                  <DateInput
                    id="toDate"
                    label="To:"
                    value={toDate2}
                    onChange={(e) => setToDate2(e.target.value)}
                  />
                </div>
              </div>
              <BenefitTable
                columns={column}
                data={filteredData2}
                width={"1500px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
