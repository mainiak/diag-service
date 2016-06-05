FROM node:4.4.5-slim

ADD index.js /webapp/index.js
ADD package.json /webapp/package.json

WORKDIR /webapp
RUN npm install && npm ddp

EXPOSE 8000
CMD [ "/usr/local/bin/node", "index.js" ]
