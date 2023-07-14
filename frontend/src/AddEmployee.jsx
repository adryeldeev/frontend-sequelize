import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddEmployee(){
    const [data, setData] = useState({
        name:'',
        email: '',
        senha: '',
        salario:'',
        address: '',
        image:''
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('senha', data.senha);
        formData.append('address', data.address);
        formData.append('salario', data.salario);
        formData.append('image', data.image);
      
        const token = localStorage.getItem('token'); // Recupere o token de autenticação do armazenamento local ou de onde você o estiver armazenando
      
        axios
          .post('http://localhost:8081/user/:userId/addres/create', formData, {
            headers: {
              Authorization: `Bearer ${token}`, // Adicione o token de autenticação no cabeçalho da solicitação
            },
          })
          .then((res) => {
            navigate('/employee');
          })
          .catch((err) => console.log(err));
      };
    return(
        <div className="d-flex flex-column align-items-center pt-4">
            <h2>Adicionar funcionário</h2>
            <form className="row g-3 w-50" onSubmit={handleSubmit}>
                <div class='col-12'>
                    <label for="inputName4" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="inputName4" placeholder="Digite o nome" autoComplete="off"
                    
                    onChange={e=>setData({...data, name: e.target.value})}/>
                </div>
                <div class='col-12'>
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Digite o email" autoComplete="off"
                    
                    onChange={e=>setData({...data, email: e.target.value})}/>
                </div>
                <div class='col-12'>
                    <label for="inputSenha4" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="inputSenha4" placeholder="Digite a senha" autoComplete="off"
                     onChange={e=>setData({...data, senha: e.target.value})}
                    />
                </div>
                <div class='col-12'>
                    <label for="inputSalario" class="form-label">Salário</label>
                    <input type="number" class="form-control" id="inputSalario" placeholder="Digite o salário" autoComplete="off"
                     onChange={e=>setData({...data, salario: e.target.value})}
                    />
                </div>
                <div class='col-12'>
                    <label for="inputAddress" class="form-label">Endereço</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Digite o Endereço" autoComplete="off"
                     onChange={e=>setData({...data, address: e.target.value})}
                    />
                </div>
                <div class='col-12 mb-3'>
                    <label for="form-label" class="inputGroupFile01">Selecione a imagem</label>
                    <input type="file" class="form-control" id="inputGroupFile01" autoComplete="off"
                     onChange={e=>setData({...data, image: e.target.files[0]})}
                    />
                </div>
                <div class="col-12">
                <button type="submit" class="btn btn-primary">Adicionar</button>
                </div>
            </form>
        </div>
    )

}

export default AddEmployee