import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import BenefitTable from "../component/benefit-table";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../connection";
import DeleteIcon from "../assets/png/delete-icon.png";
import EditIcon from "../assets/png/edit-icon.png";

export default function Pagos() {
  let navigate = useNavigate();
  const [contactorList, setContactorList] = useState([]);

  const onUpdate = async (id) => {
    navigate(`/addNewPagos?id=${id}`);
  };

  const onDelete = async (id) => {
    axiosClient()
      .delete(`/pagos/deletePayment/${id}`)
      .then(async (res) => {
        await setContactorList(contactorList.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axiosClient()
      .get("/pagos/getAllPayment")
      .then(async (res) => {
        await setContactorList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
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
    {
      Header: "AZIONE",
      accessor: "actions",
      Cell: (row) => (
        <>
          <div className="flex gap-2 ">
            <button
              onClick={() => onDelete(row.row._id)}
              className="flex items-center justify-center  w-8 h-8 rounded-md bg-[#dc2727] text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
            >
              <img src={DeleteIcon} alt="Delete Icon" className="w-8 h-8" />
            </button>

            <button
              onClick={() => onUpdate(row.row._id)}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-[#8D6AFF] text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <img src={EditIcon} alt="Edit Icon" className="w-5 h-5" />
            </button>
          </div>
        </>
      ),
    },
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
              <p className="font-inter font-[700] text-[16px] md:text-[25px] text-black text-center">
                DROP DOWN WITH THE SUPPLIERS OR CONTRACTORS
              </p>
              <button
                type="submit"
                onClick={() => {
                  navigate("/addNewPagos");
                }}
                className="mb-4 mt-5 w-[20%] md:mt-8 font-inter font-[700] text-[15px] bg-[#8D6AFF] rounded-lg py-2 px-10 block ml-auto text-white"
              >
                Entregar
              </button>
              <BenefitTable
                columns={columns}
                data={contactorList}
                width={"1500px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
