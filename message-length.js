console.log('Enter your message:');

process.stdin.on('data', (data) => {
    const message = data.toString().trim();
    const charCount = message.length;
    console.log(`Your message has ${charCount} characters`);
    process.exit();
});
