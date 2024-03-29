# pull the official base image
FROM node:20-alpine




# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./

#EXPOSE PORT
EXPOSE 80

# start app
CMD ["npm", "start"]