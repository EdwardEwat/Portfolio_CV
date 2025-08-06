# Sử dụng base image là PHP có cài sẵn FPM
FROM php:8.2-fpm-alpine

# Cài đặt các extension PHP cần thiết cho Laravel
RUN apk add --no-cache \
    nginx \
    curl \
    git \
    supervisor \
    postgresql-dev \
    mysql-client \
    mariadb-dev \
    oniguruma-dev \
    libxml2-dev

RUN docker-php-ext-install -j$(nproc) \
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

# Cấp quyền cho thư mục storage
RUN chmod -R 775 storage
RUN chown -R www-data:www-data storage bootstrap/cache

# Cấu hình file .env
COPY .env.example .env

# Expose port 8000
EXPOSE 8000

# Chạy Nginx và PHP-FPM khi container khởi động
CMD ["sh", "-c", "nginx -g 'daemon off;' && php-fpm"]