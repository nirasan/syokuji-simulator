import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/phosphorus";
import {findByGenderAndAge} from "./Common";

export default function Phosphorus({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.AI.Float : 0;

    return (
        <Row>
            <Col>リン</Col>
            <Col>（目安量)</Col>
            <Col>{value} mg/日</Col>
        </Row>
    );
}
