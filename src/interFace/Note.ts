export type TNote = {
    id?: string,
    title: string,
    content: string,
    tagsTags: string[],
    createdBy?: string,
    updatedBy?: string,
}

export type TLists = { list: Object, count: number, page: number, pageSize: number }
