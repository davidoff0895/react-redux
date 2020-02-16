export default function createCustomerApi({http}: any) {
  const getCustomers = () => {
    return http.get('v2/5e493e1330000072008c2d27')
  }
  return {
    getCustomers
  }
}
