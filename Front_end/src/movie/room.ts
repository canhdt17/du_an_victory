export interface IRoom{
    room_id:number|string
    room_name:string
    area_id:number|string
    total_seat:number
}
export type RoomData = Pick<IRoom,'room_name'|'area_id'|'total_seat'>