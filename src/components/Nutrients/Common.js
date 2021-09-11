
export function findByGenderAndAgeAndLevel(data, gender, age, level) {
    for (const d of data) {
        if (d.Gender !== gender) {
            continue;
        }
        if (d.ActivityLevel !== level) {
            continue;
        }
        if (d.From.Year <= age && age <= d.To.Year) {
            return d;
        }
    }
    return null;
}

export function findByGenderAndAge(data, gender, age) {
    for (const d of data) {
        if (d.Gender !== gender) {
            continue;
        }
        if (d.From.Year <= age && age <= d.To.Year) {
            return d;
        }
    }
    return null;
}
