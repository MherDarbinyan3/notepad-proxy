FROM node:12.19-alpine

ENV PORT 8001
ENV NODE_ENV production

RUN mkdir -p /app

WORKDIR /app/

COPY package.json .
COPY package-lock.json .

RUN npm ci --production && npm cache clean --force

COPY tsconfig.json .
COPY src ./src
