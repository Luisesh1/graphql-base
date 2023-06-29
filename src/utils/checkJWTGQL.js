const boom = require('@hapi/boom')

const checkJWT = async (context) => {
    const { user } = await context.authenticate('jwt', {session: false});
    if (!user) {
        throw boom.unauthorized('bad JWT')
    }
    return user;
}

module.exports = checkJWT