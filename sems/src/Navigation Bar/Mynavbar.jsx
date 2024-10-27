import styles from "./Desktop.module.css"

const Mynavbar = () => {
  return (
    <div className={styles.desktop2}>
      <header className={styles.fRAMEA}>
        <div className={styles.fRAMEB}>
          <div className={styles.eQUIPMENTSFrame}>
            <div className={styles.hOMEText}>
              <div className={styles.eLLIPSE} />
            </div>
            <a href="/" className={styles.home}>HOME</a>
            <div className={styles.cONTACTUSText}>
              <a href="/sports" className={styles.sports}>SPORTS</a>
            </div>
            <div className={styles.aBOUTUSFrame}>
              <a href="/equipments" className={styles.equipments}>EQUIPMENTS</a>
            </div>
            <div className={styles.aBOUTUSFrame1}>
              <a href="/aboutus" className={styles.aboutUs}>ABOUT US</a>
            </div>
            <a href="/contactus" className={styles.contactUs}>CONTACT US</a>
          </div>
          <div className={styles.div} />
          <div className={styles.fRAMEBChild} />
        </div>
      </header>
     
    </div>
  );
};

export default Mynavbar;

