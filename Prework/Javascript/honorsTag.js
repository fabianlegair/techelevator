function getGradeValue(letterGrade) {
    let pointValue = letterGrade

    if (letterGrade === 'A') {
        pointValue = 4;
    }
    else if (letterGrade === 'B') {
        pointValue = 3;
    }
    else if (letterGrade === 'C') {
        pointValue = 2;
    }
    else if (letterGrade === 'D') {
        pointValue = 1;
    }

    return pointValue;
};

function calculateGPA(courses) {
    let reportCard = {
        art: courses.art,
        math: courses.math,
        science: courses.science,
        honorsCourses: courses.honorsCourses,
        numberTimesAbsent: courses.numberTimesAbsent
    };

    let artValue = getGradeValue( reportCard.art);
    let mathValue = getGradeValue( reportCard.math);
    let scienceValue = getGradeValue( reportCard.science);

    let honorsWeight = 0.2;
    let gpa = (artValue + mathValue + scienceValue) / 3;

    if (reportCard.honorsCourses === true) {
        gpa = gpa + honorsWeight;
    };

    return gpa;
};

function getHonorsTag(studentReportCard) {
    // call function to calculate gpa
    let studentGPA = calculateGPA(studentReportCard);
    let honorsStatus = '';
    let reportCard = {
        art: studentReportCard.art,
        math: studentReportCard.math,
        science: studentReportCard.science,
        numberTimesAbsent: studentReportCard.numberTimesAbsent
    };

    let artGrade = reportCard.art;
    let mathGrade = reportCard.math;
    let scienceGrade = reportCard.science;

    //check whether theres a d or more than 3 absences
    if (artGrade.includes('D') || mathGrade.includes('D') || scienceGrade.includes('D')) {
    }
    else if (reportCard.numberTimesAbsent >3) {
    }
    else if (studentGPA > 3.5) {
        honorsStatus = "High Honors";
    }
    else if (studentGPA > 3.0){
        honorsStatus = "Honors";
    } else {
    };
    
    return honorsStatus;
}

console.log(getHonorsTag({art: 'B', math: 'A', science: 'C', honorsCourses: true, numberTimesAbsent: 1}));
console.log(getHonorsTag({art: 'A', math: 'A', science: 'A', honorsCourses: false, numberTimesAbsent: 3}));
console.log(getHonorsTag({art: 'A', math: 'A', science: 'A', honorsCourses: false, numberTimesAbsent: 5}));
console.log(getHonorsTag({art: 'D', math: 'A', science: 'A', honorsCourses: true, numberTimesAbsent: 0}));