import React, { useState } from 'react'
import { FormInput } from "../components"
import { Link } from 'react-router-dom';
import { GoWorkflow } from "react-icons/go";


const Login = () => {
    const [values, setValues] = useState({
        username: "",
        password: ""
    });
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            // pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 6 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
            required: true,
        },

    ];


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        <div className='h-screen'>
            <div className='flex justify-between px-24 pt-6'>
                <Link to="/" className='font-bold flex justify-center items-center text-2xl gap-1'><GoWorkflow />Flow</Link>
            </div>
            <div className='flex justify-center items-center mt-24 '>
                <div>

                    <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col' >
                        <p className='text-5xl font-bold mb-2'>Login</p>
                        {inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <button onClick={() => console.log(values)} className="w-full p-2 mt-4  border rounded-md" type="submit">Continue with Flow</button>
                        <Link to="/" className='text-xs underline underline-offset-2 text-gray-400 mt-2'>Forgot Password ?</Link>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login