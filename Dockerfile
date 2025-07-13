# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# CMD ["node", "bot.js"]

FROM node:18-alpine

WORKDIR /app

# Копируем только файлы зависимостей сначала
COPY package*.json ./

# Устанавливаем зависимости (включая node-telegram-bot-api)
RUN npm install --production

# Копируем остальные файлы
COPY . .

CMD ["node", "bot.js"]
