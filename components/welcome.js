import styles from './welcome.module.css'
import NextImage from 'next/image'

function Welcome({photo}) {
  return (
    <section className={styles.welcome}>
      <NextImage src={photo.Attachments[0].url} alt={photo.Alt} layout="fill" />
    </section>
  )
}


export default Welcome
