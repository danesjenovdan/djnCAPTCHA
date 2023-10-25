FROM tomcat:9-jdk8

RUN wget https://code.europa.eu/eu-captcha/EU-CAPTCHA/-/raw/db7f1e8e93bd8a37613679595bfbc9f6ba2cd01e/clientfiles/EuCaptcha_2.2.7.war
RUN mv EuCaptcha_2.2.7.war /usr/local/tomcat/webapps/ROOT.war

COPY conf/context.xml /usr/local/tomcat/conf/
COPY conf/web.xml /usr/local/tomcat/conf/
