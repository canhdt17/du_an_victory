import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const ListArea = (props: Props) => {
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Tên Khu Vực</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody className="text-center">
            
                <tr >
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    
                     
                
                      <button
                        type="button"
                        className="btn btn-warning text-center "
                      >
                        Cập nhật
                      </button>
                   
                      
                      
                    
                  </td>
                </tr>
             
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListArea