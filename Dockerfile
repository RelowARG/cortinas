# Dockerfile para Cortinas Deluxe (Nginx optimizado)
FROM nginx:alpine

# Eliminar conf por defecto de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar la configuracion personalizada
COPY nginx.conf /etc/nginx/conf.d/

# Copiar los archivos estaticos al directorio de nginx
COPY . /usr/share/nginx/html

# Exponer el puerto
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]