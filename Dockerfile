FROM node:12.22.1

ADD . /workspace

WORKDIR /workspace

COPY . /workspace
RUN npm ci

ENV PORT 3000
EXPOSE 3000

RUN npm install pm2 -g

CMD npm run deploy
