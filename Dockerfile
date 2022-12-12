FROM node:16
#  wrokdirectroy specify if any
WORKDIR /backend
COPY package*.json .

RUN npm install

# first dot means all files from source secnod means to destination
COPY . .  

ENV PORT=5000

EXPOSE  5000

CMD ["npm", "run", "dev"]



# # ==== CONFIGURE =====
# # Use a Node 16 base image
# FROM node:latest
# # Set the working directory to /app inside the container
# WORKDIR /backend
# # Copy app files
# COPY package*.json ./

# RUN npm install --force

# COPY . .
# # ==== BUILD =====
# # Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)


# # Expose the port on which the app will be running (3000 is the default that `serve` uses)
# EXPOSE 3001
# # Start the app
# CMD [ "npm","start" ]
# #CMD [ "npm", "start" ]