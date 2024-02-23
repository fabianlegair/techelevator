/*
function isAboveFreezing(temperature) {
    // Initialize a variable, assigning it the correct boolean expression
    let aboveFreezing = temperature > 32;
    
    // Return the variable's value
    return aboveFreezing;

console.log(isAboveFreezing(31) > aboveFreezing);
console.log(isAboveFreezing(32) > aboveFreezing);
console.log(isAboveFreezing(33) > aboveFreezing);
};

function isAboveFreezing(temperature) {
    let aboveFreezing = 33;
    let freezingTemp = temperature >= aboveFreezing;
    return freezingTemp;
};

console.log (isAboveFreezing (31));
console.log (isAboveFreezing (32));
console.log (isAboveFreezing (33));


function calculateWeightedScore(firstPart, secondPart, thirdPart) {
    let exam = {
        partOne: firstPart * (50/100),
        partTwo: secondPart * (30/100),
        partThree: thirdPart * (20/100)
    };
    let finalGrade = exam.partOne + exam.partTwo + exam.partThree;
    return finalGrade;
}
console.log(calculateWeightedScore(100, 90, 80));
console.log(calculateWeightedScore(90, 90, 60));
console.log(calculateWeightedScore(80, 77, 42));


function calculateWeightedScore(exam) {

    const PART_ONE_WEIGHT = 50/100;
    const PART_TWO_WEIGHT = 30/100;
    const PART_THREE_WEIGHT = 20/100;
    
    let partOneWeighted = exam.partOne * PART_ONE_WEIGHT;
    let partTwoWeighted = exam.partTwo * PART_TWO_WEIGHT;
    let partThreeWeighted = exam.partThree * PART_THREE_WEIGHT;

    let totalGrade = partOneWeighted + partTwoWeighted + partThreeWeighted;
    return totalGrade
};
console.log(calculateWeightedScore( { partOne: 100, partTwo: 90, partThree: 80 } ));
console.log(calculateWeightedScore( { partOne: 90, partTwo: 90, partThree: 60 } ));
console.log(calculateWeightedScore( { partOne: 80, partTwo: 77, partThree: 42 } ));


function isFlagged(studentScore) {
    let scoreTreshold = 70;
    let studentFail = scoreTreshold > studentScore;
    return studentFail
};
console.log(isFlagged(80));
console.log(isFlagged(70));
console.log(isFlagged(69));
console.log(isFlagged(50.5));


function hasPerfectAttendance(stats) {
    let info = {
        absences: stats.absences,
        lastExam: stats.exam 
    };

    let perfectAttendance = stats.absences === 0;
    return perfectAttendance;
}
console.log(hasPerfectAttendance( { absences: 0, exam: 70 } ));
console.log(hasPerfectAttendance( { absences: "0", exam: 70 } ));
console.log(hasPerfectAttendance( { absences: 2, exam: 99 } ));


function isHighQuizAvg(scores) {

    let studentAvg = (scores.quiz1 + scores.quiz2 + scores.quiz3 + scores.quiz4) / 4;

    let aboveAvg = studentAvg >= 80;
    return aboveAvg;
};

console.log(isHighQuizAvg( { quiz1: 100, quiz2: 90, quiz3: 70, quiz4: 60 } ));
console.log(isHighQuizAvg( { quiz1: 90, quiz2: 90, quiz3: 80, quiz4: 80 } ));
console.log(isHighQuizAvg( { quiz1: 80, quiz2: 70, quiz3: 70, quiz4: 60 } ));


function hasImproved(testOne, testTwo, testThree) {

    let showImprovement = testOne <= testTwo && testTwo <= testThree;
    return showImprovement;
}
console.log(hasImproved(70, 75, 80));
console.log(hasImproved(75, 75, 80));
console.log(hasImproved(75, 70, 80));
console.log(hasImproved(75, 80, 75));


function isMastered(firstScore, secondScore) {
    let standardScore = 70;
    let masterCheck = firstScore >= standardScore || secondScore >= standardScore;
    return masterCheck;
}

console.log(isMastered(70, 65));
console.log(isMastered(75, 70));
console.log(isMastered(65, 70));
console.log(isMastered(60, 65));


function requiresDailyCheck(info) {
    let criteria = {
        quizAlert: true,
        hwAlert: true,
        absences: 0,
        lastExam: 70
    };
    let criteriaCheck = (criteria.quizAlert === info.quizAlert && criteria.hwAlert === info.hwAlert) || criteria.absences != info.absences || criteria.lastExam > info.lastExam;
    return criteriaCheck;
}

console.log(requiresDailyCheck( { quizAlert: false, hwAlert: false, absences: 0, lastExam: 70} ));
console.log(requiresDailyCheck( { quizAlert: true, hwAlert: false, absences: 0, lastExam: 70} ));
console.log(requiresDailyCheck( { quizAlert: false, hwAlert: false, absences: 1, lastExam: 70} ));
console.log(requiresDailyCheck( { quizAlert: false, hwAlert: false, absences: 0, lastExam: 60} ));


function flagHomework(score) {
    let standardScore = 70;
    let avgScore = (score.hw1 + score.hw2 + score.hw3 + score.hw4) / 4;
    let zeroCheck = score.hw1 === 0 || score.hw2 === 0 || score.hw3 === 0 || score.hw4 === 0;
    let flagCheck = avgScore < standardScore || zeroCheck === true;
    return flagCheck;
}

console.log(flagHomework( { hw1: 100, hw2: 90, hw3: 70, hw4: 80}));
console.log(flagHomework( { hw1: 80, hw2: 70, hw3: 60, hw4: 70}));
console.log(flagHomework( { hw1: 0, hw2: 100, hw3: 100, hw4: 100}));
console.log(flagHomework( { hw1: 60, hw2: 70, hw3: 70, hw4: 60}));
*/ 