import React from 'react'

import type { NextPage } from 'next'
import { Button } from '@material-ui/core'

const Home: NextPage = () => {
  return (
    <div>
      Clone youtube com Next.js + Material UI
      <Button variant="contained" color="secondary">
        Hello World!
      </Button>
    </div>
  )
}

export default Home
