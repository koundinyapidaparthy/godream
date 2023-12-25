import {gql} from '@apollo/client'

export const CREATE_CUSTOMER_MUTATION = gql`
mutation CreateCustomer(
    $firstName: String! 
    $lastName: String! 
    $email: String!
    $countryCode: String! 
    $mobileNumber: String! 
    $reason: String!){
    CreateCustomer(
        firstName: $firstName
        lastName: $lastName
        email: $email
        countryCode: $countryCode
        mobileNumber: $mobileNumber
        reason: $reason
        ){
            id
        }
}
`