"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CSVFileReader_1 = require("./CSVFileReader");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
var HtmlReports_1 = require("./reportTargets/HtmlReports");
//Create an object satisfying "DataReader" Interface
var csvFileReader = new CSVFileReader_1.CSVFileReader("football.csv");
// Create an instance of MatchReader, pass in something satisfying "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Liverpool"), new HtmlReports_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
