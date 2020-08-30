#use an image with all packages to do the heavylifting for us
#FROM node as builder
FROM node:alpine as builder
WORKDIR /home/node
USER node
COPY --chown=node:node package.json yarn.lock ./
RUN yarn --logevel=error install
COPY --chown=node:node tsconfig.json ormconfig.json .env ./
COPY --chown=node:node src/ ./src/
COPY --chown=node:node test/ ./test/
RUN yarn run typeorm migration:run
RUN yarn run seed:run
#RUN yarn run test
COPY --chown=node:node tsconfig.build.json ./
RUN yarn run build

#use a small footprint image to run the app
FROM node:alpine
WORKDIR /home/node
USER node
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules
COPY --from=builder --chown=node:node /home/node/dist/ ./dist
COPY --from=builder --chown=node:node /home/node/database.sqlite ./
EXPOSE 3000
CMD node dist/main