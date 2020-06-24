FROM node:12
LABEL Version="1.0"
RUN mkdir /backendApp 
COPY . /backendApp
WORKDIR /backendApp
RUN npm ci --only=production
EXPOSE 3000
CMD [ "node","index.js" ]
