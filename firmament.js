#!/usr/bin/env node
"use strict";
var firmament_yargs_1 = require('firmament-yargs');
var makeCommand_1 = require('./commands/makeCommand');
var dockerCommand_1 = require('./commands/dockerCommand');
var commandLine = new firmament_yargs_1.CommandLineImpl();
commandLine.addCommand(new makeCommand_1.MakeCommand());
commandLine.addCommand(new dockerCommand_1.DockerCommand());
commandLine.exec();
//# sourceMappingURL=firmament.js.map