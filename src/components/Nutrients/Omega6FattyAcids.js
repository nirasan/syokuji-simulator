import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/omega6_fatty_acids";
import {findByGenderAndAge} from "./Common";

export default function Omega6FattyAcids({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.AI.Float : 0;

    return (
        <Row>
            <Col>n-6系脂肪酸</Col>
            <Col>（目安量)</Col>
            <Col>{value} g/日</Col>
        </Row>
    );
}
