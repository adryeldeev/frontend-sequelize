import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
    const [adminCount, setAdminCount] = useState()
    const [employeeCount, setEmployeeCount] = useState()
    const [salario, setSalario] = useState()
    useEffect(() => {
        axios.get('http://localhost:8081/adminCount')
          .then(res => {
            if (res.data && res.data.admin) {
              setAdminCount(res.data.admin);
            }
          })
          .catch(err => console.log(err));
      
        axios.get('http://localhost:8081/addres/employeeCount')
          .then(res => {
            if (res.data && res.data.employee) {
              setEmployeeCount(res.data.employee);
            }
          })
          .catch(err => console.log(err));
      
        axios.get('http://localhost:8081/addres/salario')
          .then(res => {
            if (res.data && res.data.sumOfSalario) {
              setSalario(res.data.sumOfSalario);
            }
          })
          .catch(err => console.log(err));
      }, []);
    
    return (
        <div >
            <div className="p-3 d-flex justify-content-around mt-3">
                <div className="p-3">
                    <p>Admin</p>
                    <hr />
                    <p>Total: { adminCount}</p>
                </div>
                <div className="p-3 border shadow-sm">
                    <p>Funcionário</p>
                    <hr />
                    <p>Total:{ employeeCount}</p>
                </div>
                <div className="p-3 border shadow-sm">
                    <p>Salary</p>
                    <hr />
                    <p>Total: {salario}</p>
                </div>

            </div>
            {/* List of admin */}
            <div className="mt-4 px-5 pt-3 ">
                <h3> Lista de Administradores</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Admin</td>
                        <td>Admin</td>
                    </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Home