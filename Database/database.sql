CREATE TABLE sample
(
    id   varchar(100) NOT NULL,
    name varchar(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

SELECT *
FROM sample;

CREATE TABLE customers
(
    id    VARCHAR(100) NOT NULL,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT unique_email UNIQUE (email),
    CONSTRAINT unique_phone UNIQUE (phone)
) ENGINE = InnoDB;

SELECT *
FROM customers;

DELETE
FROM customers
WHERE id = 3
   or id = 2;

CREATE TABLE products
(
    id       VARCHAR(100) NOT NULL,
    name     VARCHAR(100) NOT NULL,
    price    INT          NOT NULL,
    stock    INT          NOT NULL,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

INSERT INTO products(id, name, price, stock, category)
VALUES ('P0001', 'A', 1000, 100, 'K1'),
       ('P0002', 'B', 2000, 200, 'K1'),
       ('P0003', 'C', 3000, 300, 'K1'),
       ('P0004', 'D', 4000, 400, 'K1'),
       ('P0005', 'E', 5000, 500, 'K1');

DELETE
FROM products;

SELECT *
FROM products;

CREATE TABLE categories
(
    id   int          NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

SELECT *
FROM categories;

DESC customers;

CREATE TABLE wallet
(
    id          VARCHAR(100) NOT NULL,
    balance     INT          NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_customer_wallet FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT unique_customer_wallet UNIQUE (customer_id)
) ENGINE = InnoDB;

CREATE TABLE comments
(
    id          INT          NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(100) NOT NULL,
    title       VARCHAR(200) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),
    CONSTRAINT fk_customer_comments FOREIGN KEY (customer_id) REFERENCES customers (id)
) ENGINE = InnoDB;

SELECT *
FROM comments;

INSERT INTO comments(customer_id, title, description)
VALUES ('1', 'Comment 1', 'Sample comment 1'),
       ('1', 'Comment 2', 'Sample comment 2'),
       ('2', 'Comment 3', 'Sample comment 3'),
       ('3', 'Comment 4', 'Sample comment 4');

CREATE TABLE likes
(
    customer_id VARCHAR(100) NOT NULL,
    product_id  VARCHAR(100) NOT NULL,
    PRIMARY KEY (customer_id, product_id),
    CONSTRAINT fk_customer_likes FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT fk_product_likes FOREIGN KEY (product_id) REFERENCES products (id)
) ENGINE = InnoDB

SELECT *
FROM likes;

CREATE TABLE _loves
(
    A VARCHAR(100) NOT NULL,
    B VARCHAR(100) NOT NULL,
    PRIMARY KEY (A, B),
    CONSTRAINT fk_A FOREIGN KEY (A) REFERENCES customers (id),
    CONSTRAINT fk_B FOREIGN KEY (B) REFERENCES products (id)
) ENGINE = InnoDB;

SELECT *
FROM _loves;

CREATE DATABASE belajar_nodejs_prisma;

use belajar_nodejs_prisma;

SHOW TABLES;
