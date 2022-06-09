import Type from './Type/Type';
import { Tabs, Tab} from 'react-bootstrap'
import React from "react";


const dull =
    [
        {
            "Item": "1",
            "Name": "Pakoras (Chicken, Fish, Shrimp or Paneer)(10 pcs)",
            "Price": "13.49",
            "Spicy": "2",
            "Type": "Appetizers",
            "Recommended": "1"
        },
        {
            "Item": "2",
            "Name": "Vegetable Pakoras(10 pcs)",
            "Price": "12.49",
            "Spicy": "2",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "3",
            "Name": "Chicken Balls(10 pcs)",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "4",
            "Name": "Lollipop Chicken(8 pcs)",
            "Price": "12.49",
            "Spicy": "1",
            "Type": "Appetizers",
            "Recommended": "1"
        },
        {
            "Item": "5",
            "Name": "Coconut Shrimp(12 pcs)",
            "Price": "14.49",
            "Spicy": "0",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "6",
            "Name": "Spicy Pepper Shrimp(12 pcs)",
            "Price": "16.49",
            "Spicy": "2",
            "Type": "Appetizers",
            "Recommended": "1"
        },
        {
            "Item": "7",
            "Name": "Deep Fried Calamari or Shrimp",
            "Price": "14.49",
            "Spicy": "0",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "8",
            "Name": "Fried Chicken Wings(10 pcs)",
            "Price": "10.49",
            "Spicy": "0",
            "Type": "Appetizers",
            "Recommended": "1"
        },
        {
            "Item": "9",
            "Name": "Spicy Chicken Wings or Honey Garlic Wings(10 pcs)",
            "Price": "12.5",
            "Spicy": "1",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "10",
            "Name": "Fried Spring Roll (Vegetable)(1 roll)",
            "Price": "1.49",
            "Spicy": "0",
            "Type": "Appetizers",
            "Recommended": "1"
        },
        {
            "Item": "11",
            "Name": "Fried Spring Roll (Curry Chicken or Shrimp)(1 roll)",
            "Price": "2.49",
            "Spicy": "1",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "12",
            "Name": "Fried Wonton (Chicken or Shrimp)(15 pcs)",
            "Price": "8.99",
            "Spicy": "0",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "13",
            "Name": "French Fries",
            "Price": "4.99",
            "Spicy": "0",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "14",
            "Name": "Chili Fries",
            "Price": "5.99",
            "Spicy": "2",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "15",
            "Name": "Hakka's Chili Poutine",
            "Price": "8.49",
            "Spicy": "0",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "16",
            "Name": "Fish & Fries",
            "Price": "10.99",
            "Spicy": "0",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "17",
            "Name": "Mango Salad(Contain Cashews)",
            "Price": "8.99",
            "Spicy": "1",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "18",
            "Name": "Appetizer Platter (4 Veggie Roll, 4 Wings & 4 Chicken Pakoras)",
            "Price": "14.99",
            "Spicy": "1",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "21",
            "Name": "Spicy Pepper Tofu ",
            "Price": "9.49",
            "Spicy": "1",
            "Type": "Appetizers",
            "Recommended": "0"
        },
        {
            "Item": "25",
            "Name": "Soup 25. Hot & Sour (Chicken or Vegetable)",
            "Price": "(S) 4.99 (M) 8.49 (L) 11.99",
            "Spicy": "2",
            "Type": "Soup",
            "Recommended": "1"
        },
        {
            "Item": "26",
            "Name": "Hot & Sour *(Seafood)",
            "Price": "(S) 5.49 (M) 8.99 (L) 11.99",
            "Spicy": "2",
            "Type": "Soup",
            "Recommended": "1"
        },
        {
            "Item": "27",
            "Name": "Thai Soup (Chicken or Vegetable)",
            "Price": "(S) 4.99 (M) 8.49 (L) 11.99",
            "Spicy": "2",
            "Type": "Soup",
            "Recommended": "1"
        },
        {
            "Item": "28",
            "Name": "Corn Soup (Chicken or Vegetable)",
            "Price": "(S) 4.99 (M) 8.49 (L) 11.99",
            "Spicy": "0",
            "Type": "Soup",
            "Recommended": "0"
        },
        {
            "Item": "29",
            "Name": "Corn Soup (Crab)",
            "Price": "(S) 5.49 (M) 8.99 (L) 11.99",
            "Spicy": "0",
            "Type": "Soup",
            "Recommended": "0"
        },
        {
            "Item": "30",
            "Name": "Wonton Soup (Chicken)",
            "Price": "(S) 4.99 (M) 8.49 (L) 11.99",
            "Spicy": "0",
            "Type": "Soup",
            "Recommended": "1"
        },
        {
            "Item": "31",
            "Name": "Wonton Soup (Shrimp) ",
            "Price": "(S) 5.49 (M) 8.99 (L) 11.99",
            "Spicy": "0",
            "Type": "Soup",
            "Recommended": "1"
        },
        {
            "Item": "32",
            "Name": "Seafood Soup",
            "Price": "(S) 5.49 (M) 8.99 (L) 11.99",
            "Spicy": "0",
            "Type": "Soup",
            "Recommended": "0"
        },
        {
            "Item": "33",
            "Name": "Noodle Soup (Chicken or Vegetable)",
            "Price": "(S) 4.99 (M) 8.49 (L) 11.99",
            "Spicy": "0",
            "Type": "Soup",
            "Recommended": "0"
        },
        {
            "Item": "34",
            "Name": "Crispy Chicken (3 Legs)",
            "Price": "11.99",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "0"
        },
        {
            "Item": "35",
            "Name": "Special Chicken Fried Rice",
            "Price": "(1 Leg) 8.99 (2 Legs) 11.99",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "1"
        },
        {
            "Item": "36",
            "Name": "House Fried Rice (Beef, Shrimp and Chicken)",
            "Price": "13.49",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "1"
        },
        {
            "Item": "37",
            "Name": "Special Chicken Chow Mein",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "1"
        },
        {
            "Item": "38",
            "Name": "House Chow Mein (Beef, Shrimp & Chicken)",
            "Price": "13.49",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "1"
        },
        {
            "Item": "39",
            "Name": "Wing Fried Rice",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "1"
        },
        {
            "Item": "40",
            "Name": "House Wing Fried Rice (Beef, Shrimp & Chicken)",
            "Price": "13.49",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "1"
        },
        {
            "Item": "41",
            "Name": "Wing Chow Mein",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "1"
        },
        {
            "Item": "42",
            "Name": "House Wing Chow Mein (Beef, Shrimp & Chicken)",
            "Price": "13.99",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "1"
        },
        {
            "Item": "43",
            "Name": "Guyanese Mixed Special (4 wings, 1 leg,(Beef, Chicken & Shrimp) (Fried rice & chow mein mixed)",
            "Price": "14.49",
            "Spicy": "0",
            "Type": "Guyanese",
            "Recommended": "0"
        },
        {
            "Item": "44",
            "Name": "Bombay Chicken (Dry) ",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "45",
            "Name": "Chili Chicken *(Gravy or Dry)",
            "Price": "12.49",
            "Spicy": "2",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "46",
            "Name": "Manchurian Chicken (Gravy or Dry)",
            "Price": "12.49",
            "Spicy": "2",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "47",
            "Name": "Spicy Garlic Chicken (Gravy or Dry)",
            "Price": "12.49",
            "Spicy": "2",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "48",
            "Name": "Szechuan Chicken (Gravy or Dry)",
            "Price": "12.49",
            "Spicy": "1",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "49",
            "Name": "Chicken with Curry Sauce (with Gravy)",
            "Price": "12.49",
            "Spicy": "1",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "50",
            "Name": "Mongolian Chicken (with Gravy)",
            "Price": "12.49",
            "Spicy": "1",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "51",
            "Name": "Ginger Chicken",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "52",
            "Name": "Hakka Masala Chicken (with Gravy)",
            "Price": "12.49",
            "Spicy": "2",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "53",
            "Name": "Thai Curry Chicken (Red or Green Curry Sauce)",
            "Price": "12.49",
            "Spicy": "2",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "53.5",
            "Name": "General Tao Chicken (with Gravy)",
            "Price": "12.49",
            "Spicy": "2",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "54",
            "Name": "Lemon Chicken with sauce on the side)",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "56",
            "Name": "Crispy Ginger Chicken (light sauce)",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "57",
            "Name": "Thai Mango Chicken (dry)",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "58",
            "Name": "Honey Garlie Chicken (light sauce)",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "59",
            "Name": "Sesame Chicken (light sauce)",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "61",
            "Name": "Thousand Island Chicken (light sauce with Broccoli)",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "62",
            "Name": "Sweet & Sour Chicken (with sauce)",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "64",
            "Name": "Chicken with Mixed Vegetable",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "66",
            "Name": "Chicken with Black Bean Sauce",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "67",
            "Name": "Kung Pao Chicken (with Cashews)",
            "Price": "12.49",
            "Spicy": "2",
            "Type": "Chicken",
            "Recommended": "1"
        },
        {
            "Item": "68",
            "Name": "Satay Chicken with Mixed Vegetables",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "69",
            "Name": "Stir Fry Chicken & Mushrooms",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "70",
            "Name": "Chicken with Broccoli & Carrots",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "71",
            "Name": "Chicken with Stir Fry Green Beans",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "72",
            "Name": "Chicken with Stir Fry Eggplant",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "73",
            "Name": "Chicken with Snow Peas & Fresh Mushroom",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "74",
            "Name": "Chicken Ma Po Tofu",
            "Price": "12.49",
            "Spicy": "1",
            "Type": "Chicken",
            "Recommended": "0"
        },
        {
            "Item": "75",
            "Name": "Chili Beef (Dry or Gravy)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Beef",
            "Recommended": "1"
        },
        {
            "Item": "76",
            "Name": "Manchurian Beef (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Beef",
            "Recommended": "1"
        },
        {
            "Item": "77",
            "Name": "Spicy Garlic Beef (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Beef",
            "Recommended": "1"
        },
        {
            "Item": "78",
            "Name": "Szechuan Beef (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "1",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "79",
            "Name": "Beef with Curry Sauce (with Gravy)",
            "Price": "12.99",
            "Spicy": "1",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "80",
            "Name": "Beef in Black Pepper Sauce (With Gravy)",
            "Price": "12.99",
            "Spicy": "1",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "81",
            "Name": "Crispy Ginger Beef (light sauce)",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "1"
        },
        {
            "Item": "82",
            "Name": "Sesame Beef (light sauce)",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "1"
        },
        {
            "Item": "83",
            "Name": "Honey Garlic Beef (light sauce)",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "1"
        },
        {
            "Item": "84",
            "Name": "Mango Tango Beef (light sauce)",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "85",
            "Name": "Sweet & Sour Beef (with sauce)",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "86",
            "Name": "Beef with Mixed Vegetable",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "1"
        },
        {
            "Item": "88",
            "Name": "Beef with Black Bean Sauce",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "1"
        },
        {
            "Item": "89",
            "Name": "Beef with Broccoli & Carrots",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "1"
        },
        {
            "Item": "90",
            "Name": "Beef with Stir Fry Green Beans",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "91",
            "Name": "Beef with Stir Fry Eggplant",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "92",
            "Name": "Beef with Snow Peas & Fresh Mushroom",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "93",
            "Name": "Beef with Ginger & Scallion",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "94",
            "Name": "Satay Beef with Mixed Vegetables ",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "95",
            "Name": "Stir Fry Beef & Mushrooms",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "96",
            "Name": "Kung Pao Beef (with Cashews)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Beef",
            "Recommended": "0"
        },
        {
            "Item": "97",
            "Name": "Bombay Tiger Prawns (Dry)",
            "Price": "14.99",
            "Spicy": "2",
            "Type": "Shrimp",
            "Recommended": "1"
        },
        {
            "Item": "98",
            "Name": "Chili Tiger Prawns (Gravy or Dry)",
            "Price": "14.99",
            "Spicy": "2",
            "Type": "Shrimp",
            "Recommended": "1"
        },
        {
            "Item": "99",
            "Name": "Manchurian Tiger Prawns (Gravy or Dry)",
            "Price": "14.99",
            "Spicy": "2",
            "Type": "Shrimp",
            "Recommended": "1"
        },
        {
            "Item": "100",
            "Name": "Spicy Garlic Tiger Prawns (Gravy or Dry)",
            "Price": "14.99",
            "Spicy": "2",
            "Type": "Shrimp",
            "Recommended": "1"
        },
        {
            "Item": "101",
            "Name": "Szechuan Tiger Prawns (Gravy or Dry)",
            "Price": "14.99",
            "Spicy": "1",
            "Type": "Shrimp",
            "Recommended": "0"
        },
        {
            "Item": "102",
            "Name": "Tiger Prawns with Curry Sauce (with Gravy)",
            "Price": "14.99",
            "Spicy": "1",
            "Type": "Shrimp",
            "Recommended": "0"
        },
        {
            "Item": "103",
            "Name": "Thai Curry Shrimp (Red or Green Curry Sauce)",
            "Price": "15.49",
            "Spicy": "2",
            "Type": "Shrimp",
            "Recommended": "0"
        },
        {
            "Item": "105",
            "Name": "Thai Mango Tiger Prawss (dry)",
            "Price": "15.49",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "1"
        },
        {
            "Item": "106",
            "Name": "Thousand Island Prawns (light sauce with Broccoli)",
            "Price": "15.49",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "0"
        },
        {
            "Item": "107",
            "Name": "Sweet & Sour Tiger Prawns (with sauce)",
            "Price": "14.99",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "0"
        },
        {
            "Item": "109",
            "Name": "Shrimp in Lobster Sauce ( with minced chicken)",
            "Price": "15.49",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "1"
        },
        {
            "Item": "110",
            "Name": "Tiger Prawns with Mixed Vegetable ",
            "Price": "14.99",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "1"
        },
        {
            "Item": "111",
            "Name": "Tiger Prawns with Almond & Mixed Vegetables",
            "Price": "15.49",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "0"
        },
        {
            "Item": "112",
            "Name": "Tiger Prawns with Black Bean Sauce",
            "Price": "14.99",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "0"
        },
        {
            "Item": "113",
            "Name": "Kung Pao Tiger Prawn (with Cashews)",
            "Price": "14.99",
            "Spicy": "1",
            "Type": "Shrimp",
            "Recommended": "1"
        },
        {
            "Item": "114",
            "Name": "Shrimp with Broccoli & Carrots",
            "Price": "14.99",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "0"
        },
        {
            "Item": "115",
            "Name": "Tiger Prawns with Stir Fry Eggplant",
            "Price": "15.49",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "1"
        },
        {
            "Item": "116",
            "Name": "Shrimp with Snow Peas & Fresh Mushroom",
            "Price": "14.99",
            "Spicy": "0",
            "Type": "Shrimp",
            "Recommended": "0"
        },
        {
            "Item": "117",
            "Name": "Bombay Fish (Dry)",
            "Price": "13.99",
            "Spicy": "2",
            "Type": "Fish",
            "Recommended": "1"
        },
        {
            "Item": "118",
            "Name": "Chili Fish (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Fish",
            "Recommended": "1"
        },
        {
            "Item": "119",
            "Name": "Manchurian Fish (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Fish",
            "Recommended": "1"
        },
        {
            "Item": "120",
            "Name": "Spicy Garlie Fish (Gravy or Dry",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Fish",
            "Recommended": "1"
        },
        {
            "Item": "121",
            "Name": "Szechuan Fish (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "1",
            "Type": "Fish",
            "Recommended": "0"
        },
        {
            "Item": "122",
            "Name": "Fish with Curry Sauce (with Gravy)",
            "Price": "12.99",
            "Spicy": "1",
            "Type": "Fish",
            "Recommended": "0"
        },
        {
            "Item": "123",
            "Name": "Spicy Pepper Fish (Dry)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Fish",
            "Recommended": "1"
        },
        {
            "Item": "124",
            "Name": "Kung Pao Fish - (with Cashews)",
            "Price": "12.99",
            "Spicy": "1",
            "Type": "Fish",
            "Recommended": "0"
        },
        {
            "Item": "125",
            "Name": "Thousand Island Fish (light sauce with Broccoli)",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Fish",
            "Recommended": "1"
        },
        {
            "Item": "126",
            "Name": "Sweet & Sour Fish (with sauce)",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Fish",
            "Recommended": "0"
        },
        {
            "Item": "128",
            "Name": "Fish with Mixed Vegetables",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Fish",
            "Recommended": "0"
        },
        {
            "Item": "129",
            "Name": "Ginger Fish ",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Fish",
            "Recommended": "0"
        },
        {
            "Item": "130",
            "Name": "Black Bean with Fish",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Fish",
            "Recommended": "1"
        },
        {
            "Item": "131",
            "Name": "Fish with Snow Peas & Fresh Mushrooms ",
            "Price": "12.99",
            "Spicy": "0",
            "Type": "Fish",
            "Recommended": "0"
        },
        {
            "Item": "132",
            "Name": "Spicy Pepper Mixed Seafood (Dry)",
            "Price": "15.49",
            "Spicy": "2",
            "Type": "Seafood",
            "Recommended": "1"
        },
        {
            "Item": "133",
            "Name": "Chili Calamari (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Seafood",
            "Recommended": "0"
        },
        {
            "Item": "134",
            "Name": "Manchurian Calamari (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Seafood",
            "Recommended": "0"
        },
        {
            "Item": "135",
            "Name": "Spicy Garlic Calamari (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "2",
            "Type": "Seafood",
            "Recommended": "0"
        },
        {
            "Item": "136",
            "Name": "Szechuan Calamari (Gravy or Dry)",
            "Price": "12.99",
            "Spicy": "1",
            "Type": "Seafood",
            "Recommended": "0"
        },
        {
            "Item": "137",
            "Name": "Seafood with Mixed Vegetables",
            "Price": "14.99",
            "Spicy": "0",
            "Type": "Seafood",
            "Recommended": "0"
        },
        {
            "Item": "139",
            "Name": "Mixed Fried Rice (Chicken, Beef & Shrimp)",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Rice",
            "Recommended": "1"
        },
        {
            "Item": "140",
            "Name": "Fried Rice *(Beef, Shrimp or Chicken)",
            "Price": "8.49",
            "Spicy": "0",
            "Type": "Rice",
            "Recommended": "1"
        },
        {
            "Item": "141",
            "Name": "Seafood Fried Rice (Shrimp, Crab & Squid)",
            "Price": "11.99",
            "Spicy": "0",
            "Type": "Rice",
            "Recommended": "0"
        },
        {
            "Item": "142",
            "Name": "Vegetarian Fried Rice",
            "Price": "8.49",
            "Spicy": "0",
            "Type": "Rice",
            "Recommended": "1"
        },
        {
            "Item": "143",
            "Name": "Fried Rice (Egg or Mushroom)",
            "Price": "8.49",
            "Spicy": "0",
            "Type": "Rice",
            "Recommended": "0"
        },
        {
            "Item": "144",
            "Name": "Yeung Chow Fried Rice (Chicken and Shrimp)",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Rice",
            "Recommended": "1"
        },
        {
            "Item": "145",
            "Name": "Pineapple Fried Rice (Chicken or Beef or Shrimp)",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Rice",
            "Recommended": "0"
        },
        {
            "Item": "146",
            "Name": "Manchurian Fried Rice (Chicken or Beef or Shrimp)",
            "Price": "8.99",
            "Spicy": "2",
            "Type": "Rice",
            "Recommended": "1"
        },
        {
            "Item": "147",
            "Name": "Manchurian Vegetarian Fried Rice",
            "Price": "8.99",
            "Spicy": "2",
            "Type": "Rice",
            "Recommended": "1"
        },
        {
            "Item": "148",
            "Name": "Szechuan Fried Rice (Chicken or Beef or Shrimp)",
            "Price": "8.99",
            "Spicy": "1",
            "Type": "Rice",
            "Recommended": "1"
        },
        {
            "Item": "149",
            "Name": "Szechuan Vegetarian Fried Rice",
            "Price": "8.99",
            "Spicy": "1",
            "Type": "Rice",
            "Recommended": "1"
        },
        {
            "Item": "150",
            "Name": "Singapore Fried Rice (Chicken and Shrimp)",
            "Price": "8.99",
            "Spicy": "2",
            "Type": "Rice",
            "Recommended": "0"
        },
        {
            "Item": "151",
            "Name": "Singapore Vegetarian Fried Rice",
            "Price": "8.99",
            "Spicy": "2",
            "Type": "Rice",
            "Recommended": "0"
        },
        {
            "Item": "152",
            "Name": "Masala Fried Rice (Chicken or Beef or Shrimp)",
            "Price": "8.99",
            "Spicy": "2",
            "Type": "Rice",
            "Recommended": "0"
        },
        {
            "Item": "153",
            "Name": "Masala Vegetarian Fried Rice",
            "Price": "8.99",
            "Spicy": "2",
            "Type": "Rice",
            "Recommended": "0"
        },
        {
            "Item": "154",
            "Name": "Mixed Hakka Noodles (Chicken, Beef & Shrimp)",
            "Price": "10.49",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "155",
            "Name": "Hakka Noodles (Chicken or Beef or Shrimp)",
            "Price": "9.49",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "156",
            "Name": "Vegetarian Hakka Noodles",
            "Price": "8.99",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "157",
            "Name": "Cantonese Chow Mein *(Chicken, Beef, Squid & Shrimp)",
            "Price": "12.49",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "158",
            "Name": "Cantonese Chow Mein (Seafood)",
            "Price": "13.49",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "159",
            "Name": "Cantonese Chow Mein (Vegetarian)",
            "Price": "10.99",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "160",
            "Name": "Stir Fried Vermicelli (Chicken and Shrimp)",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "163",
            "Name": "Ho-Fun Wide Rice Noodles (Chicken or Beef)",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "164",
            "Name": "Ho-Fun Wide Rice Noodles(Vegetarian)",
            "Price": "9.49",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "165",
            "Name": "Black Bean Sauce Ho-Fun (Chicken or Beef)",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "166",
            "Name": "Black Bean Sauce Ho-Fun (Vegetarian)",
            "Price": "9.49",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "167",
            "Name": "Shanghai Noodles (Chicken and Shrimp)",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "168",
            "Name": "Shanghai Noodles (Vegetarian)",
            "Price": "9.49",
            "Spicy": "0",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "169",
            "Name": "Manchurian Hakka Noodles (Chicken or Beef or Shrimp)",
            "Price": "9.99",
            "Spicy": "2",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "170",
            "Name": "Manchurian Vegetarian Hakka Noodles",
            "Price": "9.49",
            "Spicy": "2",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "171",
            "Name": "Szechuan Hakka Noodles (Chicken or Beef or Shrimp)",
            "Price": "9.99",
            "Spicy": "2",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "172",
            "Name": "Szechuan Vegetarian Hakka Noodles",
            "Price": "9.49",
            "Spicy": "2",
            "Type": "Noodles",
            "Recommended": "1"
        },
        {
            "Item": "173",
            "Name": "Masala Hakka Noodles (Chicken or Beef or Shrimp)",
            "Price": "9.99",
            "Spicy": "2",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "174",
            "Name": "Masala Vegetarian Hakka Noodles",
            "Price": "9.49",
            "Spicy": "2",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "175",
            "Name": "Singapore Rice Noodles (Chicken and Shrimp)",
            "Price": "9.99",
            "Spicy": "2",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "176",
            "Name": "Singapore Rice Noodles (Vegetarian)",
            "Price": "9.49",
            "Spicy": "2",
            "Type": "Noodles",
            "Recommended": "0"
        },
        {
            "Item": "181",
            "Name": "Vegetarian Balls in any style » (Gravy or Dry)",
            "Price": "10.49",
            "Spicy": "2",
            "Type": "Vegetarian",
            "Recommended": "1"
        },
        {
            "Item": "182",
            "Name": "Paneer in any style *(Gravy or Dry) (Bombay + $1.00)",
            "Price": "10.99",
            "Spicy": "2",
            "Type": "Vegetarian",
            "Recommended": "1"
        },
        {
            "Item": "183",
            "Name": "Fried Tofu in any styles (Gravy or Dry)",
            "Price": "9.99",
            "Spicy": "2",
            "Type": "Vegetarian",
            "Recommended": "0"
        },
        {
            "Item": "184",
            "Name": "Eggplants in any style (Gravy or Dry)",
            "Price": "9.99",
            "Spicy": "2",
            "Type": "Vegetarian",
            "Recommended": "0"
        },
        {
            "Item": "186",
            "Name": "Thai Curry Tofu > (Red or Green Curry Sauce)",
            "Price": "11.99",
            "Spicy": "2",
            "Type": "Vegetarian",
            "Recommended": "0"
        },
        {
            "Item": "187",
            "Name": "Tofu with Mixed Vegetables",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Vegetarian",
            "Recommended": "0"
        },
        {
            "Item": "188",
            "Name": "Stir Fry Mixed Vegetables",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Vegetarian",
            "Recommended": "1"
        },
        {
            "Item": "189",
            "Name": "Stir Fry Broccoli & Carrots",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Vegetarian",
            "Recommended": "0"
        },
        {
            "Item": "190",
            "Name": "Stir Fry Green Beans",
            "Price": "9.99",
            "Spicy": "0",
            "Type": "Vegetarian",
            "Recommended": "0"
        }
    ];

const types = [
    {
        name: "Appetizers",
        path: '/Appetizers'
    },
    {
        name: "Soup",
        path: '/menu/Soup'
    },
    {
        name: "Guyanese",
        path: '/Guyanese'
    },
    {
        name: "Chicken",
        path: '/Chicken'
    },
    {
        name: "Beef",
        path: '/Beef'
    },
    {
        name: "Shrimp",
        path: '/Shrimp'
    },
    {
        name: "Fish",
        path: '/Fish'
    },
    {
        name: "Seafood",
        path: '/Seafood'
    },
    {
        name: "Rice",
        path: '/Rice'
    },
    {
        name: "Noodles",
        path: '/Noodles'
    },
    {
        name: "Vegetarian",
        path: '/Vegetarian'
    }];

function Menu() {
    return (
        <Tabs defaultActiveKey="Appetizers" id="controlled-tab-example" className="mb-3">
            {types.map(({ name}) => (
                <Tab key={name} eventKey={name} title={name}>
                    <Type objects={dull.filter(function (t) {
                        return !t.Type.localeCompare(name);
                    })
                    } />
                </Tab>
            ))}
        </Tabs>

    );
}

export default Menu;