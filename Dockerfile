FROM node:13

EXPOSE 1234

RUN mkdir /levelup-games

COPY . /levelup-games

WORKDIR /levelup-games

RUN npm install

ENTRYPOINT ["npm", "start"]

