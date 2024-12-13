export interface IRoom {
  id?: number | string;
  room_name: string;
  base_id: number | string;
  base_name: string;
  seat_count: number;
}
export type RoomData = Pick<
  IRoom,
  "room_name" | "base_id" | "base_name" | "seat_count"
>;
