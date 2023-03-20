import * as Types from "../../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "Query";
  getUsers: {
    __typename?: "UserResponse";
    total: number;
    users: Array<{
      __typename?: "User";
      email: string;
      id: number;
      name: string;
      role: Types.Role;
      posts?: Array<{
        __typename?: "Post";
        authorId: number;
        content: string;
        createdAt: any;
        id: number;
        published: boolean;
        title: string;
        updatedAt: any;
      }> | null;
    }>;
  };
};

export type HelloQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
  name: Types.Scalars["String"];
  price: Types.Scalars["Float"];
}>;

export type HelloQuery = {
  __typename?: "Query";
  hello: { __typename?: "Book"; id: string; name: string; price: number };
};

export type RetriveProductsQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type RetriveProductsQuery = {
  __typename?: "Query";
  retriveProducts: {
    __typename?: "ProductResponse";
    total: number;
    products: Array<{
      __typename?: "Product";
      description: string;
      id: string;
      name: string;
      prices: Array<{
        __typename?: "Price";
        currency: string;
        id: string;
        interval: string;
        type: string;
        unit_amount: number;
        unit_amount_decimal: string;
      }>;
    }>;
  };
};

export const GetUsersDocument = gql`
  query GetUsers {
    getUsers {
      total
      users {
        email
        id
        name
        posts {
          authorId
          content
          createdAt
          id
          published
          title
          updatedAt
        }
        role
      }
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const HelloDocument = gql`
  query Hello($id: String!, $name: String!, $price: Float!) {
    hello(id: $id, name: $name, price: $price) {
      id
      name
      price
    }
  }
`;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useHelloQuery(
  baseOptions: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    options,
  );
}
export function useHelloLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    options,
  );
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<
  HelloQuery,
  HelloQueryVariables
>;
export const RetriveProductsDocument = gql`
  query RetriveProducts {
    retriveProducts {
      products {
        description
        id
        name
        prices {
          currency
          id
          interval
          type
          unit_amount
          unit_amount_decimal
        }
      }
      total
    }
  }
`;

/**
 * __useRetriveProductsQuery__
 *
 * To run a query within a React component, call `useRetriveProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetriveProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetriveProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRetriveProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RetriveProductsQuery,
    RetriveProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RetriveProductsQuery, RetriveProductsQueryVariables>(
    RetriveProductsDocument,
    options,
  );
}
export function useRetriveProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RetriveProductsQuery,
    RetriveProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RetriveProductsQuery,
    RetriveProductsQueryVariables
  >(RetriveProductsDocument, options);
}
export type RetriveProductsQueryHookResult = ReturnType<
  typeof useRetriveProductsQuery
>;
export type RetriveProductsLazyQueryHookResult = ReturnType<
  typeof useRetriveProductsLazyQuery
>;
export type RetriveProductsQueryResult = Apollo.QueryResult<
  RetriveProductsQuery,
  RetriveProductsQueryVariables
>;
