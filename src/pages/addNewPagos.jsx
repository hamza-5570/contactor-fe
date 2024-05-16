import React, { useEffect, useState } from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../connection";
import { toast } from "react-toastify";

export default function AddNew() {
  let navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [payment, setPayment] = useState({
    professional_services_payment: "",
    retention_professional_services: "",
    net_pay: "",
    reimbursable_expenses: "",
    dividens: "",
    dividens_retention: "",
    other_payments: "",
    corporate: "",
  });
  const [dropdownTouched, setDropdownTouched] = useState(false);
  console.log("==================>", payment.corporate);
  const [corporates, setCorporates] = useState([
    {
      name: "",
      employer_identification_number: "",
      postal_address: "",
      telephone: "",
      date_of_birth: "",
      types: "",
    },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayment({ ...payment, [name]: value });
    if (name === "corporate") {
      setDropdownTouched(true); // Set touched to true when corporate is changed
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (id) {
      axiosClient()
        .put(`/pagos/updatePayment/${id}`, payment)
        .then((res) => {
          toast.success(res.data.message);
          navigate("/Pagos");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        });
    } else {
      axiosClient()
        .post("/pagos/addPayment", payment)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message);
          navigate("/Pagos");
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
        await setCorporates(res.data.data);
      });
    if (id) {
      axiosClient()
        .get(`/pagos/getPayment/${id}`)
        .then(async (res) => {
          await setPayment({
            professional_services_payment:
              res.data.data.professional_services_payment,
            retention_professional_services:
              res.data.data.retention_professional_services,
            net_pay: res.data.data.net_pay,
            reimbursable_expenses: res.data.data.reimbursable_expenses,
            dividens: res.data.data.dividens,
            dividens_retention: res.data.data.dividens_retention,
            other_payments: res.data.data.other_payments,
            corporate: res.data.data.corporate,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
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
              {}

              <form>
                <div className="grid md:grid-cols-2 gap-5 mt-16">
                  <div>
                    <p className="font-inter font-[700] text-[15px]">NOMBRE</p>
                    <select
                      required
                      value={payment.corporate}
                      onChange={handleChange}
                      name="corporate"
                      className="w-full p-2 mt-2 text-base font-normal text-gray-700 bg-white border border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-600"
                    >
                      {/* Always show this placeholder until a valid selection is made */}
                      {(!payment.corporate || payment.corporate === "") && (
                        <option value="" disabled hidden>
                          CORPORACION O INDIVIDUO
                        </option>
                      )}
                      {corporates?.map((corporate) => (
                        <option key={corporate._id} value={corporate._id}>
                          {corporate.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <p className="font-inter font-[700] text-[15px] ">
                      PAGO DE SERVICIOS PRESTADOS
                    </p>
                    <input
                      required
                      type="number"
                      value={payment.professional_services_payment}
                      name="professional_services_payment"
                      onChange={handleChange}
                      placeholder="por favor ingrese 9 dígitos                    "
                      className="w-full p-2 mt-2 text-base font-normal text-gray-700 bg-white border border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                      RETENCION DE SERVICIOS PRESTADOS
                    </p>
                    <input
                      required
                      type="number"
                      value={payment.retention_professional_services}
                      name="retention_professional_services"
                      onChange={handleChange}
                      placeholder=" ingresa tu dirección"
                      className="w-full p-2 mt-2 text-base font-normal text-gray-700 bg-white border border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                      GROSS PAY RETENTION
                    </p>
                    <input
                      required
                      type="number"
                      value={payment.net_pay}
                      name="net_pay"
                      onChange={handleChange}
                      placeholder="FECHA DE NACIMIENTO"
                      className="w-full p-2 mt-2 text-base font-normal text-gray-700 bg-white border border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                      GASTOS REEMBOLSADOS
                    </p>
                    <input
                      required
                      type="number"
                      name="reimbursable_expenses"
                      value={payment.reimbursable_expenses}
                      onChange={handleChange}
                      placeholder="ingresa número telefónico"
                      className="w-full p-2 mt-2 text-base font-normal text-gray-700 bg-white border border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                      DIVIDENDOS
                    </p>
                    <input
                      required
                      type="number"
                      value={payment.dividens}
                      name="dividens"
                      onChange={handleChange}
                      placeholder="CORPORACION O INDIVIDUO"
                      className="w-full p-2 mt-2 text-base font-normal text-gray-700 bg-white border border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                      RETENCIÓN DE DIVIDENDOS
                    </p>
                    <input
                      required
                      type="number"
                      name="dividens_retention"
                      value={payment.dividens_retention}
                      onChange={handleChange}
                      placeholder="ingresa número telefónico"
                      className="w-full p-2 mt-2 text-base font-normal text-gray-700 bg-white border border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                      OTROS PAGOS
                    </p>
                    <input
                      required
                      type="number"
                      value={payment.other_payments}
                      name="other_payments"
                      onChange={handleChange}
                      placeholder="CORPORACION O INDIVIDUO"
                      className="w-full p-2 mt-2 text-base font-normal text-gray-700 bg-white border border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>

                  <div></div>
                  <div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="mt-5 md:mt-8 font-inter font-[700] text-[15px] bg-[#8D6AFF] rounded-lg py-2 px-10 block ml-auto text-white"
                    >
                      Entregar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
