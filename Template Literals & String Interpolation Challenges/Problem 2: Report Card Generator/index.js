const calcGpa = (score) => {
    const gradeRanges = [
        { min: 97, grade: 'A+', gpa: 4.0,  },
        { min: 93, grade: 'A',  gpa: 4.0 },
        { min: 90, grade: 'A-', gpa: 3.7 },
        { min: 87, grade: 'B+', gpa: 3.3 },
        { min: 83, grade: 'B',  gpa: 3.0 },
        { min: 80, grade: 'B-', gpa: 2.7 },
        { min: 77, grade: 'C+', gpa: 2.3 },
        { min: 73, grade: 'C',  gpa: 2.0 },
        { min: 70, grade: 'C-', gpa: 1.7 },
        { min: 60, grade: 'D',  gpa: 1.0 }
    ];
    
    return gradeRanges.find(range => score >= range.min) || { grade: 'F', gpa: 0.0 };

}

const getGpaDescription = (gpa) => {
    if (gpa >= 3.7) return "Excellent work! Keep up the outstanding performance.";
    if (gpa >= 3.0) return "Good job! You're doing well academically.";
    if (gpa >= 2.0) return "Satisfactory progress. Consider seeking additional support.";
    if (gpa >= 1.0) return "Needs improvement. Please meet with your advisor.";
    return "Failing. Immediate intervention required.";
}

const generateMessage = () => {
    const student = {
        name: "John Smith",
        id: "STU-12345",
        grade: "10th",
        subjects: [
            { name: "Mathematics", score: 92 },
            { name: "English", score: 88 },
            { name: "Science", score: 95 },
            { name: "History", score: 85 },
            { name: "Art", score: 78 }
        ],
        attendance: 95.5,
        teacher: "Ms. Rodriguez"
    }

    let totalGpaPoints = 0;
    const numOfSubjects = student.subjects.length;
    

    const subjectsDetails = `${student.subjects.map((subject)=> {
                    const gradeInfo = calcGpa(subject.score);
                    totalGpaPoints += gradeInfo.gpa;
                    return `|${subject.name.padEnd(16)}|${subject.score.toString().padEnd(14)}|${gradeInfo.grade.padEnd(10)}|${gradeInfo.gpa.toFixed(1).padEnd(8)}|`
                })
                .join('\n-----------------------------------------------------\n')}`;

    const finalGpa = totalGpaPoints / numOfSubjects;

    const msg = `Report Card - #${student.id} / Grade: ${student.grade}
    
Teacher Name: ${student.teacher}
    
Dear ${student.name},

This is your scores in the following subjects:
-----------------------------------------------------
|Subject Name    | Score        |Grade     |GPA     |
-----------------------------------------------------
${subjectsDetails}
-----------------------------------------------------

GPA Is: ${finalGpa.toFixed(1)}
This GPA Description Is: ${getGpaDescription(parseFloat(finalGpa.toFixed(1)))}

Your Full Attendance: ${student.attendance}%`; 


    document.getElementById('messageOutput').textContent = msg;
}
