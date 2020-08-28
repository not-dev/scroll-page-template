import { useTheme } from '@material-ui/core/styles'
import React from 'react'
import { Helmet } from 'react-helmet'

import mockup1 from '../assets/image/mockup1.png'
import mockup2 from '../assets/image/mockup2.png'
import mockup3 from '../assets/image/mockup3.png'
import logo from '../assets/image/react.svg'
import thumbnail from '../assets/image/thumbnail.png'
import { Gallery, Youtube } from '../molecules'
import { PR } from '../organisms'
import { appbarProps } from '../pages'

const Home = () => {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Helmet>
        <title>SPA</title>
        <meta name='description' content='React SPA template' />
      </Helmet>
      <PR
        appbar={{
          ...appbarProps,
          fontcolor: theme.palette.primary.main
        }}
        contents={
          [
            {
              subtitle: 'Title',
              body: `hoge
                hoge
              `,
              image: <Gallery items={[mockup1, mockup2, mockup3]} showBullets={false} showNav={false} autoPlay onClick={(e:any) => { e.stopPropagation() }}/>
            },
            {
              subtitle: 'Title',
              body: `hoge
                hoge
              `,
              reverse: true,
              split: [6, 6],
              image: <img src={logo} height='auto' width='100%' alt='' style={{ filter: 'drop-shadow(2px 4px 2px rgba(0,0,0,0.2))' }}/>
            },
            {
              subtitle: 'Title',
              body: `hoge
                hoge
              `,
              image: <Youtube url='https://youtu.be/oUFJJNQGwhk' light={thumbnail}/>
            }
          ]
        }
      />
    </React.Fragment>
  )
}

export { Home }
