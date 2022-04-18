import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";

export const successSwal = (route: string , navigate: NavigateFunction) => {

  Swal.fire({
    icon: "success",
    title: "Operation Succeeded...",
    // text: "Something went wrong!",
  }).then((res) => {
    if(res.isConfirmed){
        navigate(route);
    }
    
  });
}

export function ErrorSwal() {
  Swal.fire({
    icon: "error",
    title: "Something went wrong!",
  });
}
