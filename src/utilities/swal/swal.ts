import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";

export const successSwal = (route: string, navigate: NavigateFunction) => {
  Swal.fire({
    icon: "success",
    title: "Operation Succeeded...",
  }).then((res) => {
    if (res.isConfirmed) {
      navigate(route);
    }
  });
};

export function ErrorSwal(message: string) {
  Swal.fire({
    icon: "error",
    title: message ? message : "Something went wrong!",
  });
}
