import React, { useState } from "react"
import Firstcomponent from "./Firstcomponent"



let firstcomponents = [
      {
            id: 21,
            name: 'Raj',
            age: 25,
            place: 'Bangalore'
      },
      {
            id: 22,
            name: 'kumar',
            age: 25,
            place: 'Bangalore'
      },
      {
            id: 23,
            name: 'RajKumar',
            age: 27,
            place: 'Bangalore'
      }
]

export default function Display() {

      return (
            <>
                  < div style={{ display: 'flex', columnGap: "20px", padding: '20px', border: '2px solid black', margin: '20px' }}>
                        <FlexItems />
                        <ButtonItems />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', columnGap: "20px", alignItems: 'center', border: '2px solid black', margin: '20px' }}>
                        <Price />
                  </div>
                  <div style={{ padding: '30px', border: '2px solid black', margin: '20px', columnGap: '20px' }}>
                        <StateUse />
                  </div>
                  {
                        firstcomponents.map(
                              (f) => {
                                    return <Firstcomponent key={f.id} id={f.id} name={f.name} age={f.age} place={f.place} />
                              }
                        )

                  }
            </>
      )
}


const FlexItems = () => {
      return (
            <>
                  <div>first Div</div>
                  <div>second Div</div>
                  <div>third Div</div>
            </>
      )
}

const ButtonItems = () => {
      function msgdisplay(num, e) {
            alert("please don't click me" + num)
            console.dir(e.target)
      }
      return (
            <>
                  {/* <button onClick={(e) => { msgdisplay(10, e) }}>Click ME</button > */}
                  <input type="text" onKeyUp={(e) => { msgdisplay(20, e) }} />
            </>
      )
}

class Price extends React.Component {
      state = {
            product: 'one plus',
            price: 61000
      }

      constructor() {
            super();
            this.updatePrice = this.updatePrice.bind(this)
      }

      render() {
            return (
                  <>
                        <h1>State method along with bind</h1>
                        <h3>{this.state.product}</h3>
                        <h4>{this.state.price}</h4>
                        <input type="number" id="price" />
                        <button onClick={this.updatePrice}>Update</button>
                  </>
            )
      }
      updatePrice() {
            let p = document.getElementById('price').value
            console.log(p)
            this.setState({
                  price: p
            }, () => {
                  console.log(this.state)
            }
            )
      }
}




const StateUse = () => {

      let [productname, updateName] = useState("Nord 2 One Plus")
      let [pricz, updatePricz] = useState(24000);
      let [moduleee, updateModuleee] = useState("2.0.53")
      let [show, setShow] = useState(true);

      const handleprice = () => {
            setShow(false);
            console.log("pricz", pricz);
      }
      const handleName = () => {
            setShow(false);
            console.log("productname", productname);
      }
      const handlemoduleee = () => {
            setShow(false);
            console.log("moduleee", moduleee)
      }

      return (
            <>
                  <h3>product: {productname}</h3>
                  <h4>price: {show ? "24000" : pricz}</h4>
                  <h3>Model:{show ? "2.0.53" : moduleee}</h3>
                  <div style={{ display: 'flex', columnGap: '20px' }}>
                        <input type="text" onChange={(e) => { updateName(e.target.value) }} />
                        <button onClick={handleName}>Update Name</button>
                  </div>

                  <div style={{ display: 'flex', columnGap: '20px' }}>
                        <input type="number" value={pricz} onChange={(e) => updatePricz(e.target.value)} />
                        <button onClick={handleprice}>Update price</button>
                  </div>
                  <div style={{ display: 'flex', columnGap: '20px' }}>
                        <input type="number" onChange={(e) => updateModuleee(e.target.value)} />
                        <button onClick={handlemoduleee}>Update Model</button>
                  </div>
            </>
      )


}

