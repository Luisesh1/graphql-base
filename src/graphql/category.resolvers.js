const CategoryService = require('../services/category.service');
const checkJWT = require('../utils/checkJWTGQL');
const checkRoles = require('../utils/checkRolesGQL');
const service = new CategoryService()

const addCategory = async (_, {dto}, context) => {
    const user = await checkJWT(context);
    checkRoles(user, 'admin')
    dto.image = dto.image.href;
    return service.create(dto)
}

const getCategory = (_, {id}) => {
    return service.findOne(id);

}

module.exports = {addCategory, getCategory};