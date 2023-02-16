import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

import {
  formContainer,
  googleBtn,
  googleIconWrapper,
  googleIcon,
  loginBtn,
  btnText,
  loginContainer,
  divider,
  loginInput,
  fullField,
  btnFull,
} from './index.module.scss'

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
    <div className={formContainer}>
      <Icon type="twitterIcon" color="#FFF" size={32} />
      <h2>{t('Regitrate en Twitter')}</h2>
      <div className={loginContainer} role={'group'}>
        <div id="buttonDiv" className="g-signin2"></div>
        <Button type="solid" className={loginBtn}>
          Sign as test user
        </Button>
        <div className={divider}>
          <p>or</p>
        </div>
        <form>
          <InputForm
            autocomplete="off"
            className={loginInput}
            activeClass={fullField}
            type="text"
            name="username"
            label="username, phone or email"
          />
          <Button type="solid" className={[loginBtn, btnFull].join(' ')}>
            Next
          </Button>
          <Button type="outline" className={[loginBtn, btnFull].join(' ')}>
            Forgot password?
          </Button>
        </form>
      </div>
    </div>
  )
}
