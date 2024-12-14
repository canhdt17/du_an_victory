export interface ISeatType{
    name_type: string;
    id?:number|string,
    seat_type_name:string,
    seat_price:number,
}
export type RoomData = Pick<ISeatType,'seat_type_name'|'seat_price'>