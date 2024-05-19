import React, { useState } from "react";
import Logo from "../assets/svg/Backup_of_EMPREINT KAPITAL logo PNG 1.svg";
import Msg from "../assets/svg/Icons@2x.svg";
import Lock from "../assets/svg/Icons.svg";
import axiosClient from "../connection.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
export default function Signin() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    axiosClient()
      .post("/user/userLogin", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        setLoading(true);
        navigate("/Panel");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="grid lg:grid-cols-1 w-[90%] mx-auto">
        <div>
          <img src={Logo} alt="" className="mx-auto md:mx-0 block" />
        </div>
        <div className="self-center mt-5 md:mt-10">
          <p className="font-inter font-[700] text-[25px] md:text-[35px] text-black text-center">
            Para ti
          </p>
          <div className="bg-white  rounded-xl  md:w-[80%] lg:w-[50%] 2xl:w-[30%] mx-auto py-10 my-5">
            <p className="font-inter font-[700] text-[20px] md:text-[30px] text-black text-center">
              {/* Login */}
              ACCESO
            </p>
            <form className="w-[90%] mx-auto mt-10">
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="nom d’utilisateur"
                  className="self-center font-inter font-[500] text-[16px] text-[#1C1C1EB8] border-[1px] border-[#1C1C1EB8] rounded-md py-3 px-10 w-full"
                />
                <img src={Msg} alt="" className="absolute top-2 left-2 " />
              </div>

              <div className="relative mt-5">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="mot de passe"
                  className="mt-1 self-center font-inter font-[500] text-[16px] text-[#1C1C1EB8] border-[1px] border-[#1C1C1EB8] rounded-md py-3 px-10 w-full"
                />
                <img src={Lock} alt="" className="absolute top-2 left-2 " />
              </div>

              <div className="mt-5 flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="font-inter font-[400] text-[#1C1C1E] text-[10px] md:text-[14px]">
                    {/* Remember Me */}
                    Acuérdate de mí
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={handleSubmit}
                  className="relative mt-10 font-inter font-[400] text-[16px] text-white rounded-md bg-[#0049FC] w-full p-2"
                  disabled={loading}
                >
                  {loading && (
                    <ClipLoader
                      size={20}
                      color={"#ffffff"}
                      loading={loading}
                      className="absolute left-1/2 transform -translate-x-1/2"
                    />
                  )}
                  <span className={loading ? "opacity-0" : ""}>ACCESO</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
