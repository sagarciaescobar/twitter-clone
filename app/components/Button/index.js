'use client'

import React from 'react'
import './index.scss'
import { btnMain } from './index.module.scss'

const Button = (props) => {
  const { children, href, onClick, className, type } = props
  const Component = React.createElement(href ? 'a' : 'button', {...props, className: `${btnMain} ${className} ${type}`})
  return Component
}

export { Button }
