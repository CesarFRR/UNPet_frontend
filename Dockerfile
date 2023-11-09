# pull official base image
FROM node:18.16.1-slim

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json yarn.lock ./ 
#COPY package-lock.json .
RUN npm install -g yarn --force
RUN yarn install --frozen-lockfile   

# start app
CMD ["yarn", "vite", "--host"]  