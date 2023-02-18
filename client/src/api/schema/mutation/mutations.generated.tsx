import * as Types from "../../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type AddProductMutationVariables = Types.Exact<{
  input: Types.ProductInput;
}>;

export type AddProductMutation = {
  __typename?: "Mutation";
  addProduct: {
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
  };
};

export type AddUserMutationVariables = Types.Exact<{
  input: Types.UserInput;
}>;

export type AddUserMutation = {
  __typename?: "Mutation";
  addUser: {
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
  };
};

export type LoginMutationVariables = Types.Exact<{
  input: Types.LoginInput;
}>;

export type LoginMutation = { __typename?: "Mutation"; login: string };

export type RegisterUserMutationVariables = Types.Exact<{
  input: Types.UserInput;
}>;

export type RegisterUserMutation = {
  __typename?: "Mutation";
  registerUser: {
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
  };
};

export type UpdateProductMutationVariables = Types.Exact<{
  input: Types.ProductInput;
}>;

export type UpdateProductMutation = {
  __typename?: "Mutation";
  updateProduct: {
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
  };
};

export const AddProductDocument = gql`
  mutation AddProduct($input: productInput!) {
    addProduct(input: $input) {
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
  }
`;
export type AddProductMutationFn = Apollo.MutationFunction<
  AddProductMutation,
  AddProductMutationVariables
>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddProductMutation,
    AddProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(
    AddProductDocument,
    options,
  );
}
export type AddProductMutationHookResult = ReturnType<
  typeof useAddProductMutation
>;
export type AddProductMutationResult =
  Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<
  AddProductMutation,
  AddProductMutationVariables
>;
export const AddUserDocument = gql`
  mutation AddUser($input: userInput!) {
    addUser(input: $input) {
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
`;
export type AddUserMutationFn = Apollo.MutationFunction<
  AddUserMutation,
  AddUserMutationVariables
>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserMutation,
    AddUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(
    AddUserDocument,
    options,
  );
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input)
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterUserDocument = gql`
  mutation RegisterUser($input: userInput!) {
    registerUser(input: $input) {
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
`;
export type RegisterUserMutationFn = Apollo.MutationFunction<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >(RegisterUserDocument, options);
}
export type RegisterUserMutationHookResult = ReturnType<
  typeof useRegisterUserMutation
>;
export type RegisterUserMutationResult =
  Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;
export const UpdateProductDocument = gql`
  mutation UpdateProduct($input: productInput!) {
    updateProduct(input: $input) {
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
  }
`;
export type UpdateProductMutationFn = Apollo.MutationFunction<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(UpdateProductDocument, options);
}
export type UpdateProductMutationHookResult = ReturnType<
  typeof useUpdateProductMutation
>;
export type UpdateProductMutationResult =
  Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
