# Sellect node image
FROM node:12-alpine
RUN npm install -g --unsafe-perm @prisma/cli

# Set app directory
WORKDIR /usr/src/app/backend

# Installing dependencies
ADD package*.json .
RUN npm install

# Copying source files
ADD . .

# Building app
RUN prisma generate
RUN npm run build 

# Copying compiled files
ADD dist .

# Running app
CMD [ "npm", "start" ]