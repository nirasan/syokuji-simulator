import React from 'react';
import {Row, Col} from 'react-bootstrap'
import energy from "../../data/energy";
import lipid from "../../data/lipid";
import {findByGenderAndAge, findByGenderAndAgeAndLevel} from "./Common";

export default function Lipid({gender, age, level}) {
    const e = findByGenderAndAgeAndLevel(energy, gender, age, level);
    const ev = e ? e.Value.Float: 0;

    const l = findByGenderAndAge(lipid, gender, age);
    const lMin = l ? l.DG.Min.Float : 0;
    const lMax = l ? l.DG.Max.Float : 0;
    let lMinG = 0;
    if (lMin > 0) {
        lMinG = ev * lMin / 100 / 9;
    }
    let lMaxG = 0;
    if (lMax > 0) {
        lMaxG = ev * lMax / 100 / 9;
    }

    return (
        <Row>
            <Col>脂質</Col>
            <Col>（目標量)</Col>
            <Col>{lMinG.toFixed(1)}〜{lMaxG.toFixed(1)} g/日</Col>
            <Col>{lMin}〜{lMax} %エネルギー/日</Col>
        </Row>
    );
}
