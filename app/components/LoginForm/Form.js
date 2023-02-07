/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
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
} from './index.module.scss'

import { Icon } from '../Icon'
import { useLanguage } from '@/app/hooks/client/useLanguage'
import { useEffect, useState } from 'react'

import './index.scss'
import { Button } from '../Button'
import { InputForm } from '../Input'

export default function LoginForm({ t }) {
  const [auth, setAuth] = useState(null)
  const googleUser = {}
  var startApp = function () {
    gapi.load('auth2', function () {
      auth2 = gapi.auth2.init({
        client_id:
          '610821327268-60292a0u3mjdn2tp9kgj6mf7ujvpjdea.apps.googleusercontent.com',
      })
    })
    setAuth(gapi.auth2.getAuthInstance())
  }

  function attachSignin(element) {
    console.log(element.id)
    console.log('instance', auth)
    auth2.attachClickHandler(
      element,
      {},
      function (googleUser) {
        document.getElementById('name').innerText =
          'Signed in: ' + googleUser.getBasicProfile().getName()
      },
      function (error) {
        alert(JSON.stringify(error, undefined, 2))
      }
    )
  }

  useEffect(() => {
    console.log(gapi)
    if (gapi) startApp()
  }, [gapi])

  useEffect(() => {
    console.log(auth)
    if (auth) attachSignin(document.getElementById('customBtn'))
  }, [auth])

  return (
    <div className={formContainer}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Icon type="twitterIcon" color="#FFF" size={32} />
      <h2>{t('Regitrate en Twitter')}</h2>
      <div className={loginContainer} role={'group'}>
        <div id="gSignInWrapper">
          <span className="label">Sign in with:</span>
          <div id="customBtn" className="customGPlusSignIn">
            <span className="icon"></span>
            <span className="buttonText">Google</span>
          </div>
        </div>
        <div id="name"></div>
        <Button type="solid" className={loginBtn}>
          Sign as test user
        </Button>
        <div className={divider}>
          <p>or</p>
        </div>
        <form>
          {/* <div class={googleBtn}>
          <div class={googleIconWrapper}>
            <Image
              className={googleIcon}
              width={18}
              height={18}
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google icon"
            />
          </div>
          <p class={btnText}>
            <b>Sign in with google</b>
          </p>
        </div> */}
          <InputForm
            className={loginInput}
            type="text"
            name="username"
            label="username, phone or email"
          />
        </form>
      </div>
    </div>
  )
}
