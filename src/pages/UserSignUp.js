import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userCreateAction } from "../redux/store";

export const UserSignUp = () => {
    const formEl = useRef();

    const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => {
    // replacing all the non-digit ^\d with empty string.
    const numericValue = e.target.value.replace(/[^\d]/gi, "");
    setMobile(numericValue);
  };

    const signUpHere = (e) => {
      e.preventDefault();
  
      const isFormValid = formEl.current.checkValidity();
      console.log(isFormValid);
  
      if (isFormValid) {
        // dispatch the call to redux ::for API CALL
        // TODO
        // ON SUCCESS WILL REDIRECT TO NExT PAGE
        dispatch(userCreateAction({ userName, password, email, mobile }));

        // clear the form
        setUserName("");
        setPassword("");
        setEmail("");
        setMobile("");
      } else {
        e.stopPropagation();
        formEl.current.classList.add("was-validated");
      }
    };

  return (
   
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-50">
        <h2 className="text-center alert alert-info">
          Application Signup Here
        </h2>

        <form  ref={formEl} className="needs-validation" noValidate>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control form-control-lg mb-1"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control form-control-lg mb-1"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control form-control-lg mb-1"
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter Mobile"
              className="form-control form-control-lg mb-1"
              required
            />
          </div>

          <div>
            <input
              type="button"
              onClick={signUpHere}
              value="Register Here"
              className="btn btn-info btn-lg w-100"
            />
          </div>

          <div>
            <Link to="/user-signin">
              <input
                type="button"
                value="Signin Here"
                className="btn btn-link w-100"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};