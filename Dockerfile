FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY public/. .
EXPOSE 80
CMD [ "node", "index.js" ]