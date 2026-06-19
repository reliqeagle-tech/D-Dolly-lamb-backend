import { generateSeoUrlParts } from "../utils/slugify";

const getProductUrl = (product) => {
    const {
        categorySlug, subCategorySlug, productSlug, skuSlug,
    } = generateSeoUrlParts(
        product.category,
        product.subCategory,
        product.name,
        product.sku
    );

    return `/product/${categorySlug}/${subCategorySlug}/${productSlug}/${skuSlug}`;
};

<Link to={getProductUrl(product)}>
    <img src={product.image[0]} alt={product.name} />
</Link>