import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { consoleReport } from "./reportTargets/consoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
//Create an object satisfying "DataReader" Interface
const csvFileReader = new CSVFileReader("football.csv");

// Create an instance of MatchReader, pass in something satisfying "DataReader" interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Liverpool"), new consoleReport());

summary.buildAndPrintReport(matchReader.matches);
