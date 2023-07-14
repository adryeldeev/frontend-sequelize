import React, { useState } from "react";
import axios from 'axios'
import './style.css'
import { useNavigate } from "react-router-dom";
function EmployeeLogin() {


    const [values, setValues] = useState({
        email: '',
        senha: ''
    })

axios.defaults.withCredentials = true;
const navigate = useNavigate()
axios.defaults.withCredentials = true;

const [error, setError] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8081/addres/employeelogin', values)
        .then(res => {
            if(res.data.Status === 'Success') {
                const id = res.data.id
                navigate('/employeedetail/'+id)
            } else {
                setError(res.data.Error)
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-3 rounded w-25 border loginForm">
                <div className="text-danger">
                    {error && error}
                </div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" ><strong>Email</strong></label>
                        <input type="email" placeholder="Digite seu Email" name="email"
                      onChange={e => setValues({...values, email: e.target.value})}  className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" ><strong>Senha</strong></label>
                        <input type="password" placeholder="Digite sua Senha" name="password"
                       onChange={e => setValues({...values, senha: e.target.value})}     className="form-control rounded-0"
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Entrar</button>
                    <p>Você concorda com nossos termos e políticas</p>

                </form>
            </div>

        </div>
    )
}

export default EmployeeLogin