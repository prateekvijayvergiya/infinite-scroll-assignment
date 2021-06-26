import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

type SpacerProps = {
  spacing?: number
}

const Spacer: React.FC<SpacerProps> = ({ spacing = 3 }) => {
  const classes = useStyles({ spacing })
  return <div className={classes.root} />
}

const useStyles = makeStyles(() => ({
  root: {
    height: (props: SpacerProps) => `${props.spacing as number * 8}px`,
  },
}))

export default Spacer
