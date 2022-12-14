import { gql } from '@apollo/client';

export const LOGIN = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        users {
            _id
            username
        }
        }
    }
`;

export const CREATE_USER = gql `
    mutation createUser(
        $username: String!,
        $email: String!,
        $password: String!
    ) {
        createUser(
            username: $username,
            email: $email,
            password: $password
        ) {
            token
            users {
                _id
                username
            }
        }
    }
`;

export const CREATE_EVENT = gql `
    mutation createEvent(
        $eventname: String!
        $description: String!
        $startdate: Date!
        $enddate: Date!
    ) {
        createEvent(
            eventname: $eventname
            description: $description
            startdate: $startdate
            enddate: $enddate
        ) {
            users {
                _id
                username
            }
        }
    }
`;

export const CREATE_COMMENT = gql `
    mutation createComment(
        $commentText: String!
        $createdAt: Date!
        $username: String!
        $eventname: String!
    ) {
        createComment(
            commentText: $commentText
            createdAt: $createdAt
            username: $username
            eventname: $eventname
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const DELETE_EVENT = gql `
    mutation deleteEvent(
        $_id: ID!
    ) {
        deleteEvent(
            _id: $_id
        ) {
            token
            user {
                _id
            }
        }
    }
`;