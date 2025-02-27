# Use the official Node.js image as the base
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install Turbo globally
RUN npm install -g turbo

# Copy all files to the working directory
COPY . .

# Prune the project using Turbo
RUN turbo prune --scope=cric-monex-root-template-frontend --docker

# Install dependencies in a separate stage
FROM base AS installer

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json from the pruned output
COPY --from=base /app/out/json/ .

# Copy the pruned lockfile
COPY --from=base /app/out/package-lock.json ./package-lock.json

# Install dependencies
RUN npm install

# Copy the full source code from the pruned output
COPY --from=base /app/out/full/ .

# Build the project
RUN npm run build

# Prepare the final runtime image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the built application and necessary files from the installer stage
COPY --from=installer /app/apps/frontend/.next/standalone ./
COPY --from=installer /app/apps/frontend/.next/static ./apps/frontend/.next/static
COPY --from=installer /app/apps/frontend/public ./apps/frontend/public

# Create a non-root user and group
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Change ownership of the application files
RUN chown -R nextjs:nodejs /app

# Switch to the non-root user
USER nextjs

# Set the command to start the application
CMD ["node", "apps/frontend/server.js"]
