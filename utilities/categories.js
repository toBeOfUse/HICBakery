export const categoryJoinQuery = `
select categories.description as category_description, * from categories
    left join product_categories on categories.name=product_categories.category_name
    left join products on product_categories.product_id=products.id`;

export function batchProductsByCategory(products) {
  const groupedProducts = {};
  for (const product of products) {
    if (!(product.category_name in groupedProducts)) {
      groupedProducts[product.category_name] = [product];
    } else {
      groupedProducts[product.category_name].push(product);
    }
  }
  return Object.values(groupedProducts);
}
