# ------------ STAGE: Install deps
FROM node:20.10-alpine3.18 as deps
ENV NODE_ENV development
LABEL stage=deps
WORKDIR /srv/deps
RUN yarn global add @nestjs/cli
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./
RUN yarn install

# ------------ STAGE: Build app
FROM node:20.10-alpine3.18 as build
LABEL stage=build
ENV NODE_ENV production
WORKDIR /srv/build
COPY . .
COPY --from=deps /srv/deps/node_modules ./node_modules
RUN yarn build

# ------------ STAGE: Execute app
FROM node:20.10-alpine3.18 as execute
LABEL stage=execute
ENV NODE_ENV production
WORKDIR /srv/app
RUN mkdir -p /srv/app/graphql
COPY --from=build /srv/build/node_modules ./node_modules
COPY --from=build /srv/build/dist ./dist
COPY --from=build /srv/build/.env.local ./.env.local
EXPOSE 9053
CMD ["node", "dist/main.js"]

# ------------ STAGE: Build dev
FROM node:20.10-alpine3.18 as dev
LABEL stage=dev
ENV NODE_ENV development
WORKDIR /srv/app
COPY . .
EXPOSE 9053
RUN yarn install
CMD ["yarn", "start:dev"]
