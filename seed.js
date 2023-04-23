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
    name varchar(50) primary key,
    featured boolean,
    description text
);
create table if not exists products (
    id integer primary key autoincrement,
    name varchar(200) not null,
    description text not null,
    price integer not null,  -- stores number of cents. non-ints have precision issues
    photo_file_name varchar(50) not null,
    in_stock boolean not null default true,
    ingredients text  -- JSON array
);

 create table if not exists product_categories (
    product_id integer references products(id),
    category_name varchar(50) references categories(name),
    primary key (product_id, category_name)
);

create table if not exists carts (
    id integer primary key autoincrement,
    user_id integer default 1,  -- in case we do multiple users
    product_id integer references products(id),
    quantity integer default 1
);
create table if not exists allergens (
    allergen_name varchar(50) primary key,
    alternatives text  -- JSON array
);
`);

db.exec(`
-- TYPES
insert or replace into categories
    (name, featured, description)
    values ('cakes', true, 'these are cakes!');

insert or replace into categories
    (name, featured, description)
    values ('cupcakes', false, 'these are cupcakes!');

insert or replace into categories
    (name, featured, description)
    values ('cookies', false, 'these are cookies!');

-- FLAVORS
insert or replace into categories
    (name, featured, description)
    values ('chocolate', false, 'this is chocolate!');

insert or replace into categories
    (name, featured, description)
    values ('vanilla', false, 'this is vanilla!');

insert or replace into categories
    (name, featured, description)
    values ('caramel', false, 'this is caramel!');

insert or replace into categories
    (name, featured, description)
    values ('coconut', false, 'this is coconut!');

-- OCCASIONS
insert or replace into categories
    (name, featured, description)
    values ('birthday', false, 'this is for a birthday!');

insert or replace into categories
    (name, featured, description)
    values ('celebration', false, 'this is for a celebration!');

insert or replace into categories
    (name, featured, description)
    values ('casual', false, 'this is for casual!');

insert or replace into allergens
    (allergen_name, alternatives)
    values (
        'vanilla extract',
        '${JSON.stringify(["corn syrup", "pure sugar"])}'
    );
`);

function createProduct(name="", description="", price=0, categories=[], ingredients=[]) {
    const photoFileName = name.toLowerCase().replaceAll(" ", "_") + ".jpg";
    console.log(photoFileName);
    const id = db.prepare(
        `insert into products
        (name, description, price, photo_file_name, ingredients)
        values (?, ?, ?, ?, ?)`
        ).run(name, description, price, photoFileName, JSON.stringify(ingredients)).lastInsertRowid;
    categories.forEach(category => {
        db.prepare(
            `insert into product_categories (product_id, category_name)
            values (?, ?)`
        ).run(id, category);
    });
}

createProduct("Chocolate Cake", "this is a chocolate cake", 1099, ["cakes", "chocolate", "birthday"], ["flour", "vanilla extract", "chocolate"]);
createProduct("Chocolate Cake", "this is a chocolate cake", 1099, ["cakes", "chocolate", "birthday"], ["flour", "vanilla extract", "chocolate"]);
createProduct("Chocolate Cake", "this is a chocolate cake", 1099, ["cakes", "chocolate", "birthday"], ["flour", "vanilla extract", "chocolate"]);
createProduct("Chocolate Cake", "this is a chocolate cake", 1099, ["cakes", "chocolate", "birthday"], ["flour", "vanilla extract", "chocolate"]);


