import React, { useEffect, useState } from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../connection";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
export default function AddNew() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [contactor, setContactor] = useState({
    name: "",
    employer_identification_number: "",
    postal_address: "",
    telephone: "",
    date_of_birth: "",
    types: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactor({ ...contactor, [name]: value });
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (id) {
      axiosClient()
        .put(`/corporate/updateCorporate/${id}`, contactor)
        .then((res) => {
          toast.success(res.data.message);
          setLoading(false);
          navigate("/Dashboard");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          setLoading(false);
          navigate("/Dashboard");
        });
    } else {
      axiosClient()
        .post("/corporate/addCorporate", contactor)
        .then((res) => {
          toast.success(res.data.message);
          setLoading(false);
          navigate("/Dashboard");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          setLoading(false);
          navigate("/Dashboard");
        });
    }
  };
  useEffect(() => {
    if (id) {
      axiosClient()
        .get(`/corporate/getCorporate/${id}`)
        .then(async (res) => {
          await setContactor({
            name: res.data.data.name,
            employer_identification_number:
              res.data.data.employer_identification_number,
            postal_address: res.data.data.postal_address,
            telephone: res.data.data.telephone,
            date_of_birth: res.data.data.date_of_birth,
            types: res.data.data.types,
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
                    <p className="font-inter font-[700] text-[15px] ">NOMBRE</p>
                    <input
                      required
                      type="text"
                      value={contactor.name}
                      onChange={handleChange}
                      name="name"
                      placeholder="introduzca su nombre"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div>
                    <p className="font-inter font-[700] text-[15px] ">
                      SSN OR EIN (9 DIGITS)
                    </p>
                    <input
                      required
                      type="number"
                      value={contactor.employer_identification_number}
                      name="employer_identification_number"
                      onChange={handleChange}
                      placeholder="por favor ingrese 9 dígitos                    "
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                      DIRECCIÓN
                    </p>
                    <input
                      required
                      type="text"
                      value={contactor.postal_address}
                      name="postal_address"
                      onChange={handleChange}
                      placeholder=" ingresa tu dirección"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                      FECHA DE NACIMIENTO
                    </p>
                    <input
                      required
                      type="date"
                      value={contactor.date_of_birth}
                      name="date_of_birth"
                      onChange={handleChange}
                      placeholder="FECHA DE NACIMIENTO"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                      NUMERO DE TELEFONO
                    </p>
                    <input
                      required
                      type="number"
                      name="telephone"
                      value={contactor.telephone}
                      onChange={handleChange}
                      placeholder="ingresa número telefónico"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px]">TIPO</p>
                    <select
                      required
                      value={contactor.types}
                      name="types"
                      onChange={handleChange}
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    >
                      <option value="" disabled>
                        SELECCIONE TIPO
                      </option>
                      <option value="Individual">Individual</option>
                      <option value="Corporation">Corporation</option>
                    </select>
                  </div>

                  <div></div>
                  <div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="mt-5 md:mt-8 font-inter font-[700] text-[15px] bg-[#8D6AFF] rounded-lg py-2 px-10 block ml-auto text-white relative flex items-center justify-center"
                      disabled={loading}
                    >
                      {loading && (
                        <ClipLoader
                          size={20}
                          color={"#ffffff"}
                          loading={loading}
                        />
                      )}
                      <span className={loading ? "ml-2" : ""}>Entregar</span>
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
