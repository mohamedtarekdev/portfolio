import React from 'react';
import { Container } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';

import '../styles/loading.css';

const Loading = () => {
    return (
        <div className="Loading-container">
            <Container className="d-flex justify-content-center align-items-center h-100">
                <BounceLoader size={100} color={'#58c4dc'} />
            </Container>
        </div>
    );
};

export default Loading;
