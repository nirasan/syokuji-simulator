import React from 'react';
import {Row, Col} from 'react-bootstrap'
import energy from "../../data/energy";
import saturated_fatty_acids from "../../data/saturated_fatty_acids";
import {findByGenderAndAge, findByGenderAndAgeAndLevel} from "./Common";

export default function SaturatedFattyAcids({gender, age, level}) {
    const e = findByGenderAndAgeAndLevel(energy, gender, age, level);
    const ev = e ? e.Value.Float: 0;

    const l = findByGenderAndAge(saturated_fatty_acids, gender, age);
    const lMax = l ? l.DG.Float : 0;
    let lMaxG = 0;
    if (lMax > 0) {
        lMaxG = ev * lMax / 100 / 9;
    }

    return (
        <Row>
            <Col>飽和脂肪酸</Col>
            <Col>（目標量)</Col>
            <Col>〜{lMaxG.toFixed(1)} g/日</Col>
            <Col>〜{lMax} %エネルギー/日</Col>
        </Row>
    );
}
