export interface IArea {
    area_id:number|string
    area_name:string
}
export type AreaData = Pick<IArea,'area_name'>