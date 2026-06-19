export const slugifyPart = (str = '', options = {}) => {
    const { maxWords = null, maxLength = null } = options;

    let value = String(str ?? '').trim();

    if (maxWords) {
        value = value
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, maxWords)
            .join(' ');
    }

    value = value
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');

    if (maxLength && value.length > maxLength) {
        value = value.slice(0, maxLength).replace(/-+$/g, '');
    }

    return value;
};

// Full SEO slug: category/subcategory/name/sku
export const generateSeoSlug = (name = '', category = '', subCategory = '', sku = '') => {
    return [
        slugifyPart(category),
        slugifyPart(subCategory),
        slugifyPart(name, { maxWords: 10, maxLength: 70 }),
        slugifyPart(sku)
    ].filter(Boolean).join('/');
};

// DB me store karne ke liye flat slug (/ ko - se replace)
export const generateFlatSlug = (name = '', category = '', subCategory = '', sku = '') => {
    return [
        slugifyPart(category),
        slugifyPart(subCategory),
        slugifyPart(name, { maxWords: 10, maxLength: 70 }),
        slugifyPart(sku)
    ].filter(Boolean).join('-');
};