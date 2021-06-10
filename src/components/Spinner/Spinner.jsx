import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinnerWrapper}>
    <Loader type="ThreeDots" color="#ac0404" height={80} width={80} />
  </div>
);

export default Spinner;
