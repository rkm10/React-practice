import { useState } from "react"

export default function Form() {
      const [email, setEmail] = useState('')

      return (
            <>
                  <div className="border w-25 mt-5 p-4 m-auto">
                        <h2 className="text-primary text-center">Login Form</h2>
                        <div>
                              <label>Email</label>
                              <input type="email" className="form-control" value={email} onChange={
                                    (e) => { setEmail(e.target.value) }

                              } />
                        </div>
                  </div>
            </>
      )
}