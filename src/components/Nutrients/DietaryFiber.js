import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/dietary_fiber";
import {findByGenderAndAge} from "./Common";

export default function DietaryFiber({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.DG.Float : 0;

    return (
        <Row>
            <Col>食物繊維</Col>
            <Col>（目安量)</Col>
            <Col>{value}〜 g/日</Col>
        </Row>
    );
}
