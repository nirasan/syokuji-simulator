import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/energy";
import {findByGenderAndAgeAndLevel} from "./Common";

export default function Energy({gender, age, level}) {
    const v = findByGenderAndAgeAndLevel(data, gender, age, level);
    const value = v ? v.Value.Float: 0;

    return (
        <Row>
            <Col>エネルギー</Col>
            <Col>（推定エネルギー必要量)</Col>
            <Col>{value} KCal/日</Col>
        </Row>
    );
}
