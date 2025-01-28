import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const{children, title, type } = props;
    return(
      <div className="text-2xl flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-red-600">{title}</h1>
          <p className="font-medium text-slate-500 text-sm">
          Assalamualaikum Dekk..🙏
          </p>
          {children}
          <p className="text-sm mt-5 text-center">
          {type === "login" && "Belum Punya Akun?"}
          {type === "register" && "Sudah Punya Akun?"}
          {type === "saran" && "Terimakasih atas masukannya"}
          </p>

            {type === "login" && (
              <Link to="/register" className="font-bold text-red-600 text-center">
              Register Sek..
              </Link>
            )}

            {(type === "register" || type === "saran"
            ) && (
              <Link to="/login" className="font-bold text-red-600">
              Login Sek..
              </Link>
            )}

        
          <p className="text-sm nt-5 text-center">
            {type === "login" && ( 
              <Link to="/saran" className="font-bold text-red-600">
              Keluhan & Saran.. 
              </Link>
            )}
            {type === "register" && ( 
              <Link to="/saran" className="font-bold text-red-600">
              Keluhan & Saran.. 
              </Link>
            )}
            </p>
        </div>
     </div> 
  );
};

const Navigation =({ type }) =>{
  if (type ==="login") {
  return (
    <p className="text-sm mt-5 text-center">
      "Belum Punya Akun?" {" "}
      <Link to="/register" className="font-bold text-red-600 text-center">
        Register Sek..
      </Link>
    </p>
    )
 } else if (type === "register") {
  return (
      <p className="text-sm mt-5 text-center">
        Sudah Punya Akun? {" "}
        <Link to="/login" className="font-bold text-red-600">
          Login Sek..
        </Link>
       </p>
    )
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Terimakasih Atas Masukannya.. {" "}
        <Link to="/saran" className="font-bold text-red-600">
          Keluhan & Saran..
        </Link>
       </p>
    )
  }
}
export default AuthLayout;