import { blueGrey, grey } from '@material-ui/core/colors'
import React from 'react'
import { Helmet } from 'react-helmet'

import light from '../assets/icon/emoji_objects.svg'
import help from '../assets/icon/help.svg'
import chart from '../assets/icon/insert_chart.svg'
import flag from '../assets/icon/outlined_flag.svg'
import mouth from '../assets/icon/pest_control_rodent.svg'
import apps from '../assets/icon/touch_app.svg'
import logo from '../assets/image/react.svg'
import { Gallery, Youtube } from '../molecules'
import { Content } from '../organisms'
import { appbarProps } from '../pages'

const Page2 = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>SPA</title>
        <meta name='description' content='React SPA template' />
      </Helmet>
      <Content
        appbar={{
          ...appbarProps,
          fontcolor: grey[50]
        }}
        headline={{
          text: 'PAGE2',
          bgcolor: blueGrey[200],
          fluid: true
        }}
        contents={
          [
            {
              subtitle: 'フラッグ',
              image: flag,
              items: [
                {
                  summary: 'コンテンツ',
                  details: [
                    'foo',
                    'foo'
                  ]
                },
                {
                  summary: 'コンテンツ2',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                },
                {
                  summary: 'コンテンツ3',
                  details: [
                    'foo',
                    'foo'
                  ],
                  images: <Gallery items={[logo, logo, logo]}/>
                }
              ]
            },
            {
              subtitle: '電球',
              image: light,
              items: [

              ]
            },
            {
              subtitle: 'ヘルプ',
              image: help,
              items: [

              ]
            },
            {
              subtitle: 'チャート',
              image: chart,
              items: [

              ]
            },
            {
              subtitle: 'タッチ',
              image: apps,
              items: [

              ]
            },
            {
              subtitle: 'マウス',
              image: mouth,
              items: [

              ]
            }
          ]
        }
      />
    </React.Fragment>
  )
}

export { Page2 }
