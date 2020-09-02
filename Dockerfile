FROM node:10

ARG PORT=8080
ENV PORT=${PORT}

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE ${PORT}

CMD ["npm", "start"]