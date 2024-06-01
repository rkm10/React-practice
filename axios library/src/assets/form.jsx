import { useState } from "react"

function Form(props) {
      const [product, setProduct] = useState(props.data)
      const [submitted, setSubmitted] = useState();

      let updateFormData = (event) => {
            const { name, value } = event.target;
            setProduct({ ...product, [name]: value })
      }
      let submit = (event) => {
            setSubmitted(true)
            event.preventDefault()
            if (!!product.name && !!product.price && !!product.category) {
                  props.add(product)
            }

      }
      let close = (event) => {
            event.preventDefault()
            props.close()
      }

      return (
            <div className="form-overlay">
                  <form>
                        <div className="form-control">
                              <label >Name:</label>
                              <input className="input input-bordered w-full m-2" value={product.name} type="text" name="name" placeholder="Product Name" onChange={updateFormData} />
                              {
                                    submitted && product.name.length < 5 && <span className="text-red-500"> product name must be 5 characters</span>
                              }
                        </div>
                        <div className="form-control">
                              <label >Price:</label>
                              <input className="input input-bordered w-full m-2" value={product.price} type="number" name="price" placeholder="Enter Price" onChange={updateFormData} />
                              {
                                    submitted && product.price === "" && <span className="text-red-500"> product price is required</span>
                              }
                        </div>
                        <div className="form-control">
                              <label >Category</label>
                              <select className="input input-bordered w-full m-2" name="category" placeholder="Select category" value={product.category} onChange={updateFormData}>
                                    <option value={-1}></option>
                                    <option value={'mobiles'}>mobile's</option>
                                    <option value={'tv'}>Tv's</option>
                                    <option value={'laptops'}>laptop's</option>
                              </select>
                              {
                                    submitted && product.category === "" && <span className=" text-red-500"> product category is required</span>
                              }
                        </div>
                        <button className="btn btn-primary float-end" onClick={submit}>send</button>
                        <button className="btn btn-secondary float-end" onClick={close}>cancel</button>
                  </form>
            </div>
      )
}

export default Form