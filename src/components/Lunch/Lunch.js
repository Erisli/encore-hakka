import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ls from "../../images/ls.PNG"
import "./Lunch.css"
// const url = 'https://yefpsa7mo6.execute-api.us-east-1.amazonaws.com/v1/lunches';

const dull = [
    {
        "Item": "A1",
        "Name": "Chili Chicken or Beef or Fish with Steamed Rice",
        "Price": "7.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "A2",
        "Name": "Manchurian Chicken or Beef or Fish with Steamed Rice",
        "Price": "7.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "A3",
        "Name": "Black Bean Sauce with Chicken or Beef or Fish with Steamed Rice",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "A4",
        "Name": "Szechuan Chicken or Beef or Fish with Steamed Rice",
        "Price": "7.49",
        "Spicy": "1",
        "Special": "FALSE"
    },
    {
        "Item": "A5",
        "Name": "Spicy Garlic Sauce Chicken or Beef or Fish with Steamed Rice",
        "Price": "7.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "A6",
        "Name": "Sweet & Sour Chicken or Beef or Fish with Steamed Rice",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "A7",
        "Name": "Mix Veg in Manchurian or Chili Sauce with Steam Rice",
        "Price": "7.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "A8",
        "Name": "Eggplant or Tofu in Manchurian or Chili Sauce with Steam Rice",
        "Price": "7.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "A9",
        "Name": "Vegetable Balls in Manchurian or Chili Sauce with Steam Rice",
        "Price": "7.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "A10",
        "Name": "Chicken or Beef Ho-fun Noodles",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "A11",
        "Name": "Chicken or Vegetarian Vermicelli Noodles",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "A12",
        "Name": "Chicken Balls (5) with Fried Rice",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "A13",
        "Name": "Fried Chicken Wings(6) with Fried Rice",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "A14",
        "Name": "Special Chicken Fried Rice (One leg on Top)",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "A15",
        "Name": "Chicken or Beef or Vegetarian Hakka Noodle",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "TRUE"
    },
    {
        "Item": "A16",
        "Name": "Chicken or Beef or Vegetarian Cantonese Chow Mein",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "TRUE"
    },
    {
        "Item": "A17",
        "Name": "Chicken or Vegetarian Singapore Noodle",
        "Price": "7.49",
        "Spicy": "1",
        "Special": "TRUE"
    },
    {
        "Item": "A18",
        "Name": "Chicken or Beef or Vegetarian Shanghai Noodle",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "TRUE"
    },
    {
        "Item": "A19",
        "Name": "Chicken or Beef or Vegetarian Fried Rice",
        "Price": "7.49",
        "Spicy": "0",
        "Special": "TRUE"
    },
    {
        "Item": "B1",
        "Name": "Thai Mango Chicken with Steamed Rice",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B2",
        "Name": "General Tao Chicken with Steamed Rice",
        "Price": "8.49",
        "Spicy": "1",
        "Special": "FALSE"
    },
    {
        "Item": "B3",
        "Name": "Honey Garlic Chicken with Steamed Rice",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B4",
        "Name": "Curry Chicken or Beef or Fish with Steamed Rice",
        "Price": "8.49",
        "Spicy": "1",
        "Special": "FALSE"
    },
    {
        "Item": "B5",
        "Name": "Mix Vegetable Chicken or Beef or Fish with Steamed Rice",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B6",
        "Name": "Sesame Chicken with Steamed Rice",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B7",
        "Name": "Bombay Chicken with Steamed Rice",
        "Price": "8.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "B8",
        "Name": "Shrimp w/Lobster Sauce with Steamed Rice (w/minced Chicken)",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B9",
        "Name": "Thai Green or Red Curry Chicken with Steamed Rice",
        "Price": "8.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "B10",
        "Name": "Crispy Ginger Chicken or Beef with Steamed Rice",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B11",
        "Name": "Chicken or Beef with Broccoli with Steamed Rice",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B12",
        "Name": "Lemon Chicken with Steamed Rice",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B13",
        "Name": "Chicken or Beef with Green Beans with Steamed Rice",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B14",
        "Name": "Black Bean Sauce Ho-Fun with Chicken or Beef",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B15",
        "Name": "Kung Pao Chicken with Cashews and Steamed Rice",
        "Price": "8.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "B16",
        "Name": "Manchurian or Chili Paneer with Steamed Rice",
        "Price": "8.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "B17",
        "Name": "Hakka Masala Chicken with Steamed Rice",
        "Price": "8.49",
        "Spicy": "2",
        "Special": "FALSE"
    },
    {
        "Item": "B18",
        "Name": "Fried Chicken Wings & French Fries",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B19",
        "Name": "Chicken or Shrimp with Eggplant with Steam Rice",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    },
    {
        "Item": "B20",
        "Name": "Chicken Leg & Back & French Fries",
        "Price": "8.49",
        "Spicy": "0",
        "Special": "FALSE"
    }
]

class Lunch extends Component {


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
            <div className="lunch">
                <div>
                    <div className="image">
                        <img src={ls} alt="lunch special"></img>
                    </div>
                    <h2 style={{ color: "#b77bad" }}>Include a Vegetable Spring Roll & Bottle Water or Soup</h2>
                    <h2 style={{ color: "#b77bad" }}>(upgrade to Pop $1) (No Subsititutions)</h2>
                    <h4 style={{ color: "#b77bad" }}>Add $2.50 to add steamed vegetables</h4>
                    <h4 style={{ color: "#b77bad" }}>Add $1.75 to upgrade for egg fried rice or vegetable fried rice or Hakka noodles instead of steamed rice</h4>
                    <h4 style={{ color: "#b77bad" }}>Add $0.25 to add extra spicy</h4>
                    <Container style={{ padding: 20, color:"#d2adcc" }}>

                        {dull.map(item => (

                            <Row key={item.Item} style={{ padding: 10 }}>
                                <Col>{item.Item}</Col>
                                <Col>{item.Name}</Col>
                                <Col>Spicy Level: {item.Spicy}</Col>
                                <Col>{item.Price}</Col>
                                {item.Special == "TRUE" ? <Col style={{ color: "red" }}>Change to shrimps + $2.00</Col> : <Col></Col>}

                            </Row>

                        ))}

                    </Container>


                </div>
            </div>
        );
        // }
    }
}

export default Lunch;