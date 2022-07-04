const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {

  try {
    const products = await ProductModel.getAll();
  
    return res.status(200).json(products);
    
  } catch (error) {
    return res.status(500).json({ message: 'Tem algo errado aqui!' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.getById(id);
  
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
  
    return res.status(200).json(product);
    
  } catch (error) {
    return res.status(500).json({ message: 'Tem algo errado aqui!' })
  }
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);
  
    return res.status(200).send(newProduct);
    
  } catch (error) {
    return res.status(500).json({ message: 'Tem algo errado aqui!' });
  }

});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const products = await ProductModel.exclude(id);
  
    res.status(200).json(products);
    
  } catch (error) {
    return res.status(500).json({ message: 'Tem algo errado aqui!' })
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(id, name, brand);
  
    res.status(200).json(products);
    
  } catch (error) {
    return res.status(500).json({ message: 'Tem algo errado aqui!' })
  }

});

module.exports = router;