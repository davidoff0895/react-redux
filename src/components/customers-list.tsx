import * as React from 'react'
import {ICustomer} from '@/types/customer.types'
import {Paper, Grid, Avatar, Typography, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

export interface CustomersListProps {
  customers: ICustomer[]
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  avatar: {
    width: 100,
    height: 100
  }
}))

export function CustomersList({customers}: CustomersListProps) {
  const classes = useStyles()

  const customersList = customers.map((customer) => <Paper className={classes.paper} key={customer.id}>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar sizes={'100000'} src={customer.imgUrl} alt={customer.firstName} className={classes.avatar}/>
      </Grid>
      <Grid item xs zeroMinWidth>
        <Typography noWrap>{customer.firstName} {customer.lastName}</Typography>
        <Box my={1}>{customer.position}</Box>
      </Grid>
    </Grid>
  </Paper>)

  return (
    <div className={classes.root}>
      {customersList}
    </div>
  )
}
