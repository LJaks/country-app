FROM node:alpine AS builder
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install --production
COPY . .
RUN yarn build

FROM node:alpine
WORKDIR /app
COPY --from=builder /app/build ./build
RUN npm install -g serve
EXPOSE 3000
ENTRYPOINT [ "serve", "-s", "build", "-l", "3000" ]