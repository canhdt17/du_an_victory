export interface ICategoryMovie{
    id:number|string,
    name:string
}
export type AreaData = Pick<ICategoryMovie,'name'>