FROM node:12.2.0

MAINTAINER Saifuddin

WORKDIR /angular-app
ENV PATH /angular-app/node_modules/.bin:$PATH
COPY package.json /angular-app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9
# add app
COPY . /angular-app

# start app
CMD ng serve --host 0.0.0.0

EXPOSE 8080
EXPOSE 4200
