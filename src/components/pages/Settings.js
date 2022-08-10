import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import profpic from "../../assets/Logo.png"; /*ini nanti diganti */
import { flexbox } from "@mui/system";

const Settings = () =>
{
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios
        /* Ini ada ku tambahin buat ganti name, tapi perlu ditambahin ga di (.get)nya? */
          .get(
            `http://localhost:4000/api/login/?username=${username}&password=${password}`
          )
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/");
            window.location.reload();
          })
          .catch((err) => console.log(err));
      };

      

    return (
        <div className="flex justify-center">
            <div className="w-1/2 mt-10 bg-[#F58F00] rounded-xl">
                <h1 className ="mb-7 p-3 text-center font-bold rounded-t-xl text-3xl bg-[#FFCC85]"> Profile Setting </h1>

                <div className ="ml-7">
                    <div className ="flex justify-center mb-10" >
                        {/* Anggep ini profile picturenya */}
                        <img src={profpic} className="h-40 bg-[#FFFFFF]" />


                        <div className = "flex-col ml-8">
                            <p className="text-3xl font-bold"> "Nama User" </p>
                            <p className="text-xl"> @username </p>
                            <button className="ml-10 p-3 rounded-xl bg-[#5E39C4] mt-6">
                                <p style={{color: "white"}}>Change Picture</p>
                            </button>
                        </div>
                    </div>
                    
                    <form className="flex flex-col " onSubmit={handleSubmit}>
                        {/* Change Name */}
                        <div className="mb-7">
                            <p className="font-bold text-xl" style={{color:"black"}}>Change Name</p>
                            <div classname="flex-col">
                                <TextField className="bg-[#FFFFFF] rounded-xl"
                                    label="Insert New Name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                                <button className = "ml-10 p-3 rounded-xl bg-[#5E39C4] ">
                                    <p style = {{color:"white"}}> Change </p>
                                </button>
                            </div>
                        </div>

                        {/* Change Username */}
                        <div className="mb-7">
                            <p className="font-bold text-xl" style={{color:"black"}}>Change Username</p>
                            <div classname="flex-col">
                                <TextField className="bg-[#FFFFFF] rounded-xl"
                                    label="Insert New Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                />
                                <button className = "ml-10 p-3 rounded-xl bg-[#5E39C4] ">
                                    <p style = {{color:"white"}}> Change </p>
                                </button>
                            </div>
                        </div>
                        
                        {/* Change Password */}
                        <div className="mb-7">
                            <p className="font-bold text-xl" style={{color:"black"}}>Change Password</p>
                            <div classname="flex-col">
                                <TextField className="bg-[#FFFFFF] rounded-xl"
                                    label="Insert New Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <button className = "ml-10 p-3 rounded-xl bg-[#5E39C4] ">
                                    <p style = {{color:"white"}}> Change </p>
                                </button>
                            </div>
                        </div>
                    </form>

                    < button className="w-50 p-5 rounded-xl bg-[#5E39C4]">
                        <p style = {{color : "white"}}> 
                        <Link to="/discussion"> Back </Link> 
                        </p> 
                    </button>
                </div>

            </div>
        </div>
    );
}


export default Settings;