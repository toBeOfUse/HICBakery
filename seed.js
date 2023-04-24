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
    values ('vanilla', true, 'this is vanilla!');

insert or replace into categories
    (name, featured, description)
    values ('caramel', false, 'this is caramel!');

insert or replace into categories
    (name, featured, description)
    values ('coconut', false, 'this is coconut!');

-- OCCASIONS
insert or replace into categories
    (name, featured, description)
    values ('birthday', true, 'this is for a birthday!');

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

function createProduct(
  name = "",
  description = "",
  price = 0,
  categories = [],
  ingredients = []
) {
  const photoFileName = name.toLowerCase().replaceAll(" ", "_") + ".jpg";
  console.log(photoFileName);
  const id = db
    .prepare(
      `insert into products
        (name, description, price, photo_file_name, ingredients)
        values (?, ?, ?, ?, ?)`
    )
    .run(
      name,
      description,
      price,
      photoFileName,
      JSON.stringify(ingredients)
    ).lastInsertRowid;
  categories.forEach((category) => {
    db.prepare(
      `insert into product_categories (product_id, category_name)
            values (?, ?)`
    ).run(id, category);
  });
}

createProduct(
  "Chocolate Cake",
  "this is a chocolate cake",
  1099,
  ["cakes", "chocolate", "birthday"],
  ["flour", "vanilla extract", "chocolate"]
);

createProduct(
  "Vanilla Cupcake",
  "a delightful vanilla cupcake with a hint of sweetness",
  299,
  ["cupcakes", "vanilla", "casual"],
  ["flour", "vanilla extract", "sugar"]
);

createProduct(
  "Caramel Cookie",
  "a scrumptious caramel cookie with a perfect balance of sweet and salty",
  199,
  ["cookies", "caramel", "casual"],
  ["flour", "caramel", "sugar"]
);

createProduct(
  "Coconut Cake",
  "a tropical coconut cake that transports you to paradise",
  1299,
  ["cakes", "coconut", "celebration"],
  ["flour", "coconut", "sugar"]
);

createProduct(
  "Chocolate Chip Cookie",
  "a classic chocolate chip cookie that's crunchy on the outside and chewy on the inside",
  249,
  ["cookies", "chocolate", "casual"],
  ["flour", "chocolate chips", "sugar"]
);

createProduct(
  "Red Velvet Cake",
  "an elegant red velvet cake with a velvety cream cheese frosting",
  1399,
  ["cakes", "celebration"],
  ["flour", "cocoa powder", "sugar", "red food coloring"]
);

createProduct(
  "Caramel Cupcake",
  "a rich caramel cupcake topped with a luscious caramel drizzle",
  349,
  ["cupcakes", "caramel", "celebration"],
  ["flour", "caramel", "sugar"]
);

createProduct(
  "Vanilla Raspberry Cake",
  "a light and refreshing vanilla cake with a tangy raspberry filling",
  1199,
  ["cakes", "vanilla", "birthday"],
  ["flour", "vanilla extract", "sugar", "raspberries"]
);

createProduct(
  "Coconut Macaroon",
  "a deliciously chewy coconut macaroon with a hint of almond",
  179,
  ["cookies", "coconut", "casual"],
  ["shredded coconut", "almond extract", "sugar"]
);

createProduct(
  "Carrot Cake",
  "a moist carrot cake packed with fresh carrots, walnuts, and raisins",
  1299,
  ["cakes", "birthday"],
  ["flour", "carrots", "sugar", "walnuts", "raisins"]
);

createProduct(
  "Lemon Cupcake",
  "a zesty lemon cupcake topped with a tangy lemon frosting",
  299,
  ["cupcakes", "celebration"],
  ["flour", "lemon zest", "sugar"]
);
