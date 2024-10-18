FROM node:18-alpine as build

WORKDIR /client/amanii-resources

COPY package*.json ./

RUN npm install

COPY . .

#RUN npm run build

#FROM nginx:alpine
#COPY --from=build /client/amanii/build /usr/share/nginx/html

#EXPOSE 80
EXPOSE 5173

#CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "run", "dev"]