import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import ProfileForm from "./ProfileForm";
import NutrientsTable from "./NutrientsTable";

export default function Content() {
    const [gender, setGender] = useState("男性");
    const [age, setAge] = useState(20);
    const [level, setLevel] = useState("Level2");

    return (
        <Container>
            <ProfileForm setGender={setGender} setAge={setAge} setLevel={setLevel}/>
            <NutrientsTable gender={gender} age={age} level={level}></NutrientsTable>
        </Container>
    )
}
