const { head } = require("ramda")

const [execPath, jsPath, cmd, ...rest] = process.argv

console.log(handleCmd(cmd))

function handleCmd(cmd) {
	switch (cmd) {
		case "init":
			return "you asked for init cmd"
		case "add":
			return "you asked for add cmd"
		case "rm":
			return "you asked for rm cmd"
		default:
			return `${cmd} is not supported`
	}
}
