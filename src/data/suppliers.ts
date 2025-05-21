import { Supplier } from '../types';

export const suppliers: Supplier[] = [
  {
    id: 'cj-cheiljedang',
    name: 'CJ Cheiljedang',
    logo: 'https://images.pexels.com/photos/10526929/pexels-photo-10526929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'South Korea\'s largest food company, offering a wide range of products from condiments to ready meals.',
    products: [
      {
        id: 'cj-1',
        name: 'Bibigo Mandu',
        description: 'Traditional Korean dumplings filled with meat and vegetables.',
        image: 'https://images.pexels.com/photos/6055421/pexels-photo-6055421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'CJ Cheiljedang',
        category: 'Frozen'
      },
      {
        id: 'cj-2',
        name: 'Gochujang',
        description: 'Hot pepper paste essential for Korean cooking.',
        image: 'https://images.pexels.com/photos/2252587/pexels-photo-2252587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'CJ Cheiljedang',
        category: 'Condiments'
      },
      {
        id: 'cj-3',
        name: 'Bibigo Kimchi',
        description: 'Traditional fermented cabbage with seasonings.',
        image: 'https://images.pexels.com/photos/1630495/pexels-photo-1630495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'CJ Cheiljedang',
        category: 'Fermented'
      }
    ]
  },
  {
    id: 'nongshim',
    name: 'Nongshim',
    logo: 'https://images.pexels.com/photos/9242870/pexels-photo-9242870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Leading manufacturer of instant noodles and snacks, famous for Shin Ramyun.',
    products: [
      {
        id: 'nongshim-1',
        name: 'Shin Ramyun',
        description: 'Korea\'s #1 instant noodle brand with spicy broth.',
        image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Nongshim',
        category: 'Noodles'
      },
      {
        id: 'nongshim-2',
        name: 'Shrimp Crackers',
        description: 'Light and crispy shrimp-flavored snacks.',
        image: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Nongshim',
        category: 'Snacks'
      },
      {
        id: 'nongshim-3',
        name: 'Chapagetti',
        description: 'Instant black bean noodles inspired by Jajangmyeon.',
        image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Nongshim',
        category: 'Noodles'
      }
    ]
  },
  {
    id: 'lotte',
    name: 'Lotte',
    logo: 'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Major Korean conglomerate producing popular snacks and beverages.',
    products: [
      {
        id: 'lotte-1',
        name: 'Pepero',
        description: 'Thin cookie sticks dipped in chocolate coating.',
        image: 'https://images.pexels.com/photos/40986/chocolate-chocolates-candy-bar-sweet-40986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Lotte',
        category: 'Snacks'
      },
      {
        id: 'lotte-2',
        name: 'Milkis',
        description: 'Carbonated milk-flavored soft drink.',
        image: 'https://images.pexels.com/photos/2664257/pexels-photo-2664257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Lotte',
        category: 'Beverages'
      },
      {
        id: 'lotte-3',
        name: 'Choco Pie',
        description: 'Chocolate-covered mini cakes with marshmallow filling.',
        image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Lotte',
        category: 'Snacks'
      }
    ]
  },
  {
    id: 'chumchurum',
    name: 'Chumchurum',
    logo: 'https://images.pexels.com/photos/14296430/pexels-photo-14296430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Premium soju brand known for its smooth taste and clean finish.',
    products: [
      {
        id: 'chumchurum-1',
        name: 'Original Soju',
        description: 'Traditional Korean rice liquor with clean taste.',
        image: 'https://images.pexels.com/photos/390023/pexels-photo-390023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Chumchurum',
        category: 'Beverages'
      },
      {
        id: 'chumchurum-2',
        name: 'Flavored Soju',
        description: 'Fruit-flavored soju variants including grapefruit, peach, and apple.',
        image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Chumchurum',
        category: 'Beverages'
      }
    ]
  },
  {
    id: 'paldo',
    name: 'Paldo',
    logo: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Manufacturer of popular instant noodles and traditional Korean foods.',
    products: [
      {
        id: 'paldo-1',
        name: 'Kokomen Spicy Chicken Noodles',
        description: 'Instant noodles with spicy chicken flavor.',
        image: 'https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-a-bowl-of-ramen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Paldo',
        category: 'Noodles'
      },
      {
        id: 'paldo-2',
        name: 'Bibim Men',
        description: 'Cold spicy mixed noodles, ready in minutes.',
        image: 'https://images.pexels.com/photos/5900731/pexels-photo-5900731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Paldo',
        category: 'Noodles'
      }
    ]
  },
  {
    id: 'ottogi',
    name: 'Ottogi',
    logo: 'https://images.pexels.com/photos/17515108/pexels-photo-17515108/free-photo-of-korean-condiments-for-sale-at-a-market.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Leading food company specializing in instant noodles, curry, and seasoning products.',
    products: [
      {
        id: 'ottogi-1',
        name: 'Jin Ramen',
        description: 'Popular instant noodles with rich, spicy broth.',
        image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Ottogi',
        category: 'Noodles'
      },
      {
        id: 'ottogi-2',
        name: 'Curry Powder',
        description: 'Korean-style curry powder for making delicious curry dishes.',
        image: 'https://images.pexels.com/photos/4198935/pexels-photo-4198935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Ottogi',
        category: 'Condiments'
      },
      {
        id: 'ottogi-3',
        name: 'Sesame Oil',
        description: 'Premium roasted sesame oil for authentic Korean flavor.',
        image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Ottogi',
        category: 'Condiments'
      }
    ]
  },
  {
    id: 'okf',
    name: 'OKF',
    logo: 'https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Manufacturer of popular aloe vera drinks and other beverages.',
    products: [
      {
        id: 'okf-1',
        name: 'Aloe Vera King',
        description: 'Refreshing beverage with real aloe vera pieces.',
        image: 'https://images.pexels.com/photos/1937743/pexels-photo-1937743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'OKF',
        category: 'Beverages'
      },
      {
        id: 'okf-2',
        name: 'Coconut Drink',
        description: 'Smooth coconut beverage with coconut pulp.',
        image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'OKF',
        category: 'Beverages'
      }
    ]
  },
  {
    id: 'samyang',
    name: 'Samyang',
    logo: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Famous for extremely spicy "Hot Chicken Flavor" instant noodles and other food products.',
    products: [
      {
        id: 'samyang-1',
        name: 'Hot Chicken Ramen',
        description: 'Ultra-spicy instant noodles with chicken flavor.',
        image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Samyang',
        category: 'Noodles'
      },
      {
        id: 'samyang-2',
        name: 'Carbonara Fire Noodles',
        description: 'Creamy carbonara flavor with signature spiciness.',
        image: 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Samyang',
        category: 'Noodles'
      },
      {
        id: 'samyang-3',
        name: 'Hot Chicken Snacks',
        description: 'Crunchy snacks with intense hot chicken flavor.',
        image: 'https://images.pexels.com/photos/1373915/pexels-photo-1373915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Samyang',
        category: 'Snacks'
      }
    ]
  },
  {
    id: 'yeonho',
    name: 'Yeonho',
    logo: 'https://images.pexels.com/photos/7624356/pexels-photo-7624356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Specializes in traditional fermented Korean foods, including various types of kimchi.',
    products: [
      {
        id: 'yeonho-1',
        name: 'Cabbage Kimchi',
        description: 'Traditional fermented napa cabbage with Korean spices.',
        image: 'https://images.pexels.com/photos/1630495/pexels-photo-1630495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Yeonho',
        category: 'Fermented'
      },
      {
        id: 'yeonho-2',
        name: 'Radish Kimchi',
        description: 'Spicy fermented Korean radish kimchi.',
        image: 'https://images.pexels.com/photos/7177310/pexels-photo-7177310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Yeonho',
        category: 'Fermented'
      },
      {
        id: 'yeonho-3',
        name: 'Soybean Paste',
        description: 'Traditional Korean fermented soybean paste (Doenjang).',
        image: 'https://images.pexels.com/photos/3596683/pexels-photo-3596683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        supplier: 'Yeonho',
        category: 'Fermented'
      }
    ]
  }
];