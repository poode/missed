# Instructions

## For Docker Usage

* create `.env` file with recommended values like `.env.example`

* Build docker image

> docker build . -t backend:v1

* Run backend:v1 image inside container and use database outside the docker container using below command

> docker run --network host -d backend:v1

## on windows

> docker network create --driver=bridge --subnet=172.16.0.0/24 br0
> docker run -d  --network br0 -p 3000:3000  --restart unless-stopped backend:v1

### Note
  
* If you need to change app port open `Dockerfile` and change `EXPOSE 3000` to `EXPOSE <YOUR PORT>`
  and open `.env` file and change application port to the same port you will expose in docker container
  and then change port same port you will expose from container in the variable called `SERVER_URL` in the `.env` file.
  then build docker image again.

## For Normal Usage

create `.env` file with recommended values like `.env.example`
and Run below Command:

> npm i

then Start Server using below command:
> npm start

[Postman APIs Collection](https://documenter.getpostman.com/view/2773498/Szt8eVZi?version=latest)
