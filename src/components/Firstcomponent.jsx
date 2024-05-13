

export default function Firstcomponent() {
    let name = "Rajkumar"
    return (
        <>
            {sum(17, 71)}
            <input type="checkbox" id="sub" />
            <label htmlFor="sub" >Subscribe to </label>
            {name}
        </>
    )
}

function sum(num1, num2) {
    return num1 * num2
}


