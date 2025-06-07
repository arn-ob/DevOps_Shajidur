# Use the official Node.js Alpine image for a smaller attack surface
FROM node:22.16.0-alpine AS base

# Set environment variables
ENV NODE_ENV=production

# Create a non-root user to run the app
RUN addgroup -S appgroup && adduser -S admin_user -G appgroup

# Set the working directory
WORKDIR /app

# Only copy the necessary files to install dependencies
COPY package*.json ./

# Copy application code
RUN npm install

# Ensure proper file ownership
RUN chown -R admin_user:appgroup /app

# Use a non-root user
USER admin_user

# Expose the port
EXPOSE 3000

# Use a minimal, efficient init process
ENTRYPOINT ["node", "server.js"]
