FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .


CMD ["node", "--experimental-modules", "bot.js"]