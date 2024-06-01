import { useState } from "react"
import { useDispatch } from "react-redux"
import { deposit, withdraw, userName, mobile } from "./Actions"

export default function Form() {
      let dispatch = useDispatch()
      let [Amount, updateAmount] = useState()
      let [Name, updateName] = useState()
      let [Mobile, updateMobile] = useState()
      return (
            <>
                  <div className="card card-compact card-bordered w-2/5 shadow-x bg-stone-950 text-white p-5 my-5">
                        <h2>Form</h2>
                        <div className="join join-vertical py-3">
                              <div className="card-actions justify-evenly">
                                    <input className=" input input-bordered join-item" type="number" placeholder="Enter Amount" value={Amount} onChange={e => updateAmount(e.target.value)}
                                    // onChange={(e) => {
                                    //       let dataamt = e.target.value
                                    //       updateAmount(dataamt);
                                    // }}
                                    />
                                    <button className=" btn glass" onClick={() => { dispatch(deposit(Amount)); updateAmount("") }}>Deposit</button>
                                    <button className=" btn glass" onClick={() => { dispatch(withdraw(Amount)); updateAmount("") }}>withdraw</button>
                              </div>
                              <div className="card-actions justify-evenly" >
                                    <input className="input input-bordered join-item" type="text" placeholder="Enter User name" value={Name} onChange={e => updateName(e.target.value)} />
                                    <button className=" btn glass" onClick={() => { dispatch(userName(Name)); updateName("") }}>update name</button>
                              </div>
                              <div className="card-actions justify-evenly" >
                                    <input className="input input-bordered join-item" type="text" placeholder="Enter phone number" value={Mobile} onChange={e => updateMobile(e.target.value)} />
                                    <button className=" btn glass" onClick={() => { dispatch(mobile(Mobile)); updateMobile("") }}>update name</button>
                              </div>
                        </div>
                        <div >
                        </div>
                  </div>
            </>
      )
}

