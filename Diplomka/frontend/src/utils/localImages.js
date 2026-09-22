import { imageUrl } from '../api/http';

const CATEGORY_IMAGES = {
  'Dry & Wet Food': 'dry wet food.png',
  'Litter Boxes & Litter Trays': 'Litter Boxes and Litter Trays.png',
  'Baskets & Beds': 'Baskets and Beds.png',
  Toys: 'toys.png',
  'Care & Grooming': 'Care and Grooming.png',
  'Snacks & Supplements': 'Snacks and Supplements.png',
  'Runs & Fencing': 'Runs and Fencing.png',
  'Trees & Scratching': 'Trees and Scratching.png',
};

const PRODUCT_IMAGES = {
  'BELCANDO Mini Dog Food': 'BELCANDO Mini Dog Food.png',
  'GranataPet Mini Royal Poultry, Dry Food for Dogs': 'GranataPet Mini Royal Poultry Dry Food for Dogs.png',
  'animonda Carny Dry Cat Food for Adult Cats': 'animonda Carny Dry Cat Food for Adult Cats.png',
  'Dehner Wild Nature Wet Dog Food': 'Dehner Wild Nature Wet Dog Food.png',
  'PERFECT FIT Adult Dry Food for Adults': 'PERFECT FIT Adult Dry Food for Adults.png',
  'MERA Pure Sensitive Turkey, Wet Dog Food': 'MERA Pure Sensitive Turkey Wet Dog Food.png',
  'Edgard & Cooper Dog Food Wet Godfather Dog Adult': 'Edgard and Cooper Dog Food Wet Godfather Dog Adult.png',
  'Royal Canin Veterinary Renal | Twin Pack': 'Royal Canin Veterinary Renal  Twin Pack.png',
  'Dry Dog Food for Adult Dogs': 'Dry Dog Food for Adult Dogs.png',
  'Feandrea Cat Litter Tray with Lid': 'Feandrea Cat Litter Tray with Lid.png',
  'UBPET C20 Selbstreinigende Katzentoilette': 'UBPET C20 Selbstreinigende Katzentoilette.png',
  'Ultra Cat Litter Tray Self-Cleaning': 'Ultra Cat Litter Tray Self-Cleaning.png',
  'Bedsure Washable Dog Basket Medium Dogs': 'Bedsure Washable Dog Basket Medium Dogs.png',
  'Bedsure Orthopaedic Dog Bed, Ergonomic Dog Sofa': 'Bedsure Orthopaedic Dog Bed Ergonomic Dog Sofa.png',
  'Black Dog Bed, Large Dogs': 'Black Dog Bed Large Dogs.png',
  'Cat Toy with Real Random Trajectory': 'Cat Toy with Real Random Trajectory.png',
  'Ballistol Animal 28-Piece Towel - Multi-Colour': 'Ballistol Animal 28-Piece Towel - Multi-Colour.png',
  'Pet Brush for Short Hair': 'Pet Brush for Short Hair.png',
  'ESTEXO Cat Scratching Post Scratching': 'ESTEXO Cat Scratching Post Scratching.png',
};

export const getCategoryImage = (category) => {
  const file = CATEGORY_IMAGES[category.title];
  return file ? `/images/categories/${encodeURIComponent(file)}` : imageUrl(category.image);
};

export const getProductImage = (product) => {
  const file = PRODUCT_IMAGES[product.title];
  return file ? `/images/cards/${encodeURIComponent(file)}` : imageUrl(product.image);
};
