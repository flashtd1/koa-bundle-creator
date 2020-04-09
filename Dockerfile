FROM node:11.11.0

RUN npm cache clean --force
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install -g pm2

COPY package.json /app/
WORKDIR /app

RUN cnpm install 
COPY . /app
CMD ["npm", "run", "deploy"]