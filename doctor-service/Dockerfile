FROM openjdk:11
EXPOSE 8085
ADD ./target/doctor-service-0.0.1-SNAPSHOT.jar /usr/src/doctor-service-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "config-server-0.0.1-SNAPSHOT.jar"]