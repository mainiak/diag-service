FROM debian:wheezy

ADD node-bin /opt/node
ADD index.js /webapp/index.js
ADD package.json /webapp/package.json

WORKDIR /webapp
RUN /opt/node/bin/npm install

EXPOSE 8000
CMD [ "/opt/node/bin/node", "index.js" ]
