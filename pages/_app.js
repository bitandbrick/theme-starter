import * as React from 'react'
import Meta from '@hackclub/meta'
import NextApp from 'next/app'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Analytics from '../components/analytics.js'
import { Provider as BalancerProvider } from 'react-wrap-balancer
import Head from 'next/head'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

'

<Meta
  as={Head}
  name="Hack Club" // site name
  title="Hackathons" // page title
  description="List of upcoming high school hackathons" // page description
  image="https://hackathons.hackclub.com/card.png" // large summary card image URL
  color="#ec3750" // theme color
  manifest="/site.webmanifest" // link to site manifest
/>