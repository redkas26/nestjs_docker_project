
FROM node:18
WORKDIR /app
COPY . .
RUN npm install 
CMD ["node", "src/main.ts"]
EXPOSE 3000