import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeEdit(){
    const [data, setData] = useState({
        name:'',
        email: '',
        senha: '',
        address: ''
       
    })

    const navigate = useNavigate()
    
    const {id} = useParams()
    useEffect(()=>{
        axios.get('http://localhost:8081/addres/get/' +id)
        .then(res =>{
            setData({...data, name: res.data.Result[0].name,
                email: res.data.Result[0].email,
                salario: res.data.Result[0].salario,
                address: res.data.Result[0].address,
            })
        })
        .catch(err => console.log(err))
    },[]) 
    


    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:8081/addres/edit/'+id, data)
        .then(res => {
            if(res.data.Status === 'Success'){
                navigate('/employee')
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex flex-column align-items-center pt-4">
            <h2>Editar funcionário</h2>
            <form className="row g-3 w-50" onSubmit={handleSubmit}>
                <div class='col-12'>
                    <label for="inputName4" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="inputName4" placeholder="Digite o nome" autoComplete="off"
                    
                    onChange={e=>setData({...data, name: e.target.value})} value={data.name}/>
                </div>
                <div class='col-12'>
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Digite o email" autoComplete="off"
                    
                    onChange={e=>setData({...data, email: e.target.value})} value={data.email}/>
                </div>
                <div class='col-12'>
                    <label for="inputSalario" class="form-label">Salário</label>
                    <input type="number" class="form-control" id="inputSalario" placeholder="Digite o salário" autoComplete="off"
                     onChange={e=>setData({...data, salario: e.target.value})} value={data.salario}
                    />
                </div>
                <div class='col-12'>
                    <label for="inputAddress" class="form-label">Endereço</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Digite o Endereço" autoComplete="off"
                     onChange={e=>setData({...data, address: e.target.value})}  value={data.address}
                    />
                </div>
                <div class="col-12">
                <button type="submit" class="btn btn-primary">Adicionar</button>
                </div>
            </form>
        </div>
    )
}
export default EmployeeEdit