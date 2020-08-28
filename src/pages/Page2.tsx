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
              subtitle: 'hoge',
              image: flag,
              items: [
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                },
                {
                  summary: 'foo',
                  details: [
                    'foo',
                    'foo'
                  ],
                  images: <Gallery items={[logo]}/>
                },
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                }
              ]
            },
            {
              subtitle: 'hoge',
              image: light,
              items: [
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                },
                {
                  summary: 'foo',
                  details: [
                    'foo',
                    'foo'
                  ],
                  images: <Gallery items={[logo]}/>
                },
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                }
              ]
            },
            {
              subtitle: 'hoge',
              image: help,
              items: [
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                },
                {
                  summary: 'foo',
                  details: [
                    'foo',
                    'foo'
                  ],
                  images: <Gallery items={[logo]}/>
                },
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                }
              ]
            },
            {
              subtitle: 'hoge',
              image: chart,
              items: [
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                },
                {
                  summary: 'foo',
                  details: [
                    'foo',
                    'foo'
                  ],
                  images: <Gallery items={[logo]}/>
                },
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                }
              ]
            },
            {
              subtitle: 'hoge',
              image: apps,
              items: [
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                },
                {
                  summary: 'foo',
                  details: [
                    'foo',
                    'foo'
                  ],
                  images: <Gallery items={[logo]}/>
                },
                {
                  summary: 'hoge',
                  details: [
                    'hoge',
                    'hoge'
                  ],
                  images: <Youtube url='https://youtu.be/oUFJJNQGwhk'/>
                }
              ]
            },
            {
              subtitle: 'COMING SOON...',
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
