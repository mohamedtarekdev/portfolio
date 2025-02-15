import React from 'react';
import '../styles/tech-stack.css';
import Title from '../components/Title';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HexagonIcon from '../components/HexagonIcon';

import data from '../data/tech-stack.json';

const getRows = (items, pattern) => {
    let result = [];
    let index = 0;

    while (index < items.length) {
        for (let size of pattern) {
            if (index < items.length) {
                result.push(items.slice(index, index + size));
                index += size;
            }
        }
    }

    return result;
};

const TechStack = () => {
    const rowPattern = [5, 4];
    const rows = getRows(data, rowPattern);

    return (
        <div className="tech-stack">
            <Container>
                <Row>
                    <Col md={12}>
                        <Title title="Tech Stack" color="#F4F5F7" />
                    </Col>
                </Row>

                <Row className="justify-content-center tech-stack-icons">
                    {rows.map((row, rowIndex) => (
                        <Row
                            key={rowIndex}
                            className="justify-content-evenly tech-stack-row"
                            style={
                                rowIndex % 2 === 0
                                    ? { width: '700px' }
                                    : { width: '600px' }
                            }
                        >
                            {row.map((item, index) => (
                                <Col
                                    key={item.id}
                                    md={2}
                                    xs={12 / row.length}
                                    className="d-flex justify-content-center"
                                >
                                    <HexagonIcon item={item} />
                                </Col>
                            ))}
                        </Row>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default TechStack;
