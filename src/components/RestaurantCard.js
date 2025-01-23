import React from 'react';
import styles from './RestaurantCard.module.css';

const getGoogleMapsLink = (name, address) => {
  const query = encodeURIComponent(`${name}, ${address}, L'Isle-Adam, France`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

const RestaurantCard = ({ restaurant }) => {
  const { name, rating, address, phone, description, hours } = restaurant;

  return (
    <div className={styles.card}>
      <div className={styles.rating}>{rating} ⭐</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.info}>
        📍 {address}<br />
        📞 {phone}
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.hours}>🕒 {hours}</div>
      <a 
        href={getGoogleMapsLink(name, address)} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.mapLink}
      >
        Voir sur Google Maps 🗺️
      </a>
    </div>
  );
};

export default RestaurantCard;