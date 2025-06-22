FROM node:20-alpine3.21

WORKDIR /usr/src/bot

COPY package*.json ./

COPY . .

EXPOSE 3001

CMD ["node", "bot.js"]
