import { AppBar, AppBarProps, Button, Icon, Toolbar, Typography } from '@material-ui/core'
import { styled, Theme } from '@material-ui/core/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const SAppBar = styled(AppBar)(({ theme }:{theme:Theme}) => ({
  position: theme.appbar.position,
  backgroundColor: theme.appbar.bgColor,
  boxShadow: theme.appbar.boxShadow,
  color: theme.appbar.fontColor
}))

const Logo = styled(Icon)(({ theme }:{theme:Theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
  padding: theme.spacing(1, 0),
  width: 'auto',
  ...theme.mixins.toolbar
}))

const TitleWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  cursor: 'pointer',
  flex: 1
}))

type SAppBarProps = AppBarProps & {
  title?: string,
  svg?: string
}

type StyledAppBarProps = SAppBarProps & {
  hidden?: boolean
}

const StyledAppBar:React.FC<StyledAppBarProps> = (props) => {
  console.log('render Appbar')

  return (
    <SAppBar position='relative'>
      <Toolbar>
        <TitleWrapper>
          {props?.svg &&
              <Logo>
                <img src={props.svg} alt='' height='100%'/>
              </Logo>
          }
          {props?.title &&
              <Typography variant='h5'>
                {props.title}
              </Typography>
          }
        </TitleWrapper>
        <Button color='inherit' size='large' component={Link} to='/1'>FAQ1</Button>
        <Button color='inherit' size='large' component={Link} to='/2'>FAQ2</Button>
      </Toolbar>
    </SAppBar>
  )
}

export { StyledAppBar }
export type { StyledAppBarProps }
