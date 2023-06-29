const {ApolloServer} = require('apollo-server-express');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const {loadFiles} = require('@graphql-tools/load-files');
const { buildContext } = require('graphql-passport');
const { resolvers: scalarResolvers, typeDefs: ScalarTypes } = require('graphql-scalars');
const resolversCustom = require('./resolvers');

const useGraphql = async (app) => {
    const typeDefs = [
        await loadFiles('./**/*.graphql'),
        ScalarTypes
    ];
    const resolvers = [
        resolversCustom,
        scalarResolvers
    ];
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({req, res}) => buildContext({req, res}),
        playground: true,
        plugins: [ApolloServerPluginLandingPageLocalDefault]
    });
    await server.start();
    server.applyMiddleware({app});
}

module.exports = useGraphql;