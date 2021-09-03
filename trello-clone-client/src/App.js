import '@fontsource/roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Button, Box, Typography, Paper, AppBar, Toolbar, IconButton, Modal } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

import './App.css'
import React, { useState } from 'react'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

})

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const lists = [
    {
      title: "To do",
      cards: ["eat pomelo", "eat durian"]
    },
    {
      title: "In progress",
      cards: ["eat mango"]
    },
    {
      title: "done",
      cards: ["eat mangosteen"]
    }
  ]

  const styles = useStyles()

  // const openModal = (e) => {
  //   console.log(e)
  //   setModalOpen(true)
  // }

  return (
    <>
      <CssBaseline />
      <NavBar />
      <CardModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <Board lists={lists} styles={styles} openModal={_ => setModalOpen(true)} />
    </>
  )
}

const CardModal = ({ setModalOpen, modalOpen }) => (
      <Modal
        open={modalOpen}
        onClose={_ => setModalOpen(false)}
      >
        <div>
          <p>hello world</p>
        </div>
      </Modal>
)

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      {/* <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu"> */}
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      {/* <Typography variant="h6" className={styles.title}> */}
      <Typography variant="h6">
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
)

const Board = ({ lists, styles, openModal }) => (
  <Box>
    {lists.map((list) => {
      return <List key={list.title} styles={styles} {...list} openModal={openModal} />
    })}
  </Box>
)

const List = ({ title, cards, styles, openModal }) => (
  <Paper key={title}>
    <Typography>
      {title}
    </Typography>
    <Box>
      {cards.map((card) => {
        return <Card key={card} styles={styles} card={card} openModal={openModal} />
      })}
    </Box>
  </Paper>
)

const Card = ({ styles, card, openModal }) => (
  <Box key={card} onClick={openModal}>
    <Typography>
      {card}
    </Typography>
  </Box>
)

export default App
