# authorization NGINX, Docker

## Requirements

Make sure you have [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed

## Running
```bash
docker-compose up
```

Yes that is it, after this is up navigate in a browser to [localhost:8080](http://localhost:8080)

In order to make the request succeed you have to include a header in the request
```
x-token: secret
```
