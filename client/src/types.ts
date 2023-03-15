export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Book = {
  __typename?: "Book";
  id: Scalars["String"];
  name: Scalars["String"];
  price: Scalars["Float"];
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  addUser: User;
  checkout: Scalars["String"];
  createCustomer: Scalars["String"];
  createPrice: Scalars["String"];
  createProduct: Scalars["String"];
  createSubscription: Scalars["String"];
  initializePayment: Scalars["String"];
  login: Scalars["String"];
  registerUser: User;
  updateUser: Scalars["String"];
};

export type MutationAddUserArgs = {
  input: UserInput;
};

export type MutationCreateCustomerArgs = {
  email: Scalars["String"];
};

export type MutationCreatePriceArgs = {
  input: PriceInput;
};

export type MutationCreateProductArgs = {
  name: Scalars["String"];
};

export type MutationCreateSubscriptionArgs = {
  input: SubscriptionInput;
};

export type MutationInitializePaymentArgs = {
  input: PaymentIntentInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterUserArgs = {
  input: UserInput;
};

export type MutationUpdateUserArgs = {
  input: UserInput;
};

export type PaymentIntentInput = {
  amount: Scalars["Float"];
  currency: Scalars["String"];
};

export type Post = {
  __typename?: "Post";
  authorId: Scalars["Float"];
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["Float"];
  published: Scalars["Boolean"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type Query = {
  __typename?: "Query";
  getUsers: UserResponse;
  hello: Book;
};

export type QueryHelloArgs = {
  id: Scalars["String"];
  name: Scalars["String"];
  price: Scalars["Float"];
};

export enum Role {
  Account = "ACCOUNT",
  Admin = "ADMIN",
  SuperAdmin = "SUPER_ADMIN",
  User = "USER",
}

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["Float"];
  name: Scalars["String"];
  posts?: Maybe<Array<Post>>;
  role: Role;
};

export type UserResponse = {
  __typename?: "UserResponse";
  total: Scalars["Float"];
  users: Array<User>;
};

export type PriceInput = {
  amount: Scalars["Float"];
  currency: Scalars["String"];
  interval: Scalars["String"];
  productId: Scalars["String"];
};

export type SubscriptionInput = {
  customerId: Scalars["String"];
  priceId: Scalars["String"];
};

export type UserInput = {
  customerId?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  id?: InputMaybe<Scalars["Float"]>;
  name: Scalars["String"];
  password?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Role>;
};
