export type PaginationPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onChangedPage: (n: number) => void
}