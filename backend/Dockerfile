# Sử dụng base image là PHP có cài sẵn FPM
FROM php:8.2-fpm-alpine

# Cập nhật danh sách gói và cài đặt các gói hệ thống cần thiết
RUN apk update && apk upgrade --no-cache && apk add --no-cache \
    nginx \
    curl \
    git \
    supervisor \
    mariadb-client \
    mariadb-dev \
    libxml2-dev \
    oniguruma-dev

# Tách riêng các lệnh cài đặt PHP extensions để dễ debug
RUN docker-php-ext-install pdo
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install mbstring
RUN docker-php-ext-install xml
RUN docker-php-ext-install ctype

# Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Thiết lập thư mục làm việc
WORKDIR /var/www/html

# Sao chép code project của bạn vào container
COPY . .

# Chạy composer install
RUN composer install --no-dev --optimize-autoloader

# Sao chép cấu hình Nginx
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Cấp quyền cho thư mục storage và cache để ứng dụng có thể ghi file
RUN chown -R www-data:www-data storage bootstrap/cache
RUN chmod -R 775 storage

# Cấu hình file .env
COPY .env.example .env

# Expose port 8000 để Nginx lắng nghe
EXPOSE 8000

# Chạy Nginx và PHP-FPM khi container khởi động
CMD ["sh", "-c", "cat /etc/nginx/nginx.conf && nginx -t && nginx -g 'daemon off;'"]