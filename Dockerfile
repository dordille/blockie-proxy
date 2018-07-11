FROM node:alpine
ENV NODE_ENV=production

WORKDIR /usr/src/app
EXPOSE 1337

RUN apk add --update \
	libc6-compat \
    cairo-dev \
    git \
  && rm -rf /var/cache/apk/*

COPY package*.json ./
RUN npm install --only=production

COPY . .


CMD [ "npm", "start" ]