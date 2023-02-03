'use client'

import React from 'react'
import './index.scss'
import Link from 'next/link'

const Button = ({ children, onClick, className = '', type } ) => {
  return <button className={`btn-main ${type} ${className}`} onClick={onClick}>{children}</button>
}

const ButtonLink = ({ href, className = '', type, children }) => {
  return <Link className={`btn-main ${type} ${className}`} href={href}>{children}</Link>
}

export { Button, ButtonLink }
