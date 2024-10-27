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
            <div className={styles.home}>HOME</div>
            <div className={styles.cONTACTUSText}>
              <div className={styles.sports}>SPORTS</div>
            </div>
            <div className={styles.aBOUTUSFrame}>
              <div className={styles.equipments}>EQUIPMENTS</div>
            </div>
            <div className={styles.aBOUTUSFrame1}>
              <div className={styles.aboutUs}>ABOUT US</div>
            </div>
            <div className={styles.contactUs}>CONTACT US</div>
          </div>
          <div className={styles.div} />
          <div className={styles.fRAMEBChild} />
        </div>
      </header>
      {/* <div className={styles.fORSTUDENTSFrame}>
        <div className={styles.rectangleA} />
        <div className={styles.fRAMEE}>
          <div className={styles.fORFACULTYText}>
            <div className={styles.aDMINLOGINFrame}>
              <h2 className={styles.forFaculty}>FOR FACULTY</h2>
              <div className={styles.userLoginText}>
                <div className={styles.fRAMEF}>
                  <div className={styles.adminLoginFrame} />
                  <div className={styles.adminLogin}>ADMIN LOGIN</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.forFacultyFrame}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          {/* <div className={styles.forStudentsFrame}>
            <h2 className={styles.forStudents}>FOR STUDENTS</h2>
            <div className={styles.forStudentsFrameChild} />
            <div className={styles.toKnowEquipments}>
              <i className={styles.toKnowAbout}>
                To know about available equipments
              </i>
              <div className={styles.userFrame}>
                <button className={styles.userLoginWrapper}>
                  <div className={styles.userLogin}>USER LOGIN</div>
                </button>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* // </div>  */}
    </div>
  );
};

export default Mynavbar;

