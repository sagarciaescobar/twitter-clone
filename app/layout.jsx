import './globals.css'
import { useLanguage } from './hooks/server/useLanguage'
import { Banner } from './components/Banner'
import { Button } from './components/Button'
import { NavBar } from './components/NavBar'

export default function RootLayout({ children }) {
  const { t, lang } = useLanguage()
  return (
    <html lang={lang}>
      <head />
      <body>
        <main>
          <section>
            <NavBar />
            {children}
          </section>
          <Banner/>
        </main>
      </body>
    </html>
  )
}
