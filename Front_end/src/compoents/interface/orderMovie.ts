/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ICimena {
  id: number;
  areaId: number;
  name: string;
  address: string;
}
export interface IBase {
  id: number | string;
  base_name: string;
}
export interface ITime {
  id: number;
  showTimeDate: string;
  startTime: string;
  endTime: string;
}
export interface IRoom {
  id?: number | string;
  room_name: string;
  area_id: number | string;
  total_seat: number;
}
export interface ISeat {
  seatInfo: any;
  seatType: any;
  status: any;
  id?: number | string,
  seat_number: number | string,
  seat_type_id: number | string,
  room_id: number | string,
  seat_status: string,
  deleted_at: null,
  created_at: null,
  updated_at: null,
}

export interface ISeatInfo {
  id: number;
  seatTypeId: number;
  seatNumber: number;
  roomId: number;
}
export interface ISeatType{
  name_type: string;
  id?:number|string,
  seat_type_name:string,
  seat_price:number,
}
export interface IMovie {
  id: string | number;
  name_movie: string;
  image: string;
  type_id: string | number;
  duration: string;
  nation: string;
  director: string;
  performer: string;
  show: string;
  content: string | null;
  link_trailler: string;
  category_id: string | number;
  name_type: string;
  name_category: string;
}
export interface IOrderInfoStorage {
    selectedSeats:ISeat[],
    selectedCimena: ICimena,
    selectedRoom: IRoom,
    movieDetail: IMovie,
    totalPrice: number
}
