import React from 'react'

type RedirectProps = {
  url: string
}

const Redirect:React.FC<RedirectProps> = (props) => {
  React.useEffect(() => {
    const link = () => {
      window.location.href = props.url
    }
    setTimeout(link, 0)
  })

  return (
    <div/>
  )
}

export { Redirect }
