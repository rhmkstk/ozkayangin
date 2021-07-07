import styles from './footer.module.css'
import FacebookIcon from '@/components/icons/facebook-icon'
import InstagramIcon from '@/components/icons/instagram-icon'
import TwitterIcon from '@/components/icons/twitter-icon'


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://facebook.com/ozkayangin" target="_blank">
        <FacebookIcon />
        </a>
        <a href="https://instagram.com/ozkayangin" target="_blank">
        <InstagramIcon />
        </a>
        <a href="https://twitter.com/ozkayangin" target="_blank">
        <TwitterIcon />
        </a>
        
        
        
      </div>
      <p>Bu web sitesi açık kaynaklı! kodlarına <a href="https://github.com/rhmkstk/ozkayangin-website" target="blank">buradan</a> ulaşabilirsiniz.</p>
    </div>
  )
}

export default Footer
