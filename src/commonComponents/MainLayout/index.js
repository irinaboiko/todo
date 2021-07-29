import React from 'react';
import styles from './style.module.scss';

const MainLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
