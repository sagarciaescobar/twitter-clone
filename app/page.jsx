import { Inter } from '@next/font/google'
import styles from './page.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className={styles.main}>
      <p>test</p>
    </section>
  )
}
