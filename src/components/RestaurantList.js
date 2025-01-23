import React from 'react';
import RestaurantCard from './RestaurantCard';
import styles from './RestaurantList.module.css';

const restaurants = [
  {
    id: 1,
    name: 'Lokanta SteakHouse',
    rating: 4.9,
    address: '10 Av. des Ecuries Conti',
    phone: '01 78 86 68 24',
    description: 'Un steakhouse moderne et raffiné qui a conquis les habitants de L\'Isle-Adam avec ses viandes de qualité et son service impeccable.',
    hours: 'Ouvert tous les jours sauf mardi, de 9h à 23h'
  },
  {
    id: 2,
    name: 'L\'Ami Pinot',
    rating: 4.9,
    address: '8 Place du Patis',
    phone: '01 34 08 22 11',
    description: 'Restaurant et bar à vin combinant cuisine raffinée et sélection pointue de vins. Le propriétaire Thomas et son équipe créent une ambiance conviviale.',
    hours: 'Du mardi au samedi, 12h-14h30 et 19h-00h'
  },
  {
    id: 3,
    name: 'L\'Atelier Restaurant',
    rating: 4.8,
    address: '24 Av. des Ecuries Conti',
    phone: '01 34 08 02 00',
    description: 'Un établissement élégant qui propose une cuisine française contemporaine dans un cadre raffiné.',
    hours: 'Du mardi au samedi 9h-15h et 18h-00h, dimanche 9h-17h'
  },
  {
    id: 4,
    name: 'Le Shadock',
    rating: 4.8,
    address: '4 Mail du Pavillon',
    phone: '01 34 69 01 67',
    description: 'Un lieu branché offrant une ambiance unique avec une cuisine moderne et créative.',
    hours: 'Du mardi au dimanche, soir uniquement'
  },
  {
    id: 5,
    name: 'THE BEEF\'YS',
    rating: 4.7,
    address: '37 Av. Michel Poniatowski',
    phone: '01 34 08 02 03',
    description: 'Spécialiste de la viande proposant des coupes de qualité dans un cadre contemporain.',
    hours: 'Du mardi au dimanche, midi et soir'
  },
  {
    id: 6,
    name: 'La Cambuse',
    rating: 4.6,
    address: '71 Av. Valéry Giscard d\'Estaing',
    phone: '01 34 69 08 24',
    description: 'Restaurant local authentique offrant une cuisine française traditionnelle de qualité.',
    hours: 'Mardi-samedi 10h-14h et 19h-22h30'
  },
  {
    id: 7,
    name: 'Le Petit Vatel',
    rating: 4.6,
    address: '7 Bis Rue Saint-Lazare',
    phone: '01 34 69 00 90',
    description: 'Bistrot traditionnel proposant une cuisine française authentique dans un cadre chaleureux.',
    hours: 'Du mardi au samedi, midi et soir'
  },
  {
    id: 8,
    name: 'Table de Cassan',
    rating: 4.6,
    address: '2 Av. Michel Poniatowski',
    phone: '01 34 73 29 22',
    description: 'Cuisine raffinée préparée par un chef passionné, notamment réputé pour ses desserts.',
    hours: 'Du mardi au dimanche midi, vendredi et samedi soir'
  },
  {
    id: 9,
    name: 'L\'Imprevu',
    rating: 4.6,
    address: 'Rue du Guillery',
    phone: '01 34 69 39 90',
    description: 'Bar-restaurant convivial proposant une cuisine bistrot dans une ambiance décontractée.',
    hours: 'Du mardi au dimanche'
  },
  {
    id: 10,
    name: 'Le Loft',
    rating: 4.5,
    address: '16 Grande Rue',
    phone: '01 34 69 77 78',
    description: 'Cadre moderne et élégant pour une cuisine créative et raffinée.',
    hours: 'Du mardi au samedi, midi et soir'
  },
  {
    id: 11,
    name: 'Les Enfants Terribles',
    rating: 4.5,
    address: '33 bis Grande Rue',
    phone: '01 34 69 02 61',
    description: 'Restaurant-bar proposant une cuisine moderne dans une ambiance branchée.',
    hours: 'Du mercredi au dimanche'
  },
  {
    id: 12,
    name: 'Le Nautilus',
    rating: 4.4,
    address: '11 Rue de Conti',
    phone: '01 34 69 00 90',
    description: 'Restaurant familial offrant une cuisine traditionnelle dans un cadre agréable.',
    hours: 'Du mardi au dimanche, midi et soir'
  },
  {
    id: 13,
    name: 'Gigi L\'Isle Adam',
    rating: 4.4,
    address: '4 Mail du Pavillon',
    phone: '01 34 08 19 14',
    description: 'Restaurant italien authentique proposant pizzas et spécialités maison.',
    hours: 'Du mardi au dimanche'
  },
  {
    id: 14,
    name: 'Le Mauricette',
    rating: 4.3,
    address: '6 Pl. du Patis',
    phone: '01 34 69 01 76',
    description: 'Bistrot chaleureux servant une cuisine traditionnelle française de qualité.',
    hours: 'Du mardi au dimanche midi'
  },
  {
    id: 15,
    name: 'Le Tropézien',
    rating: 4.3,
    address: '4 Mail du Pavillon',
    phone: '01 34 69 39 29',
    description: 'Restaurant méditerranéen offrant une cuisine ensoleillée dans un cadre agréable.',
    hours: 'Du mardi au dimanche'
  },
  {
    id: 16,
    name: 'Le Nid Restaurant',
    rating: 4.3,
    address: '15 Quai de l\'Oise',
    phone: '01 34 69 35 61',
    description: 'Vue imprenable sur l\'Oise et cuisine traditionnelle soignée.',
    hours: 'Du mercredi au dimanche'
  },
  {
    id: 17,
    name: 'Le Purple 2',
    rating: 4.2,
    address: '2 Pl. du Patis',
    phone: '01 34 08 19 19',
    description: 'Bar-restaurant branché proposant une cuisine fusion dans une ambiance moderne.',
    hours: 'Du mardi au dimanche'
  },
  {
    id: 18,
    name: 'La Môme',
    rating: 4.2,
    address: '23 Quai de l\'Oise',
    phone: '01 34 69 39 83',
    description: 'Restaurant avec terrasse offrant une vue sur l\'Oise et une cuisine bistrot.',
    hours: 'Du mercredi au dimanche'
  },
  {
    id: 19,
    name: 'Amicitia Restaurant',
    rating: 4.0,
    address: 'Chemin Pierre Terver',
    phone: '01 34 69 01 68',
    description: 'Restaurant d\'hôtel proposant une cuisine traditionnelle dans un cadre élégant.',
    hours: 'Tous les jours'
  },
  {
    id: 20,
    name: 'L\'Affiche bis',
    rating: 3.9,
    address: '13 bis Quai de l\'Oise',
    phone: '01 34 69 39 29',
    description: 'Restaurant au bord de l\'eau proposant une cuisine française classique.',
    hours: 'Du mardi au dimanche'
  }
];

const RestaurantList = () => {
  return (
    <div className={styles.list}>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;