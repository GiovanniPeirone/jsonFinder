import Express, {Request, Response} from 'express';
import cors from 'cors'
import path from 'path';


import find from './router/find';
import api from './router/api';

const app = Express();
const port = process.env.PORT ?? 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));


app.use(cors());
app.use(Express.static(__dirname + '/public'))
app.use(Express.json())

app.use('', find)
app.use('', api)

app.listen(port, () => {
    console.log("aplicacion corrinedo en ", port);
})


