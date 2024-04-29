# Use the official Node.js image as the base image
FROM node:18.16.1
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install app dependencies
RUN npm ci
# Copy the rest of the application code to the container
COPY . .
RUN npm run build
# Up the project
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "5000"]