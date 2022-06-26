# BUILD SERVER

FROM golang:1.18-alpine as go-builder

WORKDIR /app
COPY server/ ./

RUN go mod download

ENV CGO_ENABLED=0
ENV GOOS=linux

RUN go build main.go

# SERVE

FROM scratch

COPY --from=go-builder /app/main server

# TODO: Add build step for React client
COPY server/client client

ENV PORT=80
ENV GO_ENV="production"
ENV GIN_MODE="release"

EXPOSE 80
CMD [ "/server" ]