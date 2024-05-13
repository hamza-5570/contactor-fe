import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import BenefitTable from "../component/benefit-table";
import { useNavigate } from "react-router-dom";
import axiosClient from "../connection";

export default function Landing() {
  let navigate = useNavigate();
  const [contactorList, setContactorList] = useState([]);
  const [pagosList, setPagosList] = useState([]);

  useEffect(() => {
    axiosClient()
      .get("/corporate/getAllCorporate")
      .then(async (res) => {
        await setContactorList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosClient()
      .get("/pagos/getAllPayment")
      .then(async (res) => {
        await setPagosList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                DROP DOWN WITH THE SUPPLIERS OR CONTRACTORS
              </p>
              <div className="mb-10">
                <BenefitTable
                  columns={columns}
                  data={contactorList}
                  width={"1000px"}
                />
              </div>
              <BenefitTable
                columns={column}
                data={pagosList}
                width={"1500px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
