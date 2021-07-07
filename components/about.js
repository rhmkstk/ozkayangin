import styles from './about.module.css'

function About() {
  return (
    <section id="about" className={styles.container}>
      <h2>HAKKIMIZDA</h2>
      <p>
        ÖZ-KA Yangın Söndürme Sistemleri, 1988 yılından bu yana, yangından
        korunum ve yangın söndürme sistemleri alanında hizmet vermektedir.
        Sektörde 33 yılı aşkın süredir hizmet veren firmamız, alanında
        geliştirdiği tecrübesine, teknik bilgi ve beceriyi de ekleyerek yoluna
        devam etmektedir. ÖZ-KA Yangın Söndürme Sistemleri, kendini devamlı
        geliştirmeye yönelik politikası ile kaliteyi, müşteri memnuniyetini ve
        güvenirliliğini ilke edinmektedir.
      </p>
    </section>
  )
}

export default About
