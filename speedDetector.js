// Function to detect car speed and print demerit points or message
function speedDetector() {
    // Prompt user to enter the speed of the car
    let speed = prompt("Enter the speed of the car:");

    // Convert input to a number
    speed = Number(speed);

    // Validate the input
    if (isNaN(speed)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    // Check the speed and calculate demerit points
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Call the function
speedDetector();
