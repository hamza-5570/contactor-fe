import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";

export default function UserManagement() {
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
              <form>
                <div className="grid md:grid-cols-2 gap-5 mt-16">
                  <div>
                    <p className="font-inter font-[700] text-[15px] ">FECHA DE PAGO</p>
                    <input
                      required
                      type="date"
                      placeholder="introduzca fecha de pago"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div>
                    <p className="font-inter font-[700] text-[15px] ">
                    PAGO SERVICIOS PROFESIONALES
                    </p>
                    <input
                      required
                      type="text"
                      placeholder="PAGO SERVICIOS PROFESIONALES"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                    RETENCION SERVICIOS PROFESIONALES
                    </p>
                    <input
                      required
                      type="text"
                      placeholder="RETENCION SERVICIOS PROFESIONALES"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                    GASTOS REEMBOLSADOS: 
                    </p>
                    <input
                      required
                      type="text"
                      placeholder="GASTOS REEMBOLSADOS: "
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                    DIVIDENDOS
                    </p>
                    <input
                      required
                      type="text"
                      placeholder="DIVIDENDOS"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                    RETENCION DIVIDENDOS
                    </p>
                    <input
                      required
                      type="text"
                      placeholder="RETENCION DIVIDENDOS"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>


                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                    RENTAS
                    </p>
                    <input
                      required
                      type="number"
                      placeholder="RENTAS"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>

                  <div className="md:mt-5">
                    <p className="font-inter font-[700] text-[15px] ">
                    UTILIDADES
                    </p>
                    <input
                      required
                      type="text"
                      placeholder="UTILIDADES"
                      className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
                    />
                  </div>



                  <div></div>
                  <div>
                    <button
                      type="submit"
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
