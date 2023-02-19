import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

import styles from './index.module.scss'

import { Icon } from '../Icon'
import { useLanguage } from '@/app/hooks/client/useLanguage'
import { useLayoutEffect, useState } from 'react'

import './index.scss'
import { Button } from '../Button'
import { InputForm } from '../Input'

export default function LoginForm({ t }) {
  const [auth, setAuth] = useState(null)

  useLayoutEffect(() => {
    if (typeof google !== 'undefined') {
      google.accounts.id.initialize({
        client_id: '610821327268-60292a0u3mjdn2tp9kgj6mf7ujvpjdea',
        callback: (t) => {
          console.log('t', t)
          console.log('ocrro callback', t.credential)
        },
      })
      google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large' } // customization attributes
      )
      google.accounts.id.prompt()
    }
  }, [])

  return (
    <div className={styles.formContainer}>
      <Icon type="twitterIcon" color="#FFF" size={32} />
      <h2>{t('Regitrate en Twitter')}</h2>
      <div className={styles.loginContainer} role={'group'}>
        <div id="buttonDiv" className="g-signin2"></div>
        <Button type="solid" className={styles.loginBtn}>
          {t('Ingresa como usuario de prueba')}
        </Button>
        <div className={styles.divider}>
          <p>{t('o')}</p>
        </div>
        <form>
          <InputForm
            autocomplete="off"
            className={styles.loginInput}
            activeClass={styles.fullField}
            type="text"
            name="username"
            label={t('usuario, telefono o correo')}
          />
          <Button type="solid" className={[styles.loginBtn, styles.btnFull].join(' ')}>
            {t('Siguiente')}
          </Button>
          <Button type="outline" className={[styles.loginBtn, styles.btnFull].join(' ')}>
            {t('Olvidaste la contraseña?')}
          </Button>
        </form>
      </div>
    </div>
  )
}
