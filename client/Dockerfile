FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY docker-entrypoint.d/ /docker-entrypoint.d/
COPY public/config.template.js /usr/share/nginx/html/config.template.js
COPY --from=build /app/dist /usr/share/nginx/html
RUN chmod +x /docker-entrypoint.d/*.sh

EXPOSE 80