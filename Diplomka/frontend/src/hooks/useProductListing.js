import { useMemo, useState } from 'react';

const effectivePrice = (product) => product.discont_price || product.price;

export const useProductListing = (items) => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  const filtered = useMemo(() => {
    let result = [...items];

    if (priceFrom !== '') {
      result = result.filter((item) => effectivePrice(item) >= Number(priceFrom));
    }
    if (priceTo !== '') {
      result = result.filter((item) => effectivePrice(item) <= Number(priceTo));
    }
    if (discountedOnly) {
      result = result.filter((item) => item.discont_price && item.discont_price < item.price);
    }

    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'price-asc':
        result.sort((a, b) => effectivePrice(a) - effectivePrice(b));
        break;
      case 'price-desc':
        result.sort((a, b) => effectivePrice(b) - effectivePrice(a));
        break;
      default:
        break;
    }

    return result;
  }, [items, priceFrom, priceTo, discountedOnly, sortBy]);

  return {
    filtered,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    discountedOnly,
    setDiscountedOnly,
    sortBy,
    setSortBy,
  };
};
