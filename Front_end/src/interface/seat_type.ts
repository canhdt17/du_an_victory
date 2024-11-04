export interface ISeatType{
    id: ISeatType;
    seat_type_id:number|string,
    seat_type_name:string,
    seat_price:number,
}
export type RoomData = Pick<ISeatType,'seat_type_name'|'seat_price'>