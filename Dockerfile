FROM node:11.11.0

RUN npm cache clean --force
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install -g pm2

COPY package.json /app/
WORKDIR /app

RUN cnpm install 
RUN mkdir input
RUN mkdir output
RUN chmod -R 777 input
RUN chmod -R 777 output

COPY . /app
CMD ["npm", "run", "deploy"]