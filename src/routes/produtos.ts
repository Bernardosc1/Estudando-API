import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ produtos: [] });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);

    res.json({ id, name: 'Teclado XYZ', price: 100.00 });
});




export default router;