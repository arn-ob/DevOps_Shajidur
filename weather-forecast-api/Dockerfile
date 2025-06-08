# Use the official Node.js Alpine image for a smaller attack surface
FROM node:22.16.0-alpine

# Set environment variables
ENV NODE_ENV=production

# Create a non-root user to run the app
RUN addgroup -S appgroup && adduser -S admin_user -G appgroup

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Ensure proper file ownership
RUN chown -R admin_user:appgroup /usr/src/app

# Use a non-root user
USER admin_user

# Copy the rest of the app
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]