const boom = require('@hapi/boom')

const checkRoles = (user, ...roles) => {
    if (!roles.includes(user.role)) {
        throw boom.unauthorized('bad role');
    }
}

module.exports = checkRoles