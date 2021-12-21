FROM node:16.13.0 
COPY . /app
WORKDIR /app
RUN npm install
RUN npm i bcrypt
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "dev" ]