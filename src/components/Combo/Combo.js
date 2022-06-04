import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "./Combos.css"
// const url = 'https://yefpsa7mo6.execute-api.us-east-1.amazonaws.com/v1/lunches';

const dull = [
    {
        "Item": "191",
        "Name": "Chili Chicken Fried Rice",
        "Price": "12.49",
        "Spicy": "2"
    },
    {
        "Item": "193",
        "Name": "Manchurian Chicken Fried Rice",
        "Price": "12.49",
        "Spicy": "2"
    },
    {
        "Item": "194",
        "Name": "Spicy Garlic Chicken Fried Rice",
        "Price": "12.99",
        "Spicy": "2"
    },
    {
        "Item": "195",
        "Name": "Szechuan Chicken Fried Rice",
        "Price": "12.49",
        "Spicy": "2"
    },
    {
        "Item": "196",
        "Name": "Bombay Chicken Fried Rice",
        "Price": "13.99",
        "Spicy": "2"
    },
    {
        "Item": "198",
        "Name": "Chili Fish Fried Rice",
        "Price": "13.49",
        "Spicy": "2"
    },
    {
        "Item": "199",
        "Name": "Manch Veg Ball wiąg Fried Rice",
        "Price": "12.49",
        "Spicy": "2"
    },
    {
        "Item": "200",
        "Name": "Pepper Shrimp on Chicken Fried Rice",
        "Price": "Small 10.99 Large 14.49",
        "Spicy": "0"
    },
    {
        "Item": "201",
        "Name": "General Tao Chicken Fried Rice",
        "Price": "12.99",
        "Spicy": "1"
    },
    {
        "Item": "203",
        "Name": "Chicken Ball Fried Rice",
        "Price": "12.99",
        "Spicy": "0"
    },
    {
        "Item": "204",
        "Name": "Sweet & Sour Chicken Fried Rice",
        "Price": "12.49",
        "Spicy": "0"
    },
    {
        "Item": "205",
        "Name": "Sesame Chicken Fried Rice",
        "Price": "12.99",
        "Spicy": "0"
    },
    {
        "Item": "206",
        "Name": "Crispy Ginger Beef Fried Rice",
        "Price": "13.49",
        "Spicy": "0"
    },
    {
        "Item": "207",
        "Name": "Crispy Ginger Chicken on Fried Rice",
        "Price": "12.99",
        "Spicy": "0"
    },
    {
        "Item": "208",
        "Name": "Honey Garlic Chicken Fried Rice",
        "Price": "12.99",
        "Spicy": "0"
    },
    {
        "Item": "209",
        "Name": "Honey Garlic Beef on Fried Rice",
        "Price": "13.49",
        "Spicy": "0"
    }
]

class Combos extends Component {


    // constructor(props) {
    // 	super(props);
    // 	this.state = {
    // 		isLoading: true,
    // 		dataSource: {}
    // 	};
    // }
    // async componentDidMount() {
    // 	try {
    // 		const response = await fetch(url);
    // 		let responseJson = await response.json();
    // 		this.setState(
    // 			{
    // 				isLoading: false,
    // 				dataSource: responseJson
    // 			},
    // 			function() {}
    // 		);
    // 	} catch (error) {
    // 		console.error(error);
    // 	}
    // }

    render() {
        // let { dataSource } = this.state;
        // if (this.state.isLoading) {
        // 	return <div>Loading...</div>;
        // } else {
        //     console.log(dataSource);
        return (
            <div className="combos">
                <div>
                    {/* <div className="image">
                        <img src={ls} alt="lunch special"></img>
                    </div> */}
                    <h2 style={{ padding: 10, color: "#b77bad" }}>Include a Vegetable Spring Roll</h2>
                    <h4 style={{ padding: 10, color: "#b77bad" }}>Add $0.50 to upgrade to Hakka Noddles</h4>
                    <Container style={{ padding: 20, color:"#d2adcc" }}>

                        {dull.map(item => (

                            <Row key={item.Item} style={{ padding: 10 }}>
                                <Col>{item.Item}</Col>
                                <Col>{item.Name}</Col>
                                <Col>Spicy Level: {item.Spicy}</Col>
                                <Col>{item.Price}</Col>
                            
                            </Row>

                        ))}

                    </Container>


                </div>
            </div>
        );
        // }
    }
}

export default Combos;