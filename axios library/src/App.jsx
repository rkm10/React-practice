import React, { useEffect, useState } from "react"
import Form from "./assets/form"
import Table from "./table"
import { deleteData, getData, postData, putData } from "./api"

function App() {
  const [openForm, setOpenForm] = useState(false)
  const [products, setProducts] = useState()
  const [edit, setEdit] = useState()
  const [initialForm, setForm] = useState({ name: '', price: '', category: '' })

  useEffect(() => {
    getProducts()
  }, []
  )

  let getProducts = async () => {
    let res = await getData();
    setProducts(res.data)
  }
  let deleteProducts = async (id) => {
    await deleteData(id);
    getProducts()
  }
  let addProducts = async (products) => {
    let data = {
      name: products.name,
      category: products.category,
      price: products.price
    }
    if (edit)
      await putData(products.id, data)
    else
      await postData(data);
    getProducts()
    setOpenForm(false)
  }

  let editProducts = async (data) => {
    setForm(data)
    setOpenForm(true)
    setEdit(true)
  }

  let showForm = () => {
    setOpenForm(true)
    setForm({
      name: '', price: '', category: ''
    })
  }

  let closeForm = () => {
    setOpenForm(false)
  }
  return (
    <>
      <div className="container justify-items-center items-center text-center py-10">
        <h2>CRUD operations</h2>
        <button className="btn btn-accent" onClick={() => { showForm() }}>Add Products</button>
        <div className="bg-base-200 m-5">
          <Table products={products} delete={deleteProducts} edit={editProducts} />
          {
            openForm && <Form close={closeForm} data={initialForm} add={addProducts}></Form>
          }
        </div>
      </div>
    </>
  )
}
export default App
