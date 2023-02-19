import './styles/globals.scss'
import { useLanguage } from './hooks/server/useLanguage'
import { Banner } from './components/Banner'
import { Button } from './components/Button'
import { Header } from './components/Header'

const fetchNav = async () => {
  const data = fetch('/api/menu')
  return data.then(d => d.json())
}

export default function RootLayout({ children, params }) {
  const { t, lang } = useLanguage()
  const listMenu = fetchNav();
  return (
    <html lang={lang}>
      <head />
      <body>
        <main>
          <Banner lang={lang} login={params} />
          <div className="main-content">
            <Header listItem={listMenu} />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
