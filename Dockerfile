FROM node:12.16.3

WORKDIR /code

ENV PORT 80

COPY package.json  /code/src/server.js

RUN npm install

COPY . /code

CMD ["node", "src/server.js"]