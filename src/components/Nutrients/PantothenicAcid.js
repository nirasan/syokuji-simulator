import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/pantothenic_acid";
import {findByGenderAndAge} from "./Common";

export default function PantothenicAcid({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.AI.Float : 0;

    return (
        <Row>
            <Col>パントテン酸</Col>
            <Col>（目安量)</Col>
            <Col>{value} mg/日</Col>
        </Row>
    );
}
