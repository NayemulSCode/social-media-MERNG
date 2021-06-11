const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const {MONGODB_URL} = require('./config');

const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => "hello world43534 345"
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('db connected');
    return server.listen({port: 5000})
})
.then((res) =>{
    console.log(`Server running at ${res.url}`);
})