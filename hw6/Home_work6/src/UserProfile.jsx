import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://randomuser.me/api/0.8');
      setUser(response.data.results[0].user);
    } catch (error) {
      console.error('Ошибка при загрузке пользователя:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading || !user) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.card}>
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className={styles.avatar}
      />
      <h2 className={styles.name}>
        {user.name.first} {user.name.last}
      </h2>
      <p className={styles.info}>Email: {user.email}</p>
      <p className={styles.info}>Phone: {user.phone}</p>
      <button className={styles.button} onClick={fetchUser}>
        Load New User
      </button>
    </div>
  );
}

export default UserProfile;