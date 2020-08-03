import React from 'react'

import light from '../assets/emoji_objects.svg'
import tools from '../assets/handyman.svg'
import help from '../assets/help.svg'
import chart from '../assets/insert_chart.svg'
import logo from '../assets/logo.svg'
import gif from '../assets/original.gif'
import flag from '../assets/outlined_flag.svg'
import mouth from '../assets/pest_control_rodent.svg'
import { CardPages } from '../organisms'

const Faq2 = () => {
  return (
    <CardPages
      appbar={{
        svg: logo,
        title: 'ScrollPage'
      }}
      headline={{
        text: 'FAQ2',
        background: {
          color: '#b0bec5'
        },
        fluid: true
      }}
      contents={
        [
          {
            subtitle: 'はじめに',
            image: flag,
            items: [
              {
                summary: 'いろは',
                details: [
                  'いろはにほへと',
                  'ちりぬるを',
                  gif
                ]
              },
              {
                summary: 'いろは',
                details: [
                  'いろはにほへと',
                  'ちりぬるを',
                  gif
                ]
              },
              {
                summary: 'いろは',
                details: [
                  'いろはにほへと',
                  'ちりぬるを',
                  gif
                ]
              }
            ]
          },
          {
            subtitle: '設定',
            image: tools,
            items: [
              {
                summary: 'Fix a problem',
                details: [
                  'Troubleshoot problems playing videos'
                ]
              },
              {
                summary: 'Watch videos',
                details: [
                  'Find videos to watch'
                ]
              },
              {
                summary: 'Manage your account and settings',
                details: [
                  'Sign up and manage your account'
                ]
              },
              {
                summary: 'Join & manage YouTube Premium',
                details: [
                  'Troubleshoot problems playing videos'
                ]
              },
              {
                summary: 'Create & grow your channel',
                details: [
                  'Find videos to watch'
                ]
              },
              {
                summary: 'Monetize with the YouTube Partner Program',
                details: [
                  'Sign up and manage your account'
                ]
              }
            ]
          },
          {
            subtitle: 'グラフ',
            image: chart,
            items: [
              {
                summary: 'Fix a problem',
                details: [
                  'Troubleshoot problems playing videos'
                ]
              },
              {
                summary: 'Watch videos',
                details: [
                  'Find videos to watch'
                ]
              },
              {
                summary: 'Manage your account and settings',
                details: [
                  'Sign up and manage your account'
                ]
              },
              {
                summary: 'Join & manage YouTube Premium',
                details: [
                  'Troubleshoot problems playing videos'
                ]
              },
              {
                summary: 'Create & grow your channel',
                details: [
                  'Find videos to watch'
                ]
              },
              {
                summary: 'Monetize with the YouTube Partner Program',
                details: [
                  'Sign up and manage your account'
                ]
              }
            ]
          },
          {
            subtitle: 'ヘルプ',
            image: help,
            items: [
              {
                summary: 'Fix a problem',
                details: [
                  'Troubleshoot problems playing videos'
                ]
              },
              {
                summary: 'Watch videos',
                details: [
                  'Find videos to watch'
                ]
              },
              {
                summary: 'Manage your account and settings',
                details: [
                  'Sign up and manage your account'
                ]
              },
              {
                summary: 'Join & manage YouTube Premium',
                details: [
                  'Troubleshoot problems playing videos'
                ]
              },
              {
                summary: 'Create & grow your channel',
                details: [
                  'Find videos to watch'
                ]
              },
              {
                summary: 'Monetize with the YouTube Partner Program',
                details: [
                  'Sign up and manage your account'
                ]
              }
            ]
          },
          {
            subtitle: '発見',
            image: light,
            items: [
              {
                summary: 'Fix a problem',
                details: [
                  'Troubleshoot problems playing videos'
                ]
              },
              {
                summary: 'Watch videos',
                details: [
                  'Find videos to watch'
                ]
              },
              {
                summary: 'Manage your account and settings',
                details: [
                  'Sign up and manage your account'
                ]
              },
              {
                summary: 'Join & manage YouTube Premium',
                details: [
                  'Troubleshoot problems playing videos'
                ]
              },
              {
                summary: 'Create & grow your channel',
                details: [
                  'Find videos to watch'
                ]
              },
              {
                summary: 'Monetize with the YouTube Partner Program',
                details: [
                  'Sign up and manage your account'
                ]
              }
            ]
          },
          {
            subtitle: 'COMING SOON...',
            image: mouth,
            items: [
              {
                summary: 'COMING SOON...',
                details: [
                ]
              },
              {
                summary: 'COMING SOON...',
                details: [
                ]
              },
              {
                summary: 'COMING SOON...',
                details: [
                ]
              },
              {
                summary: 'COMING SOON...',
                details: [
                ]
              },
              {
                summary: 'COMING SOON...',
                details: [
                ]
              },
              {
                summary: 'COMING SOON...',
                details: [
                ]
              },
              {
                summary: 'COMING SOON...',
                details: [
                ]
              }
            ]
          }
        ]
      }
    />
  )
}

export { Faq2 }
