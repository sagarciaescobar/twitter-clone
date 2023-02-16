/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'
import React from 'react'
import { Loading } from '../Loading'
import Script from 'next/script'
import Head from 'next/head'

const data = async (promise) => {
  const gapi = await new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script')
    scriptEle.src = 'https://accounts.google.com/gsi/client'
    scriptEle.addEventListener('load', () => {
      resolve()
    })
    scriptEle.addEventListener('error', () => {
      console.log("can't load google authentication ")
      resolve()
    })
    document.body.appendChild(scriptEle)
  })
  const component = (Component) => (props) =>
    (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <Component {...props} />
      </>
    )
  return promise.then(({ default: Default }) => component(Default))
}

const DynamicForm = dynamic(() => data(import('./Form')), {
  loading: () => <Loading />,
})

export function LoginForm(props) {
  return <DynamicForm {...props} />
}
