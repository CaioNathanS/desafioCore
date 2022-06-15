import express from 'express';
import expressAsyncHandler from 'express-async-handler';
const ubsRouter = express.Router();
import Ubs from '../models/ubsModel.js';
import { isAdmin, isAuth} from '../utils.js';

ubsRouter.get(
    '/',
    
    expressAsyncHandler(async (req, res) => {
      const users = await Ubs.find({});
      res.send(users);
    })
  );

ubsRouter.delete(
    '/:id',
      isAuth,
      isAdmin,
      expressAsyncHandler(async (req, res) => {
        const ubs = await Ubs.findById(req.params.id);
       
          const deleteUbs = await ubs.remove();
          res.send({ message: 'Agenda excluida', ubs: deleteUbs });
        
      })
    );
  

ubsRouter.post(
        '/novo',
        expressAsyncHandler(async (req, res) => {
        
          const ubs = new Ubs({
            NOME: req.body.nome,
            BAIRRO: req.body.bairro,
            UF: req.body.uf,
            IBGE: req.body.ibge,
            CNES: req.body.cnes,
            LOGRADOURO: req.body.logradouro,
            LATITUDE: req.body.latitude,
            LONGITUDE: req.body.longitude,

        });
          const createubs = await ubs.save();
          res.send({createubs});
        })
      );
    

export default ubsRouter;
