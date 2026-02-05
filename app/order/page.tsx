import styles from './page.module.css';
import FarmCard from './components/farmCard'
import { farms } from './data/farms';
import Header from '../../components/header/header';

export default function Order() {
  return (
    <div className={styles.container}>
      <Header />

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
