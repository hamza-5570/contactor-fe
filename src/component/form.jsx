import React from "react";

const Form = ({ contactor, handleChange, handleSubmit }) => {
  return (
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
          <p className="font-inter font-[700] text-[15px] ">DIRECCION</p>
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
          <p className="font-inter font-[700] text-[15px] ">
            CORPORACION O INDIVIDUO
          </p>
          <input
            required
            type="text"
            value={contactor.types}
            name="types"
            onChange={handleChange}
            placeholder="CORPORACION O INDIVIDUO"
            className="font-inter font-[400] text-[15px] w-full p-3 mt-2 outline-none rounded-lg border-[1px] border-[#8D6AFF]"
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
  );
};

export default Form;
