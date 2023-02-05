/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'
import React from 'react'
import { Loading } from '../Loading'

const data = async (promise) => {
  const datas = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('ocurro');
      resolve({ text: 'llege' })
    }, [3000])
  })
  const component = (Component) => (props) =>
    <Component {...props} {...datas} />
  return promise.then(({ default: Default }) => component(Default))
}

const DynamicForm = dynamic(() => data(import('./Form')), {
  loading: () => <Loading />,
})

export function LoginForm(props) {
  return <DynamicForm {...props} />
}
