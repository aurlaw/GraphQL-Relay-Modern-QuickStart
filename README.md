# Graphcool Quickstart with Relay Modern

* [React](https://facebook.github.io/react/): Frontend framework for building user interfaces
* [Relay](https://facebook.github.io/relay/): Powerful GraphQL client developed by Facebook
* [Graphcool](https://www.graph.cool): Flexible backend platform combining GraphQL + AWS Lambda

## Example 

![](http://imgur.com/3S6fUeI.gif)

## Quickstart

For more information on how to get started [refer to the full react-relay-instagram tutorial](https://www.graph.cool/docs/quickstart/react-relay-instagram/).

### 1. Clone example repository

```sh
git clone https://github.com/graphcool-examples/react-graphql.git
cd react-graphql/quickstart-with-relay-modern
```

### 2. Create GraphQL API with [`graphcool`](https://www.npmjs.com/package/graphcool)

```sh
# Install Graphcool CLI
npm install -g graphcool

# Create a new project based on the Instagram schema
graphcool init 
```

This will create a basic template. Add the following type to the ``project.graphcool`` file


```graphql
type Post implements Node {
  id: ID! @isUnique
  createdAt: DateTime!
  updatedAt: DateTime!
  description: String!
  imageUrl: String!
  location: String
  image: File @relation(name: "PostImage")
}

```
Update the ``File`` type

```graphql
type File implements Node {
  id: ID! @isUnique
  createdAt: DateTime!
  updatedAt: DateTime!
  contentType: String!
  name: String!
  secret: String! @isUnique
  size: Int!
  url: String! @isUnique
  image: [Post!]! @relation(name: "PostImage")
}
```

Push the changes to your Graph.cool account

```sh
graphcool push 
```

For future schema updates, You can use [graphql-cli](https://github.com/graphcool/graphql-cli) to download the complete GraphQL schema of any GraphQL endpoint. Install the tool and download the schema:
```sh
# install via NPM
npm install -g graphql-cli

# Setup your .graphqlconfig file
graphql init

# Download the schema from the server
graphql get-schema
```


### 3. Connect the app with your GraphQL API

Copy the `Relay API` endpoint to `./src/createRelayEnvironment.js` as the argument for the call to `fetch` :

```js
// replace `__RELAY_API_ENDPOINT__ ` with the endpoint from the previous step
return fetch('__RELAY_API_ENDPOINT__', {
 ...
})  
```

Copy the `File API` endpoint to `./src/components/CreatePage.js` as the argument for the call to `fetch` :

```js
// replace `__FILE_API_ENDPOINT__ ` with the endpoint from the previous step
return fetch('__FILE_API_ENDPOINT__', {
 ...
})  
```


### 4. Install dependencies & run locally

```sh
yarn install
yarn relay # invoke relay compiler
yarn start # open http://localhost:3000 in your browser
```

## Next steps

* [Advanced GraphQL features](https://www.graph.cool/docs/tutorials/advanced-features-eath7duf7d/)
* [Authentication & Permissions](https://www.graph.cool/docs/reference/authorization/overview-iegoo0heez/)
* [Implementing business logic with serverless functions](https://www.graph.cool/docs/reference/functions/overview-boo6uteemo/)


## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Say hello in our [Slack](http://slack.graph.cool/) or visit the [Graphcool Forum](https://www.graph.cool/forum) if you run into issues or have questions. We love talking to you!

![](http://i.imgur.com/5RHR6Ku.png)
