// // import express from 'express';
// // import cors from 'cors';
// // import mysql from 'mysql'
// // import cookieParser from 'cookie-parser';
// // import bcrypt from 'bcrypt';
// // import jwt from 'jsonwebtoken';
// // import multer from 'multer';
// // import path from 'path';

// // const app = express()
// // app.use(express.json())
// // app.use(cors(
// //   {
// //     origin: ["http://localhost:5173"],
// //     methods: ["POST", "GET", "PUT", "DELETE"],
// //     credentials: true
// //   }
// // ))
// // app.use(cookieParser())
// // app.use(express.static('public'))
// // const conn = mysql.createConnection({
// //   host: '127.0.0.1',
// //   user: 'root',
// //   password: 'Cearasc90@',
// //   database: 'login'
// // })

// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, 'public/image')
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
// //   }
// // })

// // const upload = multer({
// //   storage: storage
// // })
// // conn.connect(function (err) {
// //   if (err) {
// //     console.log('Error in Connection:', err); // Adicione esta linha para exibir o erro
// //   } else {
// //     console.log('Connected')
// //   }
// // })

// // app.get('/get/:id', (req, res) => {
// //   const id = req.params.id;
// //   const sql = 'SELECT * FROM login.cadastro WHERE id = ?';
// //   conn.query(sql, [id], (err, result) => {
// //     if (err) return res.json({ Error: 'Obter erro de funcionário no sql' })
// //     return res.json({ Status: 'Success', Result: result })
// //   })
// // })

// // app.put('/edit/:id', (req, res) => {
// //   const id = req.params.id;
// //   const sql = 'UPDATE login.cadastro SET salario = ? WHERE id = ? '
// //   conn.query(sql, [req.body.salario, id], (err, result) => {
// //     if (err) return res.json({ Error: 'update erro de funcionário no sql' })
// //     return res.json({ Status: 'Success' })
// //   })
// // })


// // app.delete('/delete/:id', (req, res) => {
// //   const id = req.params.id;
// //   const sql = 'Delete FROM login.cadastro WHERE id = ?'
// //   conn.query(sql, [id], (err, result) => {
// //     if (err) return res.json({ Error: 'Delete erro de funcionário no sql' })
// //     return res.json({ Status: 'Success' })
// //   })
// // })

// // const verifyUser = (req, res, next) => {
// //   const token = req.cookies.token;
// //   if (!token) {
// //     return res.json({
// //       Error: 'You are no Authenticate'
// //     })
// //   } else {
// //     jwt.verify(token, "jwt-secret-key", (err, decoded) => {
// //       if (err) return res.json({ Error: "Token wrong" })
// //       req.role = decoded.role;
// //       req.id = decoded.id
// //       next()
// //     })
// //   }
// // }

// // // app.get('/dashboard', verifyUser, (req, res) => {
// // //   return res.json({ Status: "Success", role: req.role, id: req.id })
// // // })


// // // app.get('/adminCount', (req, res) => {
// // //   const sql = 'Select count(id) as admin from login.users'
// // //   conn.query(sql, (err, result) => {
// // //     if (err)
// // //       return res.json({ Error: 'Erro ao executar consulta' });
// // //     return res.json(result);
// // //   })
// // // })


// // // app.get('/employeeCount', (req, res) => {
// // //   const sql = 'SELECT count(id) as employee from login.cadastro'
// // //   conn.query(sql, (err, result) => {
// // //     if (err)
// // //       return res.json({ Error: 'Erro ao executar consulta' });
// // //     return res.json(result);
// // //   })
// // // })


// // // app.get('/salario', (req, res) => {
// // //   const sql = 'SELECT sum(salario) as sumOfSalario from login.cadastro'
// // //   conn.query(sql, (err, result) => {
// // //     if (err)
// // //       return res.json({ Error: 'Erro ao executar consulta' });
// // //     return res.json(result);
// // //   })
// // // })


// app.post('/login', (req, res) => {
//   const { email, senha } = req.body;
//   const sql = 'SELECT * FROM login.users WHERE email = ? AND senha = ?';
//   conn.query(sql, [email, senha], (err, result) => {
//     if (err) {
//       return res.json({ Status: 'Error', Error: 'Erro ao executar consulta' });
//     }
//     if (result.length > 0) {
//       const id = result[0].id
//       const token = jwt.sign({role: "admin" }, "jwt-secret-key", { expiresIn: '1d' })
//       res.cookie('token', token)
//       return res.json({ Status: 'Success' });
//     } else {
//       return res.json({ Status: 'Error', Error: 'Email ou senha incorretos' });
//     }
//   });
// });

// // // app.post('/employeelogin', (req, res) => {
// // //   const { email } = req.body;
// // //   const sql = "SELECT * FROM login.cadastro Where email = ?";
// // //   conn.query(sql, [email], (err, result) => {
// // //     if (err) return res.json({ Status: "Error", Error: "Error in running query" });
// // //     if (result.length > 0) {
// // //       bcrypt.compare(req.body.senha.toString(), result[0].senha, (err, response) => {
// // //         if (err) return res.json({ Error: "password error" });
// // //         if(response){
// // //           const token = jwt.sign({role:"employee", id: result[0].id}, "jwt-secret-key", {expiresIn: '1d'})
// // //           res.cookie('token', token);
// // //           return res.json({Status: "Success", id: result[0].id})
// // //         }
       
// // //       })
// // //     } else {
// // //       return res.json({ Status: "Error", Error: "Wrong Email or Password" });
// // //     }
// // //   })
// // // })

// // app.get('/logout', (req, res) => {
// //   res.clearCookie('token');
// //   return res.json({ Status: "Success" });
// // })

// // // app.get('/getEmployee', (req, res) => {
// // //   const sql = 'SELECT * FROM login.cadastro'
// // //   conn.query(sql, (err, result) => {
// // //     if (err) return res.json({ Error: 'Obter erro de funcionário no sql' })
// // //     return res.json({ Status: 'Success', Result: result })
// // //   })
// // // })




// // // app.post('/create', upload.single('image'), (req, res) => {
// // //   const sql = 'INSERT INTO login.cadastro (`name`, `email`, `senha`,`address`, `salario`, `image`) VALUES (?)'
// // //   bcrypt.hash(req.body.senha.toString(), 10, (err, hash) => {
// // //     if (err) return res.json({ Error: "Erro no hash da senha" })
// // //     const values = [
// // //       req.body.name,
// // //       req.body.email,
// // //       hash,
// // //       req.body.address,
// // //       req.body.salario,
// // //       req.file.filename
// // //     ]
// // //     conn.query(sql, [values], (err, result) => {
// // //       if (err) return res.json({ Error: 'Dentro da consulta singup' })
// // //       return res.json({ Status: 'Success' })
// // //     })
// // //   })
// // // })
// // app.listen(8081, () => {
// //   console.log('running')
// // })

