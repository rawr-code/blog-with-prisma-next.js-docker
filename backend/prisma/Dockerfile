# Sellect node image
FROM node:12-alpine
RUN npm install -g --unsafe-perm @prisma/cli

# Set app directory
WORKDIR /usr/src/app/backend

# Copying source files
ADD . ./prisma

EXPOSE 5555

# Running app
CMD [ "prisma", "studio" ]
