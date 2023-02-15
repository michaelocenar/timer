// Get the command line arguments, and remove executable and script name
const args = process.argv.slice(2);

// Loop through the arguments and set up alarms
for (const arg of args) {
  // Check if the argument is a valid number and not negative
  const num = parseInt(arg);
  if (!isNaN(num) && num >= 0) {
    // Set a timeout to beep after the specified time
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000); // Convert seconds to milliseconds
  }
};
