import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCSV("football.csv");
const summary = Summary.summarise("Liverpool");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
