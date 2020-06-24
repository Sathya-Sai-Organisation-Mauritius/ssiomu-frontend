FROM node:12.2.0-alpine

ENV APP_ROOT /src
ENV HOST 0.0.0.0

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm ci
# RUN npm run export