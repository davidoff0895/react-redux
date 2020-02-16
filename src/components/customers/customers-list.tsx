import * as React from 'react'
import {ICustomer} from '@/store/customers/customers.types'
import {Paper, Grid, Avatar, Typography, Box} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import Loader from '@/components/common/loader'

interface CustomersListProps {
  customers: ICustomer[],
  pending: boolean,
  error: string,
  getCustomers: any,
  classes: any
}

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(3)}px auto`,
    padding: theme.spacing(2),
    cursor: 'pointer'
  },
  avatar: {
    width: 100,
    height: 100
  }
})

class CustomersList extends React.Component<CustomersListProps, {}> {
  constructor(props: CustomersListProps) {
    super(props);
    this.props.getCustomers()
  }
  render() {
    const { classes } = this.props;
    const loader = <Loader/>
    const customersList = this.props.customers.map((customer) =>
      <Paper className={classes.paper} key={customer.id}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar sizes={'100000'} src={customer.imgUrl} alt={customer.firstName} className={classes.avatar}/>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{customer.firstName} {customer.lastName}</Typography>
            <Box my={1}>{customer.position}</Box>
          </Grid>
        </Grid>
      </Paper>
    )

    return (
      <div>
        {this.props.pending ? loader : customersList}
      </div>
    )
  }
}

export default withStyles(styles)(CustomersList)
