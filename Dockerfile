FROM node:12.2.0

MAINTAINER Saifuddin

RUN npm install -g @angular/cli
WORKDIR /angular-form-with-jenkins
RUN ng serve --open