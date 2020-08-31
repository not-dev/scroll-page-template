import { useTheme } from '@material-ui/core/styles'
import React from 'react'
import { Helmet } from 'react-helmet'

import image from '../assets/image/brush.svg'
import mockup1 from '../assets/image/mockup1.png'
import mockup2 from '../assets/image/mockup2.png'
import mockup3 from '../assets/image/mockup3.png'
import thumbnail from '../assets/image/thumbnail.svg'
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
              subtitle: 'SPAのテンプレート',
              body: 'React + Material-UI',
              image: <Gallery items={[mockup1, mockup2, mockup3]} showBullets={false} showNav={false} autoPlay onClick={(e:any) => { e.stopPropagation() }}/>
            },
            {
              subtitle: '適当な画像',
              body: `すごく大きなブラシ
              very big brush
              `,
              reverse: true,
              split: [6, 6],
              image: <img src={image} height='auto' width='100%' alt=''/>
            },
            {
              subtitle: '適当な動画',
              body: 'YouTubeの動画です',
              image: <Youtube url='https://youtu.be/oUFJJNQGwhk' light={thumbnail}/>
            }
          ]
        }
      />
    </React.Fragment>
  )
}

export { Home }
