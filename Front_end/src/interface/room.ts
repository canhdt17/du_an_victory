export interface IRoom {
  id?: number | string;
  room_name: string;
  bases_id: number ;
  base_name: string;
  seat_count: number;
}
export type RoomData = Pick<
  IRoom,
  "room_name" | "bases_id" | "base_name" | "seat_count"
>;
 