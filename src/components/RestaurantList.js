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
    description: 'Restaurant et bar à vin combinant cuisine raffinée et sélection pointue de vins.',
    hours: 'Ouvert du mardi au samedi, 12h-14h30 et 19h-00h'
  },
  {
    id: 3,
    name: 'L\'Atelier Restaurant',
    rating: 4.8,
    address: '24 Av. des Ecuries Conti',
    phone: '01 34 08 02 00',
    description: 'Un établissement élégant qui propose une cuisine française contemporaine.',
    hours: 'Du mardi au samedi 9h-15h et 18h-00h, dimanche 9h-17h'
  },
  {
    id: 4,
    name: 'La Cambuse',
    rating: 4.6,
    address: '71 Av. Valéry Giscard d\'Estaing',
    phone: '01 34 69 08 24',
    description: 'Restaurant local authentique offrant une cuisine française traditionnelle de qualité.',
    hours: 'Mardi-samedi 10h-14h et 19h-22h30'
  },
  {
    id: 5,
    name: 'Table de Cassan',
    rating: 4.6,
    address: '2 Av. Michel Poniatowski',
    phone: '01 34 73 29 22',
    description: 'Tenu par un couple passionné, ce restaurant propose une cuisine raffinée où le chef crée des plats originaux.',
    hours: 'Du mardi au jeudi 12h-14h, vendredi et samedi 12h-14h et 19h30-21h30, dimanche 12h-14h'
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