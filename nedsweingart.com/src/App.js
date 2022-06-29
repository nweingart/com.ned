import React from 'react'
import Grid from '@material-ui/core/Grid'

import LeftView from "./views/LeftView";
import RightView from "./views/RightView";

const App = () => {
  return (
    <Grid container>
      <Grid item md={12} lg={6}>
        <LeftView />
      </Grid>
      <Grid item md={12} lg={6}>
        <RightView />
      </Grid>
    </Grid>
  )
}

export default App
