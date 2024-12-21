/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISeat {
  seat_status: string;
  seat_price: ReactNode;
  seatType: any;
  id?: number | string,
  seat_number: number | string,
  seat_type_id: number | string,
  seat_type_name: string; 
  room_id: number | string,
  base_id :IBase,
  deleted_at: null,
  created_at: null,
  updated_at: null,
}
export interface IBase {
  id: number | string;
  base_name: string;
}