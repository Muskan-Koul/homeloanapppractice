import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authenticateUserAction } from "../redux/store";


export const UserSignin = () => {

    const formEl = useRef();

    const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let history = useHistory();

  const [userId, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRole = (e) => setRole(e.target.value);

  const signInUser = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      // TODO
      // ON SUCCESS WILL REDIRECT TO NExT PAGE
      dispatch(authenticateUserAction({ userId, password, role}));
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };
    // REACT ROUTE DOM
  if (state.authSuccess == true) {
    // redirecting the user /employee-list page;
    console.log("success");
    history.push("/employee-list");
    
  }

    return (

        <div className="bg-dark d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="w-50">
        <h1 className="text-center alert alert-info">User SignIn </h1>

        {state.authFailure && (
          <h6 className="text-center alert alert-danger">
            Invalid Credentials
          </h6>
        )}

        <form ref={formEl} className="needs-validation" noValidate >
            <div>
                <input type="text" 
                 value={userId}
                 onChange={updateUserName}
                placeholder="Enter UserId" 
                className="form-control form-control-lg mb-2"
                required
                 />
            </div>
            <div>
                <input type="password" 
                 value={password}
                 onChange={updatePassword}
                placeholder="Enter Password" 
                className="form-control form-control-lg mb-2"
                required
                 />
            </div>
           <div>
              <select onChange={updateRole} className="form-control form-control-lg mb-2" required >      
                <option value="admin" placeholder= "Select Role">Admin</option>
                <option value="customer">Customer</option>
                <option value="landOfficer">Land Officer</option>
                <option value="financeOfficer">Finance Officer</option>
              </select>
              </div>

              <div>
              
                <input type="button"
                 value="Sign In"
                  onClick={signInUser}
                  className="btn btn-info btn-lg w-100" />
                 
            </div>

            <div>
            <Link to="/user-signup">
              <input
                type="button"
                value="Signup Here"
                className="btn btn-link w-100"
              />
            </Link>
          </div>
            
           
        </form>
        </div>
        </div>
    );
};
