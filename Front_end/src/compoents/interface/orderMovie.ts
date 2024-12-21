/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ICimena {
  _id: any;
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
  showtime_date: string;
  start_time: string;
  end_time: string;
}
export interface IRoom {
  id?: number | string;
  room_name: string;
  area_id: number | string;
  total_seat: number;
}
export interface ISeat {
  seatPrice : ISeatType[];
  seatInfo: any;
  seatType: any;
  status: any;
  id?: number | string;
  seat_number: number | string;
  seat_type_id: number | string;
  room_id: number | string;
  deleted_at: null;
  created_at: null;
  updated_at: null;
}

export interface ISeatInfo {
  id: number;
  seatTypeId: number;
  seatNumber: number;
  roomId: number;
}
export interface ISeatType {
  name_type: string;
  id?: number | string;
  seat_type_name: string;
  seat_price: number;
}
export interface IMovie {
  type: ITypeMovie;
  category: ICategory;
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
  selectedSeats: ISeat[];
  selectedCimena: ICimena;
  selectedRoom: IRoom;
  movieDetail: IMovie;
  totalPrice: number;
}
export interface ICategory {
  created_at: string;
  deleted_at: string;
  id: number;
  name_category: string;
  updated_at: string;
}
export interface ITypeMovie {
  id: number | string;
  name_type: string;
  deleted_at: null;
  created_at: null;
  updated_at: null;
}







