export interface ICimena {
  id: number;
  areaId: number;
  name: string;
  address: string;
}
export interface IArea {
  id: number;
  name: string;
}
export interface ITime {
  id: number;
  showTimeDate: string;
  startTime: string;
  endTime: string;
}
export interface IRoom {
  id: number;
  showTimeDate: string;
  startTime: string;
  endTime: string;
}
export interface ISeat {
  id: number;
  seatId: number;
  showtimeId: number;
  seatInfo: ISeatInfo;
  seatType: ISeatType;
  status: boolean;
}

export interface ISeatInfo {
  id: number;
  seatTypeId: number;
  seatNumber: number;
  roomId: number;
}
export interface ISeatType {
  id: number;
  seatTypeName: string;
  seatPrice: string;
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
