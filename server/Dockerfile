# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory inside the container
COPY . .

# Expose the port on which your WebSocket server runs (e.g., 8080)
EXPOSE 8080

# Command to run the WebSocket server when the container starts
CMD ["node", "server.js"]
