export default function Firstcomponent(p) {

    return (
        <>
            <div style={{ width: 300, border: '2px solid black', margin: '20px', padding: '20px', display: "flex" }}>
                <h3>ID: {p.id}</h3>
                <h3>Name: {p.name}</h3>
                <h3>Age: {p.age}</h3>
                <p>Place:{p.place}</p>
            </div>
        </>
    )
}
