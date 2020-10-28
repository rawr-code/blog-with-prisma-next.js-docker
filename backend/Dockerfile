# Sellect node image
FROM node:12-alpine
RUN npm install -g --unsafe-perm @prisma/cli@alpha

# Set app directory
WORKDIR /usr/src/app/backend

ARG FRONTEND_URL
ENV FRONTEND_URL "$FRONTEND_URL"


# Installing dependencies
ADD package*.json .
RUN npm install

# Copying source files
ADD . .

# Running app
CMD [ "npm", "start" ]