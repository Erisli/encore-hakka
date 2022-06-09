import { Row, Col } from 'react-bootstrap'
import React from "react";

const Type = ({ objects }) => {

    return (
        <div>
            {objects.map(item => (

                <Row key={item.Item} style={{ padding: 10 }}>
                    <Col>{item.Item}</Col>
                    <Col>{item.Name}</Col>
                    <Col>Spicy Level: {item.Spicy}</Col>
                    <Col>{item.Price}</Col>

                </Row>

            ))} 
        </div>
    )

}

export default Type;