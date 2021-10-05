# fastisy-api
This is my first implementation of API by using fastyfy framework

![fastify_image](https://pbs.twimg.com/profile_images/970652657231847424/mWKpZoM4_400x400.jpg)

## Fast and low overhead web framework, for Node.js

### Why?

An efficient server implies a lower cost of the infrastructure, a better responsiveness under load and happy users. How can you efficiently handle the resources of your server, knowing that you are serving the highest number of requests possible, without sacrificing security validations and handy development?

Enter Fastify. Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.

### Core features

These are the main features and principles on which fastify has been built:

Highly performant: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30 thousand requests per second.
Extensible: Fastify is fully extensible via its hooks, plugins and decorators.
Schema based: even if it is not mandatory we recommend to use JSON Schema to validate your routes and serialize your outputs, internally Fastify compiles the schema in a highly performant function.
Logging: logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!
Developer friendly: the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security.
TypeScript ready: we work hard to maintain a TypeScript type declaration file so we can support the growing TypeScript community.

![fastify_image_secImage](https://www.fastify.cn/images/fastify-fb-share-image.07b6e6860853c758.png)
