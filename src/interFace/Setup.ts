export type Tnote = {
    id? : string,
    title : string,
    content : string,
    tagsTags : string[],
    createdBy? : string,
    updatedBy? : string,
}

export type Tlists = {list:Object , count: number , page : number , pageSize:number}
