import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeDetail (){
 const {id} = useParams()   
const[employee, setEmployee]= useState([])
const navigate = useNavigate()


useEffect(()=>{
    axios.get('http://localhost:8081/addres/get/'+id)
    .then(res => {
        setEmployee(res.data.Result[0])
    }).catch(err => console.error(err))
},[])

    const handleLogout= ()=>{
        axios.get('http://localhost:8081/logout')
        .then(res=>{
            navigate('/start')
        })
    }
    return(
        <div>
          <div className="d-flex justify-content-center flex-column align-items-center mt-3">
            <img src={`http://localhost:8081/images/`+employee.image} alt="" className="emplmg"/>
            <div className="d-flex align-items-center flex-column mt-5">
                <h3>Nome: {employee.name}</h3>
                <h3>Email: {employee.email}</h3>
                <h3>Salário: {employee.salario}</h3>
            </div>
            <div>
                <butto className="btn btn-primary me-2">Editar</butto>
                <butto className="btn btn-danger" onClick={handleLogout}>Sair</butto>
            </div>
          </div>
        </div>
    )
}

export default EmployeeDetail