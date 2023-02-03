import './styles/globals.scss'
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
          <div>
            <NavBar />
            {children}
          </div>
          <Banner lang={lang} />
        </main>
      </body>
    </html>
  )
}
