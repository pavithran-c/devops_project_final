FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5002   # Change this if your service uses a different port
CMD ["npm", "start"]