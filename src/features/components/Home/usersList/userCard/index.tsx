import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import UserDetailsType from '../../../../types/userDetails'

const UserCard: React.FC<UserDetailsType> = ({
  firstName,
  lastName,
  picture,
}) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="user image"
          height="200"
          image={picture}
        />
        <CardContent>
          <Typography className={classes.text} gutterBottom variant="h5">
            {firstName} {lastName}
          </Typography>
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
  text: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
})

export default UserCard
