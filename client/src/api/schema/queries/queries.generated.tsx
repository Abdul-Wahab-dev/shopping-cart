import * as Types from "../../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type CheckoutQueryVariables = Types.Exact<{ [key: string]: never }>;

export type CheckoutQuery = { __typename?: "Query"; checkout: string };

export type GetProductsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  __typename?: "Query";
  getProducts: {
    __typename?: "ProductResponse";
    total: number;
    products: Array<{
      __typename?: "Product";
      category: string;
      description: string;
      id: number;
      name: string;
      price: number;
      user?: {
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
      } | null;
    }>;
  };
};

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

export const CheckoutDocument = gql`
  query Checkout {
    checkout
  }
`;

/**
 * __useCheckoutQuery__
 *
 * To run a query within a React component, call `useCheckoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckoutQuery(
  baseOptions?: Apollo.QueryHookOptions<CheckoutQuery, CheckoutQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CheckoutQuery, CheckoutQueryVariables>(
    CheckoutDocument,
    options,
  );
}
export function useCheckoutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CheckoutQuery,
    CheckoutQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CheckoutQuery, CheckoutQueryVariables>(
    CheckoutDocument,
    options,
  );
}
export type CheckoutQueryHookResult = ReturnType<typeof useCheckoutQuery>;
export type CheckoutLazyQueryHookResult = ReturnType<
  typeof useCheckoutLazyQuery
>;
export type CheckoutQueryResult = Apollo.QueryResult<
  CheckoutQuery,
  CheckoutQueryVariables
>;
export const GetProductsDocument = gql`
  query GetProducts {
    getProducts {
      products {
        category
        description
        id
        name
        price
        user {
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
      total
    }
  }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options,
  );
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options,
  );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<
  typeof useGetProductsLazyQuery
>;
export type GetProductsQueryResult = Apollo.QueryResult<
  GetProductsQuery,
  GetProductsQueryVariables
>;
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
