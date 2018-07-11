FROM amazonlinux

RUN yum update -y && yum clean all
RUN yum -y install tar gzip git zip

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
RUN /bin/bash -c "source /root/.nvm/nvm.sh; nvm install v8.10.0"
RUN /bin/bash -c "source /root/.nvm/nvm.sh; npm config set strict-ssl false"

COPY package*.json ./
RUN /bin/bash -c "source /root/.nvm/nvm.sh; npm install"

COPY . .