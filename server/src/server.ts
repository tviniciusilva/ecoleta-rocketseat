import express, { request } from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

// Dessa forma, o express irá entender os dados da nossa requisição em formato json.
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// Recursos: Usuários, o que estou usando na minha rota

// Request Param: Parametros que vem na própria rota que identificam um recurso.
// Query Param: Parametros que vem na própria rota, geralmente opcionais.
// Request Body: Parametros para criação/atualização de informações // Payload.

// const users = [
//     'Vinicius',
//     'Oseás',
//     'Lucas',
//     'César',
//     'Pamela',
// ]

// const search = String(request.query.search);

// const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

// console.log(search);
// //Show a text for user.
// response.json(filteredUsers);

// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);
//     const user = users[id];

//     return response.json(user);
// });

// app.post('/users', (request, response) => {
//     // O conteúdo enviado no post será atribuido a data;
//     const data = request.body;
//     console.log(data);
//     const user = {
//         name: data.name,
//         emai: data.email,
//     };
//     // É importante colocar esse return, para que o código pare de ser executado aqui, caso haja mais código após.
//     return response.json(user);
// });

app.use(errors());

app.listen(3333);