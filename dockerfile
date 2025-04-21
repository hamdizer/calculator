FROM node:18-alpine

ENV npm_config_build_from_source=true

WORKDIR /app

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    libc6-compat

COPY package.json package-lock.json* yarn.lock* ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]
