import { useState } from 'react'
import NextImage from 'next/image'
import styles from './documents.module.css'
import Glass from './icons/glass-icon'
import CloseIcon from './icons/close-icon'

function Documents({ photos }) {
  const [isShow, setIsShow] = useState(false)

  const pdfPath =
    'https://docs.google.com/gview?url=https://kms.kaysis.gov.tr/(X(1)S(uwywjtkyun2us3tgi42i4msa))/Home/Goster/136329?AspxAutoDetectCookieSupport=1&embedded=true'

  function toggleShow() {
    setIsShow(!isShow)
  }
  return (
    <section id="documents" className={styles.container}>
      {console.log(photos)}
      <div className={styles.documents}>
        <div className={styles.wrapper}>
          <NextImage
            src={photos[0].Attachments[0].url}
            alt="hizmet-yeterlilik-belgesi"
            width={200}
            height={300}
            layout="responsive"
          />
          <h4>Hizmet Yeterlilik</h4>
          <div className={styles.iconOverlay} onClick={toggleShow}>
            <Glass />
          </div>
        </div>
        <div className={styles.wrapper}>
          <iframe
            src={pdfPath}
            width="200"
            height="300"
            className={styles.pdf}
            frameBorder="0"
          ></iframe>
          <h4>Binaların Yangından Korunması Hakkında Yönetmelik</h4>
        </div>
      </div>
      <div className={styles.photo}>
        <NextImage
          src={photos[1].Attachments[0].url}
          alt="belgeler-fotoğraf"
          layout="fill"
        />
      </div>
      <div
        onClick={toggleShow}
        className={`${styles.overlay} ${isShow ? styles.showOverlay : ''}`}
      >
        <div className={styles.overlayContent}>
          <div className={styles.closeIcon}>
            <CloseIcon />
          </div>
          <NextImage
            src={photos[0].Attachments[0].url}
            alt="hizmet-yeterlilik-belgesi"
            width={520}
            height={680}
            layout="intrinsic"
          />
        </div>
      </div>
    </section>
  )
}

export default Documents
