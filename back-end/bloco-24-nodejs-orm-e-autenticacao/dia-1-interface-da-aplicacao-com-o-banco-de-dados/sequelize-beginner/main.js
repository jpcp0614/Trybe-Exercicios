const { Product } = require('./models');

const main = async () => {
  try {
    //* findAll
    const product = await Product.findAll();
    console.log(product.map(prod => prod.dataValues));

    //* create
    // const add = await Product.create({ name: 'Micro-ondas', description: 'lorem Ipsum', price: 520.99 });
    // console.log(add.dataValues);

    //* findByPk = findById
    // const id = await Product.findByPk(4);
    // console.log(id.dataValues);

  } catch (error) {
    console.log(error);
  }

  //console.log(products);
};

main();
