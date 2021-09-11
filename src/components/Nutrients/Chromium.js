import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/chromium";
import {findByGenderAndAge} from "./Common";

export default function Chromium({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.AI.Float : 0;

    return (
        <Row>
            <Col>クロム</Col>
            <Col>（目安量)</Col>
            <Col>{value} μg/日</Col>
        </Row>
    );
}
