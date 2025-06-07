# Use the official Node.js Alpine image for a smaller attack surface
FROM node:24-alpine AS base

# Set environment variables
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Only copy the necessary files to install dependencies
COPY package*.json ./

# Copy application code
COPY . .

# Expose the port
EXPOSE 3000

# Use a minimal, efficient init process
ENTRYPOINT ["node", "server.js"]
