FROM node:alpine

#ENV NODE_ENV production
ENV HTTP_PROXY=http://nl-userproxy-access.net.abnamro.com:8080
ENV HTTPS_PROXY=http://nl-userproxy-access.net.abnamro.com:8080

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm","run","serve"] 