FROM openjdk:11
EXPOSE 8085
ADD ./target/doctor-service-0.0.1-SNAPSHOT.zip doctor-service-0.0.1-SNAPSHOT.zip
ENTRYPOINT ["java","-jar", "doctor-service-0.0.1-SNAPSHOT.zip"]