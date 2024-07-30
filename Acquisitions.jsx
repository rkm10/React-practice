import React, { useState, useEffect } from 'react';
import { HiBellAlert } from 'react-icons/hi2';
import { IoMdHome } from 'react-icons/io';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import Modal from 'react-modal';
import AcquisitionPopUp from './AcquisitionPopUp';
import { getData } from './AcquisitionsApi';

Modal.setAppElement('#root');

function Acquisitions() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [project, setProject] = useState([]);

    const handleHomeClick = () => {
        navigate('/'); // Redirect to the home page
    };

    const handleAddressClick = (key) => {
        console.log(`Clicked element key: ${key}`);
        setModalContent(key);
        setIsModalOpen(true);
    }

    const cardStyle = {
        marginTop: "9rem",
        fontWeight: "bold",
        width: '100%',
        height: '50%',
        backgroundColor: '#06060696',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        color: 'white'
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await getData();
        console.log('API Response:', res);
        console.log('Data Type:', Array.isArray(res.data.message.list));  // Check if it's an array
        setProject(res.data.message.list || []);  // Use the correct path
    }

    return (
        <>
            <div className='acquisitions'>
                <IoMdHome className='icon icon-left' onClick={handleHomeClick} />
                <div style={{ padding: '1rem' }}>
                    <h4 className='screen_head'>Acquisitions</h4>
                </div>
                <HiBellAlert className='icon icon-right-notification' />
                <IoPersonCircleOutline className='icon icon-right-profile' />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: '2rem'
            }}>
                <div className="card1" style={{
                    backgroundColor: "white",
                    height: "5rem",
                    width: "12rem",
                    border: "2px solid #529fa9",
                    borderRadius: "1rem",
                    fontSize: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#27c6db"
                }}>Active</div>
                <div className="card" style={{
                    background: "linear-gradient(90deg, #026d78ff, #359cabff, #026d78ff)",
                    height: "5rem",
                    width: "12rem",
                    borderRadius: "1rem",
                    fontSize: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>Analysis</div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: '3rem'
            }}>
                {Array.isArray(project) && project.map((item) => (
                    <div className="card" style={{
                        backgroundImage: "url('src/Routes/Acquisitions/LandImages/Land1.jpg')",
                        height: "18rem"
                    }} onClick={() => { handleAddressClick(item.name) }}>
                        <div style={cardStyle}>
                            {item.name} <br />
                            <progress value={25} max={100} />
                            <progress value={75} max={100} />
                            <progress value={50} max={100} /> <br />
                            $ 1,000,000.00 <br />
                            9.5 acres lot
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && <AcquisitionPopUp modalContent={modalContent} setIsModalOpen={setIsModalOpen} />}
        </>
    );
}

export default Acquisitions;
