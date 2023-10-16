"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CSVFileReader_1 = require("./CSVFileReader");
var consoleReport_1 = require("./reportTargets/consoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
//Create an object satisfying "DataReader" Interface
var csvFileReader = new CSVFileReader_1.CSVFileReader("football.csv");
// Create an instance of MatchReader, pass in something satisfying "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Liverpool"), new consoleReport_1.consoleReport());
summary.buildAndPrintReport(matchReader.matches);
