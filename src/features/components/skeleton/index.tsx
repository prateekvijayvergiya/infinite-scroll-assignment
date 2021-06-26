import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'

const LoadingSkeleton: React.FC = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Skeleton variant="rect" width={170} height={200} />
          <Skeleton variant="text" width={170} height={50} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const useStyles = makeStyles({
  root: {
    width: 200,
    padding: 5,
  },
})
export default LoadingSkeleton
