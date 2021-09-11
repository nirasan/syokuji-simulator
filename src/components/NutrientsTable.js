import React from 'react';
import {Container} from 'react-bootstrap'
import Energy from "./Nutrients/Energy";
import Protein from "./Nutrients/Protein";
import Lipid from "./Nutrients/Lipid";
import SaturatedFattyAcids from "./Nutrients/SaturatedFattyAcids";
import Omega3FattyAcids from "./Nutrients/Omega3FattyAcids";
import Omega6FattyAcids from "./Nutrients/Omega6FattyAcids";
import Carbohydrates from "./Nutrients/Carbohydrates";
import DietaryFiber from "./Nutrients/DietaryFiber";
import VitaminA from "./Nutrients/VitaminA";
import VitaminD from "./Nutrients/VitaminD";
import VitaminE from "./Nutrients/VitaminE";
import VitaminK from "./Nutrients/VitaminK";
import VitaminB1 from "./Nutrients/VitaminB1";
import VitaminB2 from "./Nutrients/VitaminB2";
import VitaminB6 from "./Nutrients/VitaminB6";
import VitaminB12 from "./Nutrients/VitaminB12";
import Niacin from "./Nutrients/Niacin";
import FolicAcid from "./Nutrients/FolicAcid";
import PantothenicAcid from "./Nutrients/PantothenicAcid";
import Biotin from "./Nutrients/Biotin";
import VitaminC from "./Nutrients/VitaminC";
import Sodium from "./Nutrients/Sodium";
import Potassium from "./Nutrients/Potassium";
import Calcium from "./Nutrients/Calcium";
import Magnesium from "./Nutrients/Magnesium";
import Phosphorus from "./Nutrients/Phosphorus";
import Iron from "./Nutrients/Iron";
import Zinc from "./Nutrients/Zinc";
import Copper from "./Nutrients/Copper";
import Manganese from "./Nutrients/Manganese";
import Iodine from "./Nutrients/Iodine";
import Selenium from "./Nutrients/Selenium";
import Chromium from "./Nutrients/Chromium";
import Molybdenum from "./Nutrients/Molybdenum";

export default function NutrientsTable({gender, age, level}) {
    return (
        <Container>
            <Energy gender={gender} age={age} level={level} />
            <Protein gender={gender} age={age} />
            <Lipid gender={gender} age={age} level={level} />
            <SaturatedFattyAcids gender={gender} age={age} level={level} />
            <Omega3FattyAcids gender={gender} age={age} />
            <Omega6FattyAcids gender={gender} age={age} />
            <Carbohydrates gender={gender} age={age} level={level} />
            <DietaryFiber gender={gender} age={age} />
            <VitaminA gender={gender} age={age} />
            <VitaminD gender={gender} age={age} />
            <VitaminE gender={gender} age={age} />
            <VitaminK gender={gender} age={age} />
            <VitaminB1 gender={gender} age={age} />
            <VitaminB2 gender={gender} age={age} />
            <VitaminB6 gender={gender} age={age} />
            <VitaminB12 gender={gender} age={age} />
            <Niacin gender={gender} age={age} />
            <FolicAcid gender={gender} age={age} />
            <PantothenicAcid gender={gender} age={age} />
            <Biotin gender={gender} age={age} />
            <VitaminC gender={gender} age={age} />
            <Sodium gender={gender} age={age} />
            <Potassium gender={gender} age={age} />
            <Calcium gender={gender} age={age} />
            <Magnesium gender={gender} age={age} />
            <Phosphorus gender={gender} age={age} />
            <Iron gender={gender} age={age} />
            <Zinc gender={gender} age={age} />
            <Copper gender={gender} age={age} />
            <Manganese gender={gender} age={age} />
            <Iodine gender={gender} age={age} />
            <Selenium gender={gender} age={age} />
            <Chromium gender={gender} age={age} />
            <Molybdenum gender={gender} age={age} />
        </Container>
    );
}
