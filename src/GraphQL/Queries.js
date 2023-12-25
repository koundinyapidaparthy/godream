import {gql} from '@apollo/client';

export const LOAD_CUSTOMERS = gql`
query{
    getAllCustomers{
      id,
      firstName,
      lastName,
      countryCode,
      mobileNumber,
      reason
    }
  }
`