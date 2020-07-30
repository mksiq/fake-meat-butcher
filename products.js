var products = [
  {
    id: 1,
    name: 'Beyond Burger',
    description: 'Plant-based Patties.',
    brand: 'Beyond Meat',
    category: ['hamburger', 'vegan'],
    weight: 226,
    price: 10.9,
    available: true,
    discount: 0
  },
  {
    id: 2,
    name: 'Beyond Beef',
    description: 'Plant-based Beef.',
    brand: 'Beyond Meat',
    category: ['beef', 'vegan'],
    weight: 453,
    price: 15.9,
    available: true,
    discount: 0
  },
  {
    id: 3,
    name: 'Lightlife Burger',
    description: 'Plant-based Pattie.',
    brand: 'Lightlife',
    category: ['hamburger'],
    weight: 400,
    price: 11.5,
    available: true,
    discount: 0
  },
  {
    id: 4,
    name: 'Beyond Sausage',
    description: 'Plant-based Sausage.',
    brand: 'Beyond Meat',
    category: ['sausage', 'vegan'],
    weight: 400,
    price: 11.5,
    available: true,
    discount: 0
  },
  {
    id: 5,
    name: 'Beyond Breakfast',
    description: 'Plant sausage.',
    brand: 'Beyond Meat',
    category: ['sausage', 'vegan', 'other'],
    weight: 226,
    price: 12.3,
    available: true,
    discount: 0
  },
  {
    id: 6,
    name: 'Lightlife Hot Dogs',
    description: 'Plant-based Hot Dogs.',
    brand: 'Lightlife',
    category: ['sausage', 'vegan'],
    weight: 340,
    price: 9.7,
    available: true,
    discount: 0
  },
  {
    id: 7,
    name: 'Lightlife Tenders',
    description: 'Plant-based Chicken.',
    brand: 'Lightlife',
    category: ['chicken', 'other', 'vegan'],
    weight: 170,
    price: 6.3,
    available: true,
    discount: 0
  },
  {
    id: 8,
    name: 'Lightlife Ground',
    description: 'Plant-based Chicken.',
    brand: 'Lightlife',
    category: ['beef', 'other', 'vegan'],
    weight: 340,
    price: 6.3,
    available: true,
    discount: 0
  },
  {
    id: 9,
    name: 'Yves GF Burger',
    description: 'Plant-gluten free Patties.',
    brand: 'Yves Veggie',
    category: ['hamburger', 'vegan'],
    weight: 300,
    price: 8.85,
    available: true,
    discount: 0
  },
  {
    id: 10,
    name: 'Yves Ground Meat',
    description: 'Plant-based Ground.',
    brand: 'Yves Veggie',
    category: ['beef', 'vegan'],
    weight: 340,
    price: 11.8,
    available: true,
    discount: 0
  },
  {
    id: 3,
    name: 'Lightlife Burger',
    description: 'Plant-based Pattie.',
    brand: 'Lightlife',
    category: ['hamburger'],
    weight: 400,
    price: 11.5,
    available: true,
    discount: 0
  },
  {
    id: 4,
    name: 'Beyond Sausage',
    description: 'Plant-based Sausage.',
    brand: 'Beyond Meat',
    category: ['sausage', 'vegan'],
    weight: 400,
    price: 11.5,
    available: true,
    discount: 0
  },
  {
    id: 2,
    name: 'Beyond BURGOYSE',
    description: 'Plant-based Patties.',
    brand: 'Beyond Meat',
    category: ['hamburger', 'vegan'],
    weight: 226,
    price: 10.9,
    available: true,
    discount: 0
  },
  {
    id: 3,
    name: 'Beyond Beef',
    description: 'Plant-based Beef.',
    brand: 'Beyond Meat',
    category: ['beef', 'vegan'],
    weight: 453,
    price: 15.9,
    available: true,
    discount: 0
  },
  {
    id: 3,
    name: 'Lightlife Burger',
    description: 'Plant-based Pattie.',
    brand: 'Lightlife',
    category: ['hamburger'],
    weight: 400,
    price: 11.5,
    available: true,
    discount: 0
  },
  {
    id: 3,
    name: 'Lightlife Burger',
    description: 'Plant-based Pattie.',
    brand: 'Lightlife',
    category: ['hamburger'],
    weight: 400,
    price: 11.5,
    available: true,
    discount: 0
  },
  {
    id: 3,
    name: 'Lightlife Burger',
    description: 'Plant-based Pattie.',
    brand: 'Lightlife',
    category: ['hamburger'],
    weight: 400,
    price: 11.5,
    available: true,
    discount: 0
  },
  {
    id: 3,
    name: 'Lightlife Burger',
    description: 'Plant-based Pattie.',
    brand: 'Lightlife',
    category: ['hamburger'],
    weight: 400,
    price: 11.5,
    available: true,
    discount: 0
  },
  {
    id: 4,
    name: 'Beyond SAUSAUGE',
    description: 'Plant-based Sausage.',
    brand: 'Beyond Meat',
    category: ['sausage', 'vegan'],
    weight: 400,
    price: 11.5,
    available: true,
    discount: 0
  },  {
    id: 6,
    name: 'Lightlife Hot Dogs',
    description: 'Plant-based Hot Dogs.',
    brand: 'Lightlife',
    category: ['sausage', 'vegan'],
    weight: 340,
    price: 9.7,
    available: true,
    discount: 0
  },
  {
    id: 7,
    name: 'Lightlife Tenders',
    description: 'Plant-based Chicken.',
    brand: 'Lightlife',
    category: ['chicken', 'other', 'vegan'],
    weight: 170,
    price: 6.3,
    available: true,
    discount: 0
  },
  {
    id: 8,
    name: 'Lightlife Ground',
    description: 'Plant-based Chicken.',
    brand: 'Lightlife',
    category: ['beef', 'other', 'vegan'],
    weight: 340,
    price: 6.3,
    available: true,
    discount: 0
  },
  {
    id: 9,
    name: 'Yves GF Burger',
    description: 'Plant-gluten free Patties.',
    brand: 'Yves Veggie',
    category: ['hamburger', 'vegan'],
    weight: 300,
    price: 8.85,
    available: true,
    discount: 0
  },
  {
    id: 10,
    name: 'Yves Ground Meat',
    description: 'Plant-based Ground.',
    brand: 'Yves Veggie',
    category: ['beef', 'vegan'],
    weight: 340,
    price: 11.8,
    available: true,
    discount: 0
  },
];
