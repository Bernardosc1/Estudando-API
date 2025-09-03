import express from "express";
import type { RequestHandler } from "express";
import produtosRouter from "./produtos.ts";
import voosRouter from "./voos.ts";
import { interferir } from "../middlewares/intervir.ts";

const router = express.Router();

// router.use(interferir);

router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);


router.get('/ping', (req, res) => {
    console.log('EXECUTOU O PING...');
    res.json({ pong: true });
});

router.get('/', (req, res) => {
    console.log('PARAMS', req.params);
    console.log('QUERY', req.query);
    console.log('BODY', req.body);

    let name = 'Bernardo';
    let age = 20;

    res.json({ name, age });
});

export default router;