import * as React from 'react'
import {ICustomer} from '@/types/customer.types'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

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
}))

export function CustomersList({customers}: CustomersListProps) {
  const classes = useStyles()

  const customersList = customers.map((customer) => <Paper className={classes.paper} key={customer.id}>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar>
          <img src={customer.imgUrl} alt={customer.firstName}/>
        </Avatar>
      </Grid>
      <Grid item xs zeroMinWidth>
        <Typography noWrap>{customer.position}</Typography>
      </Grid>
    </Grid>
  </Paper>)

  return (
    <div className={classes.root}>
      {customersList}
    </div>
  )
}
