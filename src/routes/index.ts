import express from "express";

const router = express.Router();

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.get('/voos/:from/:to', (req, res) => {
    const { from , to } = req.params;
    res.json({ flight: 
        { from: from.toUpperCase(), 
            to: to.toUpperCase(), 
            price: 12512} 
        });
});
router.get('/', (req, res) => {
    let name = 'Bernardo';
    let age = 20;

    res.json({ name, age });
});

export default router;