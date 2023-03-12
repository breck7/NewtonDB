#!/usr/bin/env node

const path = require("path")
const { Utils } = require("jtree/products/Utils.js")
const { TrueBaseServer } = require("truebase/server/TrueBaseServer.js")

const NewtonDB = new TrueBaseServer(path.join(__dirname, "newtondb.truebase"))
module.exports = { NewtonDB }

if (!module.parent) Utils.runCommand(NewtonDB, process.argv[2], process.argv[3])
