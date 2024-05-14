export default function Display() {

    return (
        < div style={{ display: 'flex', columnGap: "20px" }}>
            <FlexItems />
            <ButtonItems />
        </div>
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



