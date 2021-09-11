import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/potassium";
import {findByGenderAndAge} from "./Common";

export default function Potassium({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.AI.Float : 0;

    return (
        <Row>
            <Col>カリウム</Col>
            <Col>（目安量)</Col>
            <Col>{value} mg/日</Col>
        </Row>
    );
}
