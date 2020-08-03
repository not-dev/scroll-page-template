import { Box, BoxProps, CssBaseline } from '@material-ui/core'
import { styled, StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import React from 'react'
import { animateScroll as scroll, Element, scroller } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'

import { AccordionItemProps, Accordions, Page, StyledAppBar, StyledAppBarProps, StyledFab } from '../molecules'
import { CardProps, Headline, HeadlineStaticProps } from '../organisms'
import { mainTheme as theme } from '../theme'

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})

const PageBox = styled(Box)((props:BoxProps) => ({
  boxShadow: `
    0px -3px 1px -2px ${fade(props.bgcolor, 0.20)},
    0px -2px 2px 0px ${fade(props.bgcolor, 0.14)},
    0px -1px 5px 0px ${fade(props.bgcolor, 0.12)}
  `
}))

const scrollProps = {
  duration: theme.transitions.duration.standard,
  smooth: 'easeOutCubic'
}

type Content = CardProps & {
  items: Array<AccordionItemProps>
}

type CardPagesProps = {
  appbar: StyledAppBarProps,
  headline: HeadlineStaticProps,
  contents: Array<Content>
}

const CardPages:React.FC<CardPagesProps> = (props) => {
  console.log('render CardPages')

  const handleClickCard = (target:string) => {
    scroller.scrollTo(target, scrollProps)
  }

  const contents = React.useMemo(() => {
    return (
      props.contents.map((content) => {
        return (
          {
            ...content,
            uuid: uuidv4(),
            items: content.items.map((item) => {
              return (
                {
                  uuid: uuidv4(),
                  ...item
                }
              )
            })
          }
        )
      })
    )
  }, [props.contents])

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledAppBar {...props.appbar}/>
        <Wrapper>
          {
            React.useMemo(() => {
              return (
                <Headline {...props.headline} cards={contents} onClickCard={handleClickCard}/>
              )
            }, [contents, props.headline])
          }
          {
            React.useMemo(() => {
              return (
                contents.map((content, i) => {
                  return (
                    <Element name={content.uuid} key={`page-${content.uuid}`} >
                      <PageBox bgcolor={theme.colorSet[i % theme.colorSet.length]} onClick={() => handleClickCard(content.uuid)}>
                        <Page text={content.subtitle}>
                          <Accordions items={content.items}/>
                        </Page>
                      </PageBox>
                    </Element>
                  )
                })
              )
            }, [contents])
          }
        </Wrapper>
        <StyledFab alt='Scroll to Top' onClick={() => scroll.scrollToTop(scrollProps)}>
          <KeyboardArrowUpIcon fontSize='large'/>
        </StyledFab>
      </ThemeProvider>
    </StylesProvider>
  )
}

export { CardPages }
