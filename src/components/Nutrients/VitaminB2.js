import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/vitamin_b2";
import {findByGenderAndAge} from "./Common";

export default function VitaminB2({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.RDA.Float : 0;

    return (
        <Row>
            <Col>ビタミンB2</Col>
            <Col>（推奨量)</Col>
            <Col>{value} mg/日</Col>
        </Row>
    );
}
