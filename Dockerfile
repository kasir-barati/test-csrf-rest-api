FROM node:14.15.0

COPY . /app
WORKDIR /app

RUN npm i -g dotenv
RUN npm i -g express
RUN npm i -g formidable

EXPOSE 3000
CMD ["npm", "start"]