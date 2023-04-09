/**
 * this file creates a database and seeds it with useful data for the website.
 * run it from the command line with `node seed.js`
 */

const sqlite = require("better-sqlite3");
const db = sqlite("bakery.sqlite3");

db.prepare("create table if not exists test_data (message string)").run();
const test_message = "hello world";
db.prepare("insert into test_data (message) values (?)").run(test_message);

db.exec(`
PRAGMA foreign_keys = ON;
create table if not exists categories (
    name string primary key,
    featured boolean
);
create table if not exists products (
    id integer primary key autoincrement,
    name varchar(200) not null,
    description text not null,
    price integer not null,  -- stores number of cents. non-ints have precision issues
    photo_file_name varchar(50) not null,
    in_stock boolean not null default true,
    category string references categories(name) not null,
    ingredients text  -- JSON array
);
create table if not exists carts (
    id integer primary key autoincrement,
    user_id integer default 1,  -- in case we do multiple users
    product_id integer references products(id),
    quantity integer default 1
);
`);

db.exec(`
insert or replace into categories
    (name, featured)
    values ('cakes', true);

insert or replace into products
    (name, description, price, photo_file_name, category, ingredients)
    values ('oakapple inside-out cake', 'this is a weird one.', 1000, 'inside_out.jpg', 'cakes', 
        '${JSON.stringify(["flour", "vanilla extract", "wood"])}');
`);
