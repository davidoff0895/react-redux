export default function createCustomerApi({http}: any) {
  const getCustomers = () => {
    return http.get('v2/5e38744b3100005a00d3821d')
  }
  return {
    getCustomers
  }
}
