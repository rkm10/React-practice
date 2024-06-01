import { useState } from "react"

export default function Form() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [errors, setErrors] = useState({
            email: "",
            password: ""
      })
      const emailpattern = /"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"/

      function handleSubmit() {
            if (email.trim() === "") {
                  setErrors((errors) => ({ ...errors, email: "enter email address" }))
            }
            else if (!emailpattern.test(email)) {
                  setErrors((errors) => ({ ...errors, email: "enter vaild email address" }))
            }

            else {
                  setErrors((errors) => ({ ...errors, email: "" }))
            }
            if (password.trim() === "") {
                  setErrors((errors) => ({ ...errors, password: "enter password" }))
            }
            else if (password.trim().length < 8) {
                  setErrors((errors) => ({ ...errors, password: "password should be atleast 8 characters" }))
            }

            else {
                  setErrors((errors) => ({ ...errors, password: "" }))
            }

      }
      return (
            <>
                  <div className="border w-25 mt-5 p-4 m-auto">
                        <h2 className="text-primary text-center">Login Form</h2>
                        <div className="m-2">
                              <label>Email</label>
                              <input type="email" className="form-control" value={email} onChange={
                                    (e) => { setEmail(e.target.value) }

                              } />
                              {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className="m-2">
                              <label>Password</label>
                              <input type="password" className="form-control" value={password} onChange={
                                    (e) => { setPassword(e.target.value) }

                              } />
                              {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <div className="m-2">
                              <button className="btn btn-primary w-100" onClick={handleSubmit}
                              >Login</button>
                        </div>
                  </div>
            </>
      )
}