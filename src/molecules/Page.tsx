import { Container, Typography, TypographyProps } from '@material-ui/core'
import { makeStyles, styled, Theme } from '@material-ui/core/styles'
import React from 'react'

type PageTitleProps = TypographyProps & {
  shadow?: boolean,
  contrast?: boolean
}

type PageProps = PageTitleProps & {
  text: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(12),
    textShadow: (props:PageTitleProps) => props.shadow ? '1px 1px 4px rgba(0,0,0,0.12), -1px 1px 4px rgba(0,0,0,0.12), 1px -1px 4px rgba(0,0,0,0.12), -1px -1px 4px rgba(0,0,0,0.12)' : 'none',
    color: (props:PageTitleProps) => props.contrast ? theme.palette.getContrastText(theme.palette.text.primary) : undefined
  }
}))

const InnerContainer = styled('div')(({ theme }:{theme:Theme}) => ({
  minHeight: '95vh',
  padding: theme.spacing(16, 0)
}))

const Page:React.FC<PageProps> = ({ children, text, ...props }) => {
  const classes = useStyles({ ...props })

  return (
    <Container maxWidth='md'>
      <InnerContainer>
        <Typography variant='h4' align='center' className={classes.root} {...props}>
          {text}
        </Typography>
        {children}
      </InnerContainer>
    </Container>
  )
}

export { Page }
export type { PageProps }
