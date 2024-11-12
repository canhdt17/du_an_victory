export interface INews{
    id:number|string,
    name_TinTuc:string,
    sub_title:string,
    content:string,
    imager:string,
}
export type NewsData = Pick<INews,'name_TinTuc'|'sub_title'|'content'|'imager'>