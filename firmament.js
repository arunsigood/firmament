#!/usr/bin/env node
"use strict";
var command_line_1 = require('./util/command-line');
var makeCommand_1 = require('./commands/makeCommand');
var log = require('jsnlog').JL();
var commandLine = new command_line_1.CommandLine();
//
commandLine.addCommandSpec(new makeCommand_1.MakeCommand());
commandLine.exec();
log.fatal('FATAL!');
process.exit(0);
//# sourceMappingURL=firmament.js.map