# graphql-yoga-engine-issue
Example of @cacheControl directive not working in .graphql schema file

### Error from `graphql-import`
```sh
/git/graphql-yoga-engine-issue/node_modules/graphql-import/dist/definition.js:113
                throw new Error("Directive " + directiveName + ": Couldn't find type " + directiveName + " in any of the schemas.");
                ^

Error: Directive cacheControl: Couldn't find type cacheControl in any of the schemas.
    at collectDirective (/git/graphql-yoga-engine-issue/node_modules/graphql-import/dist/definition.js:113:23)
    at Array.forEach (<anonymous>)
    at collectNewTypeDefinitions (/git/graphql-yoga-engine-issue/node_modules/graphql-import/dist/definition.js:47:34)
    at Object.completeDefinitionPool (/git/graphql-yoga-engine-issue/node_modules/graphql-import/dist/definition.js:23:41)
    at Object.importSchema (/git/graphql-yoga-engine-issue/node_modules/graphql-import/dist/index.js:85:41)
    at mergeTypeDefs (/git/graphql-yoga-engine-issue/node_modules/graphql-yoga/dist/src/index.js:320:37)
    at new GraphQLServer (/git/graphql-yoga-engine-issue/node_modules/graphql-yoga/dist/src/index.js:85:34)
    at Object.<anonymous> (/git/graphql-yoga-engine-issue/index.js:16:16)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
```
