import { useSelector } from "react-redux"



export default function Account() {
      let data = useSelector((state) => {
            return state;
      })

      return (
            <>
                  <div className="card card-compact card-bordered w-96 shadow-x bg-stone-950 text-white">
                        <h2 className=" text-primary ">Account Details</h2>
                        <table className="table table-zebra w-96">
                              <thead>
                                    <tr>
                                          <th>Balance</th>
                                          <th>User Name</th>
                                          <th>Mobile</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <th>{data.balance}</th>
                                          <th>{data.fullName}</th>
                                          <th>{data.mobile}</th>
                                    </tr>
                              </tbody>
                        </table>

                  </div>
            </>
      )

} 