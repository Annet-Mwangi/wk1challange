// Function to prompt user for student marks and output the corresponding grade
function studentGradeGenerator() {
    // Prompt user to enter student marks
    let marks = prompt("Enter student marks (0-100):");

    // Convert input to a number
    marks = Number(marks);

    // Validate the input
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    }

    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 49) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    console.log(`The grade for marks ${marks} is: ${grade}`);
}

// Call the function
studentGradeGenerator();
