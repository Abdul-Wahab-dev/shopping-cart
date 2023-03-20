import * as Types from "../../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
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

export type CheckoutMutationVariables = Types.Exact<{ [key: string]: never }>;

export type CheckoutMutation = { __typename?: "Mutation"; checkout: string };

export type CreateCustomerMutationVariables = Types.Exact<{
  email: Types.Scalars["String"];
  name: Types.Scalars["String"];
}>;

export type CreateCustomerMutation = {
  __typename?: "Mutation";
  createCustomer: string;
};

export type CreatePriceMutationVariables = Types.Exact<{
  input: Types.PriceInput;
}>;

export type CreatePriceMutation = {
  __typename?: "Mutation";
  createPrice: string;
};

export type CreateProductMutationVariables = Types.Exact<{
  name: Types.Scalars["String"];
}>;

export type CreateProductMutation = {
  __typename?: "Mutation";
  createProduct: string;
};

export type CreateSubscriptionMutationVariables = Types.Exact<{
  input: Types.SubscriptionInput;
}>;

export type CreateSubscriptionMutation = {
  __typename?: "Mutation";
  createSubscription: {
    __typename?: "subscription";
    clientSecret: string;
    subscriptionId: string;
  };
};

export type InitializePaymentMutationVariables = Types.Exact<{
  input: Types.PaymentIntentInput;
}>;

export type InitializePaymentMutation = {
  __typename?: "Mutation";
  initializePayment: string;
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

export type UpdateUserMutationVariables = Types.Exact<{
  input: Types.UserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: string;
};

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
export const CheckoutDocument = gql`
  mutation Checkout {
    checkout
  }
`;
export type CheckoutMutationFn = Apollo.MutationFunction<
  CheckoutMutation,
  CheckoutMutationVariables
>;

/**
 * __useCheckoutMutation__
 *
 * To run a mutation, you first call `useCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutMutation, { data, loading, error }] = useCheckoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useCheckoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CheckoutMutation,
    CheckoutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CheckoutMutation, CheckoutMutationVariables>(
    CheckoutDocument,
    options,
  );
}
export type CheckoutMutationHookResult = ReturnType<typeof useCheckoutMutation>;
export type CheckoutMutationResult = Apollo.MutationResult<CheckoutMutation>;
export type CheckoutMutationOptions = Apollo.BaseMutationOptions<
  CheckoutMutation,
  CheckoutMutationVariables
>;
export const CreateCustomerDocument = gql`
  mutation CreateCustomer($email: String!, $name: String!) {
    createCustomer(email: $email, name: $name)
  }
`;
export type CreateCustomerMutationFn = Apollo.MutationFunction<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >(CreateCustomerDocument, options);
}
export type CreateCustomerMutationHookResult = ReturnType<
  typeof useCreateCustomerMutation
>;
export type CreateCustomerMutationResult =
  Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>;
export const CreatePriceDocument = gql`
  mutation CreatePrice($input: priceInput!) {
    createPrice(input: $input)
  }
`;
export type CreatePriceMutationFn = Apollo.MutationFunction<
  CreatePriceMutation,
  CreatePriceMutationVariables
>;

/**
 * __useCreatePriceMutation__
 *
 * To run a mutation, you first call `useCreatePriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPriceMutation, { data, loading, error }] = useCreatePriceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePriceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePriceMutation,
    CreatePriceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePriceMutation, CreatePriceMutationVariables>(
    CreatePriceDocument,
    options,
  );
}
export type CreatePriceMutationHookResult = ReturnType<
  typeof useCreatePriceMutation
>;
export type CreatePriceMutationResult =
  Apollo.MutationResult<CreatePriceMutation>;
export type CreatePriceMutationOptions = Apollo.BaseMutationOptions<
  CreatePriceMutation,
  CreatePriceMutationVariables
>;
export const CreateProductDocument = gql`
  mutation CreateProduct($name: String!) {
    createProduct(name: $name)
  }
`;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>;
export type CreateProductMutationResult =
  Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const CreateSubscriptionDocument = gql`
  mutation CreateSubscription($input: subscriptionInput!) {
    createSubscription(input: $input) {
      clientSecret
      subscriptionId
    }
  }
`;
export type CreateSubscriptionMutationFn = Apollo.MutationFunction<
  CreateSubscriptionMutation,
  CreateSubscriptionMutationVariables
>;

/**
 * __useCreateSubscriptionMutation__
 *
 * To run a mutation, you first call `useCreateSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubscriptionMutation, { data, loading, error }] = useCreateSubscriptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSubscriptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSubscriptionMutation,
    CreateSubscriptionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSubscriptionMutation,
    CreateSubscriptionMutationVariables
  >(CreateSubscriptionDocument, options);
}
export type CreateSubscriptionMutationHookResult = ReturnType<
  typeof useCreateSubscriptionMutation
>;
export type CreateSubscriptionMutationResult =
  Apollo.MutationResult<CreateSubscriptionMutation>;
export type CreateSubscriptionMutationOptions = Apollo.BaseMutationOptions<
  CreateSubscriptionMutation,
  CreateSubscriptionMutationVariables
>;
export const InitializePaymentDocument = gql`
  mutation InitializePayment($input: PaymentIntentInput!) {
    initializePayment(input: $input)
  }
`;
export type InitializePaymentMutationFn = Apollo.MutationFunction<
  InitializePaymentMutation,
  InitializePaymentMutationVariables
>;

/**
 * __useInitializePaymentMutation__
 *
 * To run a mutation, you first call `useInitializePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitializePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initializePaymentMutation, { data, loading, error }] = useInitializePaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInitializePaymentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InitializePaymentMutation,
    InitializePaymentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InitializePaymentMutation,
    InitializePaymentMutationVariables
  >(InitializePaymentDocument, options);
}
export type InitializePaymentMutationHookResult = ReturnType<
  typeof useInitializePaymentMutation
>;
export type InitializePaymentMutationResult =
  Apollo.MutationResult<InitializePaymentMutation>;
export type InitializePaymentMutationOptions = Apollo.BaseMutationOptions<
  InitializePaymentMutation,
  InitializePaymentMutationVariables
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
export const UpdateUserDocument = gql`
  mutation UpdateUser($input: userInput!) {
    updateUser(input: $input)
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
