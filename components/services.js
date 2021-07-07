import styles from './services.module.css'

import NextImage from 'next/image'

import SalesIcon from '@/components/icons/sales-icon'
import RepairIcon from '@/components/icons/repair-icon'
import PeopleIcon from '@/components/icons/people-icon'
import EducationIcon from '@/components/icons/education-icon'
import PensIcon from '@/components/icons/pens-icon'
import DeliveryIcon from '@/components/icons/delivery-icon'

export function Card({ title, exp, children }) {
  return (
    <div className={styles.container}>
      <div className={[styles.card, styles.cardFront].join(' ')}>
        <div className={styles.content}>
          {children}
          <h3>{title}</h3>
        </div>
      </div>
      <div className={[styles.card, styles.cardBack].join(' ')}>
        <div className={styles.content}>
          <p>{exp}</p>
        </div>
      </div>
    </div>
  )
}

function Services({ photo }) {
  const data = [
    {
      title: 'Satış',
      icon: <SalesIcon />,
      exp: `Yangın söndürme ve yangından korunum alanlarındaki tüm ürünlerin, alanında
        lider ve uzman firmalarından, ÖZ-KA güvencesi ve garantisiyle tedarikini
        sağlıyoruz.`
    },
    {
      title: 'Teslimat - Montaj',
      icon: <DeliveryIcon />,
      exp: `Tedarikini sağladığımız tüm ürünlerin teslimatının yanı sıra, gerekli montaj,
        kurulum ve devreye alma gibi işlemlerinin tamamını, alanında uzman teknik
        kadromuz ile eksiksiz olarak gerçekleştiriyoruz.`
    },
    {
      title: 'Bakım - Onarım',
      icon: <RepairIcon />,
      exp: `Teslimat ve montajını yaptığımız tüm ürünlerin, belirli periyotlarda gerekli, tüm
        kontrol, bakım ve onarım işlemlerini, alanında uzman teknik kadromuz ile
        gerçekleştiriyoruz.`
    },
    {
      title: 'Eğitim',
      icon: <EducationIcon />,
      exp: `Uzman ekiplerimizce, uygulamalı ve sertifikalı şekilde yangın eğitimleri
        veriyoruz.`
    },
    {
      title: 'Danışmanlık',
      icon: <PeopleIcon />,
      exp: `İşletmenizin olası yangın riskinden korunması ile ilgili, uluslararası standartlara
        uygun şekilde analizler yaparak, uzman kadromuzca danışmanlık hizmeti
        sunmaktayız.`
    },
    {
      title: 'Projelendirme',
      icon: <PensIcon />,
      exp: `Sunduğumuz yangından korunum ve yangın söndürme sistemlerini, profesyonel
        ekibimizle dizayn etmekteyiz. Ayrıca işletmeniz için gerekli olan yangın projeleri
        de oluşturmaktayız.`
    }
  ]
  return (
    <>
      <section className={styles.photo}>
        <NextImage
          src={photo.Attachments[0].url}
          alt={photo.Alt}
          layout="fill"
        />
      </section>
      <section id="services" className={styles.main}>
        <div className={styles.cards}>
          {data.map((item, index) => (
            <Card key={index} title={item.title} exp={item.exp}>
              {item.icon}
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
