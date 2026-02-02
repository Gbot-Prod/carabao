import styles from './page.module.css';
import FarmCard from './components/farmCard'
import { farms } from './data/farms';

export default function Order() {
  return (
    <div className={styles.container}>
      
      <div className={styles.headerContainer}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <h1 className={styles.logo}>Carabao</h1>
          </div>
          <div className={styles.navRight}>
            <span className={styles.user}>Gilbert ▼</span>
            <span className={styles.lang}>EN ▼</span>
            <span className={styles.cart}>🛒</span>
          </div>
        </nav>

        {/* Address bar */}
        <div className={styles.addressBar}>
          <span className={styles.addressIcon}>📍</span>
          <span className={styles.addressLocation}>Dito</span>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button className={styles.tabActive}>🚗 Delivery</button>
          <button className={styles.tab}>🚶 </button>
          <button className={styles.tab}>🛒 </button>
          <button className={styles.tab}>🏪 </button>
          <button className={styles.tab}>🎉 </button>
        </div>
      </div>
      

      {/* Main content */}
      <main className={styles.main}>

        {/* Order section */}
        <section className={styles.section}>
          <h2>Order</h2>
          <div className={styles.farmGrid}>
            {farms.map((farm, index) => (
              <FarmCard key={index} farm={farm} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
