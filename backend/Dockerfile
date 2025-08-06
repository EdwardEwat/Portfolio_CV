# Sử dụng base image là PHP có cài sẵn FPM
FROM php:8.2-fpm-alpine

# Cài đặt các gói phụ thuộc và PHP extensions trong một lệnh RUN duy nhất
RUN apk add --no-cache \
    nginx \
    curl \
    git \
    supervisor \
    mariadb-client \
    mariadb-dev \
    postgresql-dev \
    libxml2-dev \
    oniguruma-dev \
    && docker-php-ext-install -j$(nproc) \
    pdo \
    pdo_mysql \
    pdo_pgsql \
    mbstring \
    tokenizer \
    xml \
    ctype

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
CMD ["sh", "-c", "nginx && php-fpm"]