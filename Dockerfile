FROM node:19-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY src/ /app/
EXPOSE 3000
CMD ["node","index.js"]
