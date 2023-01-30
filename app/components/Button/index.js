'use client'

const Button = ({children, href, onClick}) => {

  if (href) return <a href={href}>
    {children}
  </a>

  return (<button onClick={onClick}>
    {children}
  </button>)
}

export { Button }
