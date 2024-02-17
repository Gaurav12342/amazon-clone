import express,{Request,Response} from 'express';
import { addProducts } from '../Controller/Products';

const routes = express.Router();

routes.post("/", addProducts);

export default routes;