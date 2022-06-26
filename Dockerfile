# BUILD SERVER

FROM golang:1.18-alpine as go-builder

WORKDIR /app
COPY server/ ./

RUN go mod download

ENV CGO_ENABLED=0
ENV GOOS=linux

RUN go build main.go

# BUILD CLIENT

FROM node:16.13-alpine as node-builder

WORKDIR /app
COPY client/ ./

RUN yarn --prefer-offline

RUN yarn build

# SERVE

FROM busybox

COPY --from=go-builder /app/main server

COPY --from=node-builder /app/dist client
COPY client/assets/json2go-logo.png client/assets/json2go-logo.png

ENV PORT=80
ENV GO_ENV="production"
ENV GIN_MODE="release"

EXPOSE 80
CMD [ "/server" ]