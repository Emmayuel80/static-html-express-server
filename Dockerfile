FROM node:16
WORKDIR /usr/src/app
COPY /package*.json ./
COPY /*.env ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "./index.js"]
