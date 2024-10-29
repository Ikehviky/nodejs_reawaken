// argv
console.log(process.argv);
console.log(process.argv[3]);

// process.env
console.log(process.env.COMPUTERNAME);

// logname
console.log(process.env.logname);

// pid
console.log(process.env.pid);

// cwd()
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
})

// exit()
process.exit(0);
console.log('Hello from after exit');
