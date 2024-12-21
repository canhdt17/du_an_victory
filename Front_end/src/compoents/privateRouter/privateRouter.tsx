import React from 'react'
import { toast } from 'react-toastify'

type Props = {
    children:React.ReactNode
}

const PrivateRouter = ({children}: Props) => {
    const user = localStorage.getItem('token')
  if(user){
    return (
        <>{children}</>
    )
  }else{
    toast.error("Bạn Không Có Quyền Truy Cập");
  }
}

export default PrivateRouter