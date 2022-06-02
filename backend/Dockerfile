FROM node:latest

WORKDIR /app/backend

COPY package*.json ./

RUN npm install
COPY . ./

EXPOSE 666

CMD [ "npm", "start" ]
