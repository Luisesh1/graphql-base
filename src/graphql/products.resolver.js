const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const getProduct = async (_, { id }) => {
    return service.findOne(id);
};

const getProducts = async () => {
    return service.find({});
};

const addProduct = async (_, { dto }) => {
    return service.create(dto);
};

const updateProduct = async (_, {id, dto }) => {
    return service.update(id, dto);
};
const deleteProduct = async (_, { id }) => {
    await service.delete(id);
    return id;
};

const getProductsByCategoryId = (parent ) => {
    return service.findByCategoryId(parent.dataValues.id);
}
module.exports = {
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategoryId
};