const {
    getProduct,
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct,
    getProductsByCategoryId
} = require('./products.resolver');
const {login} = require('./auth.resolver');
const {addCategory, getCategory} = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');
const CategoryNameType = new RegularExpression('CategoryNameType',/^[A-Za-z0-9]{3,8}/);
const resolvers = {
    Query: {
        hello: () => 'hello world',
        getPerson: (_, args) => `hello, my name is ${args.name}, i am ${args.age} years old.`,
        getInt: (_, args) => args.age,
        getFloat: (_, args) => args.price,
        getString: () => '1010',
        getBoolean: () => false,
        getID: () => '121212',
        getNumbers: (_, args) => args.numbers,
        // products
        product: getProduct,
        products: getProducts,
        category: getCategory    },
    Mutation: {
        addProduct,
        deleteProduct,
        updateProduct,
        login,
        addCategory,
    },
    CategoryNameType,
    Category: {
        products: getProductsByCategoryId
    }
}


module.exports = resolvers;