FROM tomcat:8.0

MAINTAINER Saifuddin

COPY target/angular-app.war /usr/local/tomcat/webapps/
COPY tomcat-users.xml /usr/local/tomcat/conf
COPY manager.xml /usr/local/tomcat/conf/Catalina/localhost
COPY host-manager.xml /usr/local/tomcat/conf/Catalina/localhost
COPY context.xml /usr/local/tomcat/webapps/manager/META-INF

EXPOSE 8888
EXPOSE 8383
EXPOSE 80

CMD ["catalina.sh", "run"]