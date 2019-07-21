FROM mhart/alpine-node:12
WORKDIR /opt/app
COPY package.json ./
ENV VIRTUAL_HOST=nodeapp.me
ENV VIRTUAL_PORT=3000
RUN npm install
COPY . .
EXPOSE 3000