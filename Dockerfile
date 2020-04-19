FROM node:12.2.0

MAINTAINER Saifuddin

RUN npm install -g @angular/cli
RUN ng serve --open