import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Employee() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/addres/getEmployee')
            .then(res => {
                if(res.data.Status === 'Success') {
                    console.log(res.data.Result)
                    setData(res.data.Result)
                }
            })
            .catch(err => console.log(err))

    }, [])

    const handleDelete = (id)=>{
        console.log('ID:', id)
        axios.delete('http://localhost:8081/addres/delete/'+id)
            .then(res => {
                console.log('Response:', res.data)
                if(res.data.Status === 'Success') {
                    setData(data.filter(datas => datas.id !== id))
                }
            })
            .catch(err =>  console.log('Error:', err))
        
    }
    return (
        <div className="px-5 py-3">
            <div className="d-flex justify-content-center">
                <h3>Lista de Empregados</h3>
            </div>
            <Link to={'/create'} className="btn btn-success">Adicionar Funcionário</Link>
            <div className="mt-3">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>Salário</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((employee, index) => {
                        return <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{
                               <img src={`http://localhost:8081/image/`+employee.image} alt="" className="employee_image"/> }</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.salario}</td>
                            <td>
                                <Link to={`/employeeEdit/`+ employee.id} class="btn  btn-sm me-2 btn-primary">Editar</Link>
                                <button onClick={() =>handleDelete(employee.id)} class="btn btn-sm btn-danger">Deletar</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
         </div>
        </div>
    )
}

export default Employee