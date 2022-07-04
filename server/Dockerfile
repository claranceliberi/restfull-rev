from node:16.15.1-alpine3.15
WORKDIR /app
COPY ['package.json',"package-lock.json","./"]
RUN npm install
COPY . .
CMD ["npm","start"]