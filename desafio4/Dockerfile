#use an image with all packages to do the heavylifting for us
FROM node:12-alpine3.12 as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --logevel=error install
COPY tsconfig.json ./
COPY src/ ./src/
COPY public/ ./public/
RUN yarn run build

#use a small footprint image to run the app
FROM nginx:1.19-alpine as app
COPY --from=builder /app/build /usr/share/nginx/html
ENV NGINX_PORT=3000
RUN sed -i "s/80/$NGINX_PORT/" /etc/nginx/conf.d/default.conf
EXPOSE $NGINX_PORT
CMD ["nginx", "-g", "daemon off;"]    