import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/vitamin_b6";
import {findByGenderAndAge} from "./Common";

export default function VitaminB6({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.RDA.Float : 0;

    return (
        <Row>
            <Col>ビタミンB6</Col>
            <Col>（推奨量)</Col>
            <Col>{value} mg/日</Col>
        </Row>
    );
}
