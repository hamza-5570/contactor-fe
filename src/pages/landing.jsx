import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import BenefitTable from "../component/benefit-table";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../connection";
import DeleteIcon from "../assets/png/delete-icon.png";
import EditIcon from "../assets/png/edit-icon.png";
import DateInput from "../component/dateInputWithClear";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
export default function Landing() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const onUpdate = async (id) => {
    navigate(`/addNew?id=${id}`);
  };

  const onDelete = async (id) => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este artículo?")
    ) {
      await axiosClient()
        .delete(`/corporate/deleteCorporate/${id}`)
        .then(async (res) => {
          await setData(data.filter((item) => item._id !== id));
          await setFilteredData(filteredData.filter((item) => item._id !== id));
          toast.success(res.data.message);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        });
    }
  };

  useEffect(() => {
    axiosClient()
      .get("/corporate/getAllCorporate")
      .then(async (res) => {
        console.log(res.data.data);
        setData(res.data.data);
        setFilteredData(res.data.data);
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

  const columns = [
    {
      Header: "IDENTIFICACIÓN",
      accessor: "_manualId", // This doesn't need to match any data property since it's manually generated
      Cell: ({ rowIndex }) => rowIndex + 1, // Ensure this uses `rowIndex`
    },
    ,
    { Header: "NOMBRE", accessor: "name" },
    { Header: "SSN OR EIN", accessor: "employer_identification_number" },
    { Header: "DIRECCIÓN", accessor: "postal_address" },
    { Header: "TELEFONO", accessor: "telephone" },
    { Header: "FECHA DE NACIMIENTO", accessor: "date_of_birth" },
    { Header: "TIPO", accessor: "types" },
    {
      Header: "ACCIÓN",
      accessor: "actions",
      Cell: (row) => (
        <>
          <div className="flex gap-2">
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
                CONTRATISTAS / SUPLIDORES
              </p>
              <div className="flex justify-end gap-5 mt-5 md:mt-8 mb-4">
                <div className="hidden lg:block relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="BUSCAR POR NOMBRE"
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
                    label="de:"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="hidden lg:block relative">
                  <DateInput
                    id="toDate"
                    label="a:"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  onClick={() => {
                    setLoading(true);
                    navigate("/addNew");
                    setLoading(false);
                  }}
                  className="w-[20%] font-inter font-[700] text-[15px] bg-[#8D6AFF] rounded-lg py-2 px-10 text-white relative flex items-center justify-center"
                  disabled={loading}
                >
                  {loading && (
                    <ClipLoader
                      size={20}
                      color={"#ffffff"}
                      loading={loading}
                      className="absolute left-2"
                    />
                  )}
                  <span className={loading ? "ml-6" : ""}>AGREGAR</span>
                </button>
              </div>
              <BenefitTable
                columns={columns}
                data={filteredData}
                width={"1000px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
