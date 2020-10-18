import React, { useState, useEffect } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Zap } from 'react-feather';
import Link from 'next/link'
import { useRouter } from 'next/router'

import { currentDayName } from '../utils/dateUtils'

import ElectronicFrontier from './ElectronicFrontier'

const menu = [
  {
    path: '/',
    name: '0: home',
  },
  {
    path: '/about',
    name: '1: about',
  },
  {
    path: '/contact',
    name: '2: contact',
  },
  {
	  path: '/portfolio',
	  name: '3: portfolio',
  },
  {
	  path: '/setup',
	  name: '4: setup',
  }
]
const SHORTCUTS = ['Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4']
const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/tabby__katz&w=150`
const QUOTES = [
  `There are 10 types of people in this world, those who understand binary and those who don't.`,
  'First, solve the problem. Then, write the code. - John Johnson',
  'Programming is the art of telling another human being what one wants the computer to do. -Donald Knuth',
  `If you can’t explain something in simple terms, you don’t understand it. - Richard Feynman`,
  `Make it work, make it right, make it fast. -Kent Beck`,
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. -Brian Kernighan',
	`['hip', 'hip']`,
	`Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. -Antoine de Saint-Exupéry`,
	`I hate code, and I want as little of it as possible in our product. - Jack Diederich`, 
	`Computers can control you or they can lighten your work—if you want to be in charge of your machines, you have to learn to write code. -Cory Doctorow`,
	`Programs must be written for people to read, and only incidentally for machines to execute. -Abelson and Sussman`,
	`Some people, when confronted with a problem, think "I know, I'll use regular expressions." Now they have two problems. -Jamie Zawinski`,
	`Peers can be the best teachers, because they're the ones that remember what it's like to not understand. -Peter Norvig`,
	`Computer language design is just like a stroll in the park. Jurassic Park, that is. -Larry Wall`,
	`Computers are useless. They can only give you answers. -Pablo Picasso`,

]
const PROJECTS = [
	`Have a look at some of my projects!`,
	`Portfolio:`,
	`I've come a long way, baby! Check out some of my projects.`, 
	`Make things.`,
	`When I make new things, I add them here. Have a look!`,
	]
function Layout({ children, isHomepage, secondaryPage, portfolio}) {
  const router = useRouter()
  const onLoadTheme = typeof localStorage !== 'undefined' && localStorage.getItem('BLOG_THEME')
  const [theme, setTheme] = useState(onLoadTheme)
  const [mounted, setMounted] = useState(false)
	// randomized quotes on load
  const [quote] = useState(QUOTES[Math.floor(Math.random() * QUOTES.length)])
	// random intro to projects
  const [projectIntro] = useState(PROJECTS[Math.floor(Math.random() * PROJECTS.length)])
  const switchTheme = () => {
    const setTo = theme === 'dark' ? 'light' : 'dark'

    setTheme(setTo)
  }

  function triggerShortcut(e) {
    if (SHORTCUTS.includes(e.code)) {
      // getting the digit
      const code = e.code.split('t')[1]

      // route from menu
      const { path } = menu[code]

      router.push(path)
    }
  }
//to use key shortcuts to navigate
  useEffect(() => {
    document.addEventListener('keypress', triggerShortcut)

    if (onLoadTheme) return
// if they already prefer a theme start with it
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    localStorage.setItem('BLOG_THEME', theme)

    setMounted(true)
  }, [theme])

  const containerProps = {
    ...isHomepage || portfolio && { md: 12 },
    ...!isHomepage && { md: 8, mdOffset: 2 },
  }

  if (!mounted) return <div />

  return (
    <>
	   <ElectronicFrontier />
      <div className="top-menu">
        <Row>
          <Col xs={10}>
            <ul>
              <li className="logo">
                <Link href="/" as="/">
                  <a>
                    <img src={avatar} />
                  </a>
                </Link>
              </li>

              {menu.map(({ path, name }) => (
                <li key={name}>
                  <Link href={path} as={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={2} style={{ textAlign: 'right' }}>
            <button className="theme-switch-button" onClick={() => switchTheme()}>
              {theme === 'dark' ? <Zap /> : <Zap />}
            </button>
          </Col>
        </Row>
      </div>

      <Grid>
        <Row>
          <Col {...containerProps}>
            {!secondaryPage && (
              <div style={{ textAlign: 'center' }}>
                <h1 className="blog-title">
				{!secondaryPage && !portfolio ? quote : projectIntro}
                </h1>

                <p className="entry-description">
                  
                </p>
              </div>
            )}

            {children}

            {secondaryPage && (
              <div className="bottom-mobile-nav">
                <Row>
                  <Col xs={6} />

                  <Col xs={6}>
                    <button className="theme-switch-button-mobile" onClick={() => switchTheme()}>
                      {theme === 'dark' ? (
                        <>
                          <Zap /> Light
                        </>
                      ) : (
                        <>
                          <Zap /> Dark
                        </>
                      )}
                    </button>
                  </Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Grid>

      <footer>
        <div>Happy {currentDayName()}!</div>
        <div>&copy; {new Date().getFullYear()}</div>
      </footer>
    </>
  )
}

export default Layout
