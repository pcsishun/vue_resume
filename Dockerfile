# Build stage # 
FROM node:lts-alpine as build-stage 
WORKDIR /app 
COPY . .
RUN npm install 
RUN npm run build


# deploy # 
FROM nginx:stable-alpine 
COPY --from=build-stage /app/dist /usr/share/nginx/html 
EXPOSE 80 
CMD ["nginx", "-g"]