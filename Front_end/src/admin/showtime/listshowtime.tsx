/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShowTimeList } from "../../service/showtime";
import { IShowTime } from "../../interface/shotime";

type Props = {};

const ListShowtime = (props: Props) => {
  const [showtimes, setShowtimes] = useState<IShowTime[]>([]);
  useEffect(() => {
    (async () => {
      const data = await ShowTimeList();
      setShowtimes(data);
    })();
  }, []);
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Movie ID</th>
              <th scope="col">Room ID </th>
              <th scope="col">Showtime Date</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {Array.isArray(showtimes) &&
              showtimes.map((showtime: IShowTime, i: number) => (
                <tr key={showtime.id}>
                  <td>{i + 1}</td>
                  <td>{showtime.movie_id}</td>
                  <td>{showtime.room_id}</td>
                  <td>{showtime.showtime_date}</td>
                  <td>{showtime.start_time}</td>
                  <td>{showtime.end_time}</td>
                  <td>
                    <NavLink to={`/admin/showtime/edit/${showtime.id}`}>
                      <button
                        type="button"
                        className="btn btn-warning text-center "
                      >
                        Cập nhật
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListShowtime;
