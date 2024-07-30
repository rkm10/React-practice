import React from 'react';

const ProjectCards = ({ projects }) => {
    const cardStyle = {
        background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        color: "#fff", // White text color
        padding: "10px",
        borderRadius: "5px",
        textAlign: "center",
    };

    return (
        <div className="project-cards-container">
            {projects.map((item) => (
                <div
                    key={item.id}
                    className="card"
                    style={{
                        backgroundImage: "url('src/Routes/Acquisitions/LandImages/Land1.jpg')",
                        height: "18rem",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        margin: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onClick={() => { /* handle click event */ }}
                >
                    <div style={cardStyle}>
                        {item.name} <br />
                        <progress value={25} max={100} />
                        <progress value={75} max={100} />
                        <progress value={50} max={100} /> <br />
                        $1,000,000.00 <br />
                        9.5 acres lot
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;
