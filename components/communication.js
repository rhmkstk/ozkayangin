import styles from './communication.module.css'
import MailIcon from '@/components/icons/mail-icon'
import PhoneIcon from '@/components/icons/phone-icon.js'
import LocationIcon from '@/components/icons/location-icon'

function Communication() {
  const cardsData = [
    { icon: <PhoneIcon />, text: '5064118487', href: 'tel:5064118487' },
    { icon: <MailIcon />, text: 'ozka@ozkayangin.com', href: 'mailto:ozka@ozkayangin.com' },
    {
      icon: <LocationIcon />,
      text: 'Kurtuluş Mahallesi Zübeyde Hanım Caddesi No:25/A Merkez / Uşak'
    }
  ]
  return (
    <section id="communication" className={styles.container}>
      <div className={styles.map}>
        <div className={styles.aspectRatio}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1535.980253480395!2d29.401746974357806!3d38.67546309916373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c87fc4521ff1ef%3A0xb852ff86807cb0fd!2zS3VydHVsdcWfLCDEsG5heSBTay4sIDY0MTAwIFXFn2FrIE1lcmtlei9VxZ9haw!5e0!3m2!1str!2str!4v1593713425606!5m2!1str!2str"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <div className={styles.content}>
        {cardsData.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>
              {item.icon}
            </div>
            <a href={item.href}>{item.text}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Communication
