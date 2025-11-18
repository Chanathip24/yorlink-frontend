import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query'

//[YORLINK REACT QUERY]
export type IBaseUseMutation<TData, TVariables> = UseMutationResult<TData, Error, TVariables>
export type IBaseUseQuery<TData> = UseQueryResult<TData, Error>
export type IBasePaginateQueryResult<T> = Omit<UseQueryResult<T, Error>, 'data'> & Required<T>

//error
export type IYorLinkApiClientErrorResponse = IYorLinkApiClientBaseResponse<null>

//paginate
export type IPaginate = {
  page: number
  size: number
  totalPages: number
  totalElements: number
}

//[RENTORA RESPONSE API CLIENT]
//base response
export type IYorLinkApiClientBaseResponse<T> = {
  success: boolean
  message: string
  data: T
}
//base paginate response
export type IYorLinkApiClientBasePaginateResponse<T> = IYorLinkApiClientBaseResponse<{
  data: Array<T>
  pagination: IPaginate
}>
