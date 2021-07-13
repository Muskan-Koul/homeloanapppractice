// import { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import { authenticateUserAction } from "../redux/UserReducer";

import { useRef } from "react";
import { FormText } from "react-bootstrap";

// export const UserSignIn = () => {
//   const formEl = useRef();
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);
//   let history = useHistory();

//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   const updateUserName = (e) => setUserName(e.target.value);
//   const updatePassword = (e) => setPassword(e.target.value);

//   const signInUser = (e) => {
//     e.preventDefault();

//     const isFormValid = formEl.current.checkValidity();
//     console.log(isFormValid);

//     if (isFormValid) {
//       // dispatch the call to redux ::for API CALL
//       dispatch(authenticateUserAction({ userName, password }));
//     } else {
//       e.stopPropagation();
//       formEl.current.classList.add("was-validated");
//     }
//   };

//   // REACT ROUTE DOM
//   if (state.user.authSuccess === true) {
//     // redirecting the user /employee-list page;
//     // history.push("/employee-list");
//     history.push("/social-book");
//   }

//   return (
//     <div
//       className="bg-dark d-flex justify-content-center align-items-center"
//       style={{ height: "100vh" }}
//     >
//       <div className="w-50">
//         <h1 className="text-center alert alert-info">Application Sign</h1>

//         {state.user.authFailure && (
//           <h6 className="text-center alert alert-danger">
//             Invalid Credentials
//           </h6>
//         )}

//         <form ref={formEl} className="needs-validation" noValidate>
//           <div>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               value={userName}
//               onChange={updateUserName}
//               className="form-control form-control-lg mb-2"
//               required
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               value={password}
//               onChange={updatePassword}
//               placeholder="Enter Password"
//               className="form-control form-control-lg mb-2"
//               required
//             />
//           </div>

//           <div>
//             <input
//               type="button"
//               value="SIGN IN"
//               onClick={signInUser}
//               className="btn btn-info btn-lg w-100"
//             />
//           </div>

//           <div>
//             <Link to="/user-signup">
//               <input
//                 type="button"
//                 value="Signup Here"
//                 className="btn btn-lg btn-link w-100"
//               />
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };



export const UserSignin = () => {
    const formEl = useRef();

    const signInUser =(e)=> {
        e.preventDefault();

        // console.log("I will Authenticate");
        const isFormValid = formEl.current.checkValidity();
        console.log(isFormValid);

        if(isFormValid){
            //dispatch the call to the redux: for the api call
            //todo
            //on success, it will redirect to the next page

            // dispatch(authenticateUserAction({ userName, password }));
        }
        else{
            e.stopPropagation();
            formEl.current.classList.add("was-validated");

        }
    }
    return (

        <div className="bg-dark d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="w-50">
        <h1 className="text-center alert alert-info">User SignIn </h1>
        <form ref={formEl} className="needs-validation" noValidate>
            <div>
                <input type="text" 
                placeholder="Enter UserId" 
                className="form-control form-control-lg mb-2"
                required
                 />
            </div>
            <div>
                <input type="password" 
                placeholder="Enter Password" 
                className="form-control form-control-lg mb-2"
                required
                 />
            </div>
           <div>
              <select className="form-control form-control-lg mb-2" required >      
              <option  placeholder="Select Role">Select Role</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="landofficer">Land Officer</option>
                <option value="Financeofficer">Finance Officer</option>
              </select>
              </div>

              <div>  
                <input type="button"
                 value="Sign In"
                 onClick={signInUser}
                  className="btn btn-info btn-lg w-100" />
            </div>
            
           
        </form>
        </div>
        </div>
    );
};