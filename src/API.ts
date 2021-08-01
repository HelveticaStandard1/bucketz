/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  userId: string,
  name: string,
};

export type ModelUserConditionInput = {
  userId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  userId: string,
  name: string,
  accounts?: ModelAccountConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items?:  Array<Account | null > | null,
  nextToken?: string | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  userId: string,
  totalValue: string,
  buckets?: ModelBucketConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBucketConnection = {
  __typename: "ModelBucketConnection",
  items?:  Array<Bucket | null > | null,
  nextToken?: string | null,
};

export type Bucket = {
  __typename: "Bucket",
  id: string,
  title: string,
  goal: number,
  current: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAccountInput = {
  id?: string | null,
  userId: string,
  totalValue: string,
};

export type ModelAccountConditionInput = {
  userId?: ModelStringInput | null,
  totalValue?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type UpdateAccountInput = {
  id: string,
  userId?: string | null,
  totalValue?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateBucketInput = {
  id?: string | null,
  title: string,
  goal: number,
  current: number,
};

export type ModelBucketConditionInput = {
  title?: ModelStringInput | null,
  goal?: ModelIntInput | null,
  current?: ModelIntInput | null,
  and?: Array< ModelBucketConditionInput | null > | null,
  or?: Array< ModelBucketConditionInput | null > | null,
  not?: ModelBucketConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBucketInput = {
  id: string,
  title?: string | null,
  goal?: number | null,
  current?: number | null,
};

export type DeleteBucketInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  totalValue?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelBucketFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  goal?: ModelIntInput | null,
  current?: ModelIntInput | null,
  and?: Array< ModelBucketFilterInput | null > | null,
  or?: Array< ModelBucketFilterInput | null > | null,
  not?: ModelBucketFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      items?:  Array< {
        __typename: "Account",
        id: string,
        userId: string,
        totalValue: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      items?:  Array< {
        __typename: "Account",
        id: string,
        userId: string,
        totalValue: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      items?:  Array< {
        __typename: "Account",
        id: string,
        userId: string,
        totalValue: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    totalValue: string,
    buckets?:  {
      __typename: "ModelBucketConnection",
      items?:  Array< {
        __typename: "Bucket",
        id: string,
        title: string,
        goal: number,
        current: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    totalValue: string,
    buckets?:  {
      __typename: "ModelBucketConnection",
      items?:  Array< {
        __typename: "Bucket",
        id: string,
        title: string,
        goal: number,
        current: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    totalValue: string,
    buckets?:  {
      __typename: "ModelBucketConnection",
      items?:  Array< {
        __typename: "Bucket",
        id: string,
        title: string,
        goal: number,
        current: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBucketMutationVariables = {
  input: CreateBucketInput,
  condition?: ModelBucketConditionInput | null,
};

export type CreateBucketMutation = {
  createBucket?:  {
    __typename: "Bucket",
    id: string,
    title: string,
    goal: number,
    current: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBucketMutationVariables = {
  input: UpdateBucketInput,
  condition?: ModelBucketConditionInput | null,
};

export type UpdateBucketMutation = {
  updateBucket?:  {
    __typename: "Bucket",
    id: string,
    title: string,
    goal: number,
    current: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBucketMutationVariables = {
  input: DeleteBucketInput,
  condition?: ModelBucketConditionInput | null,
};

export type DeleteBucketMutation = {
  deleteBucket?:  {
    __typename: "Bucket",
    id: string,
    title: string,
    goal: number,
    current: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      items?:  Array< {
        __typename: "Account",
        id: string,
        userId: string,
        totalValue: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      userId: string,
      name: string,
      accounts?:  {
        __typename: "ModelAccountConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    totalValue: string,
    buckets?:  {
      __typename: "ModelBucketConnection",
      items?:  Array< {
        __typename: "Bucket",
        id: string,
        title: string,
        goal: number,
        current: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items?:  Array< {
      __typename: "Account",
      id: string,
      userId: string,
      totalValue: string,
      buckets?:  {
        __typename: "ModelBucketConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBucketQueryVariables = {
  id: string,
};

export type GetBucketQuery = {
  getBucket?:  {
    __typename: "Bucket",
    id: string,
    title: string,
    goal: number,
    current: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBucketsQueryVariables = {
  filter?: ModelBucketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBucketsQuery = {
  listBuckets?:  {
    __typename: "ModelBucketConnection",
    items?:  Array< {
      __typename: "Bucket",
      id: string,
      title: string,
      goal: number,
      current: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      items?:  Array< {
        __typename: "Account",
        id: string,
        userId: string,
        totalValue: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      items?:  Array< {
        __typename: "Account",
        id: string,
        userId: string,
        totalValue: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      items?:  Array< {
        __typename: "Account",
        id: string,
        userId: string,
        totalValue: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    totalValue: string,
    buckets?:  {
      __typename: "ModelBucketConnection",
      items?:  Array< {
        __typename: "Bucket",
        id: string,
        title: string,
        goal: number,
        current: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    totalValue: string,
    buckets?:  {
      __typename: "ModelBucketConnection",
      items?:  Array< {
        __typename: "Bucket",
        id: string,
        title: string,
        goal: number,
        current: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    totalValue: string,
    buckets?:  {
      __typename: "ModelBucketConnection",
      items?:  Array< {
        __typename: "Bucket",
        id: string,
        title: string,
        goal: number,
        current: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBucketSubscription = {
  onCreateBucket?:  {
    __typename: "Bucket",
    id: string,
    title: string,
    goal: number,
    current: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBucketSubscription = {
  onUpdateBucket?:  {
    __typename: "Bucket",
    id: string,
    title: string,
    goal: number,
    current: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBucketSubscription = {
  onDeleteBucket?:  {
    __typename: "Bucket",
    id: string,
    title: string,
    goal: number,
    current: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
