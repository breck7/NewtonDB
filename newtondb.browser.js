{


class unitParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"idUnit" : idUnitParser,
"idBaseUnit" : idBaseUnitParser,
"symbol" : symbolParser,
"approx" : approxParser,
"base" : baseParser,
"uncertaintyUnit" : uncertaintyUnitParser,
"systemUnit" : systemUnitParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWordsFrom(1)
    }
    }

class idUnitParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get idUnitCell() {
      return this.getWordsFrom(1).map(val => parseFloat(val))
    }
    }

class idBaseUnitParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get idBaseUnitCell() {
      return this.getWordsFrom(1)
    }
    }

class symbolParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get symbolCell() {
      return this.getWordsFrom(1)
    }
    }

class approxParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get approxCell() {
      return this.getWordsFrom(1)
    }
    }

class baseParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get baseCell() {
      return this.getWordsFrom(1)
    }
    }

class uncertaintyUnitParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get uncertaintyUnitCell() {
      return this.getWordsFrom(1)
    }
    }

class systemUnitParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get systemUnitCell() {
      return this.getWordsFrom(1)
    }
    }

class experimentParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"idExperiment" : idExperimentParser,
"nameExperiment" : nameExperimentParser,
"dataAvailability" : dataAvailabilityParser,
"dataType" : dataTypeParser,
"reproducibility" : reproducibilityParser,
"proposition" : propositionParser,
"hypothesis" : hypothesisParser,
"control" : controlParser,
"publication" : publicationParser,
"equation" : equationParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWordsFrom(1)
    }
    }

class idExperimentParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get idExperimentCell() {
      return this.getWordsFrom(1).map(val => parseFloat(val))
    }
    }

class nameExperimentParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get nameExperimentCell() {
      return this.getWordsFrom(1)
    }
    }

class dataAvailabilityParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get dataAvailabilityCell() {
      return this.getWordsFrom(1)
    }
    }

class dataTypeParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get dataTypeCell() {
      return this.getWordsFrom(1)
    }
    }

class reproducibilityParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get reproducibilityCell() {
      return this.getWordsFrom(1)
    }
    }

class propositionParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get propositionCell() {
      return this.getWordsFrom(1)
    }
    }

class hypothesisParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get hypothesisCell() {
      return this.getWordsFrom(1)
    }
    }

class controlParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get controlCell() {
      return this.getWordsFrom(1)
    }
    }

class locationParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get locationCell() {
      return this.getWordsFrom(1)
    }
    }

class publicationParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get publicationCell() {
      return this.getWordsFrom(1)
    }
    }

class interactionParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"idInteraction" : idInteractionParser,
"baseInteraction" : baseInteractionParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWordsFrom(1)
    }
    }

class idInteractionParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get idInteractionCell() {
      return this.getWordsFrom(1).map(val => parseFloat(val))
    }
    }

class baseInteractionParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get baseInteractionCell() {
      return this.getWordsFrom(1)
    }
    }

class stateParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWordsFrom(1)
    }
    }

class idStateParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get idStateCell() {
      return this.getWordsFrom(1).map(val => parseFloat(val))
    }
    }

class baseStateParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get baseStateCell() {
      return this.getWordsFrom(1)
    }
    }

class objectParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"interaction" : interactionParser,
"state" : stateParser,
"idObject" : idObjectParser,
"nameObject" : nameObjectParser,
"property" : propertyParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWordsFrom(1)
    }
    }

class idObjectParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get idObjectCell() {
      return this.getWordsFrom(1).map(val => parseFloat(val))
    }
    }

class nameObjectParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get nameObjectCell() {
      return this.getWordsFrom(1)
    }
    }

class equationParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"object" : objectParser,
"idEquation" : idEquationParser,
"nameEquation" : nameEquationParser,
"mathemacticalFormulation" : mathemacticalFormulationParser,
"mathFunctions" : mathFunctionsParser,
"description" : descriptionParser,
"modelingAndSimulation" : modelingAndSimulationParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWordsFrom(1)
    }
    }

class idEquationParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get idEquationCell() {
      return this.getWordsFrom(1)
    }
    }

class nameEquationParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get nameEquationCell() {
      return this.getWordsFrom(1)
    }
    }

class mathemacticalFormulationParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get katexCell() {
      return this.getWordsFrom(1)
    }
    }

class mathFunctionsParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get katexCell() {
      return this.getWordsFrom(1)
    }
    }

class descriptionParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get descriptionCell() {
      return this.getWordsFrom(1)
    }
    }

class modelingAndSimulationParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get modelingAndSimulationCell() {
      return this.getWordsFrom(1)
    }
    }

class idDataParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get idDataCell() {
      return this.getWordsFrom(1).map(val => parseFloat(val))
    }
    }

class nameDataParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get nameDataCell() {
      return this.getWordsFrom(1)
    }
    }

class sampleSizeParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get sampleSizeCell() {
      return this.getWordsFrom(1)
    }
    }

class uncertaintyExperimentParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get uncertaintyExperimentCell() {
      return this.getWordsFrom(1)
    }
    }

class valueParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get valueCell() {
      return this.getWordsFrom(1)
    }
    }

class dataCollectionPeriodParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get dataCollectionPeriodCell() {
      return this.getWordsFrom(1)
    }
    }

class notesParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get notesCell() {
      return this.getWordsFrom(1)
    }
    }

class predictivePowerParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get predictivePowerCell() {
      return this.getWordsFrom(1)
    }
    }

class controversiesParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get controversiesCell() {
      return this.getWordsFrom(1)
    }
    }

class historyParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get historyCell() {
      return this.getWordsFrom(1)
    }
    }

class limitationParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get limitationCell() {
      return this.getWordsFrom(1)
    }
    }

class philosophyParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get philosophyCell() {
      return this.getWordsFrom(1)
    }
    }

class scopeParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get scopeCell() {
      return this.getWordsFrom(1)
    }
    }

class newtondbParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(errorParser, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"experiment" : experimentParser,
"interaction" : interactionParser,
"state" : stateParser,
"object" : objectParser,
"equation" : equationParser,
"title" : titleParser,
"law" : lawParser,
"theory" : theoryParser,
"principle" : principleParser}), [{regex: /^$/, parser: blankLineParser}])
  }
get fileExtension() { return `newtondb` }
static cachedHandGrammarProgramRoot = new HandGrammarProgram(`// Change MathFormulation and mathFUncitons to Latex and add Delimiter
// Add description
// Grammar Cells
// Unit Cells
// Unit Parsers 
// Experiment Cells
// Experiment Parses  
// Interaction Cells
// Interaction Cells
// Interction Parsers
// State Cells
// State Parsers
// Object Cells
// Object Parsers
// Equation Cells
// Equation Parsers
// Data Cells
// Data Parsers
// Law/Principle/Theory Cells
// Shared Parsers for theory/principle/law
// Main Parser
// Specific column types
// Law Parsers
// Theory Parsers
// Principle Parsers
// Property Cells
// Property Parsers
// Value Cells (included in data cells for now)
// Value Parser
// WorldWideColumns is an experimental attempt to define reusuable base abstract column types for TrueBases.
// Version 2.0.0
// Cell Parsers
// Enum Parsers
// Numeric cell parsers
// Common numeric cell extensions
// String Cell Parsers
// Line Parsers
// The main line parser. Anything extending this will be included in the CSV dumps.
// Common string parsers
// Common blob parsers
// Links between TrueBase files
// Boolean column node
// Commmon numeric parsers
// Common time parsers
// Common miscellaneous parsers
// URL Parsers
// GUID Parsers
// Hashmap parsers
// Common population columns
// Common computed types





















































keywordCell
anyCell
intCell
 regex \\-?[0-9]+
 highlightScope constant.numeric
numericCell
floatCell
numbersCell
 highlightScope constant.numeric
nameCell
 highlightScope string
textCell
 highlightScope text
stringCell
 highlightScope string
 examples lorem ipsum
booleanCell
 enum false true
idUnitCell
 extends intCell
idBaseUnitCell
 extends stringCell
symbolCell
 highlightScope keyword.operator.word
approxCell
 enum True False
baseCell
 enum second meter kilogram ampere kelvin mole candela
uncertaintyUnitCell
 extends stringCell
systemUnitCell
 extends stringCell
idExperimentCell
 extends intCell
nameExperimentCell
 extends textCell
dataAvailabilityCell
 extends booleanCell
reproducibilityCell
 extends booleanCell
dataTypeCell
 extends textCell
propositionCell
 extends textCell
hypothesisCell
controlCell
 extends textCell
locationCell
 extends textCell
publicationCell
 extends textCell
idInteractionCell
 extends intCell
baseInteractionCell
 enum electromagnetic gravitational strongNuclear weakNuclear
idInteractionCell
 extends intCell
baseInteractionCell
 enum electromagnetic gravitational strongNuclear weakNuclear
idStateCell
 extends intCell
baseStateCell
 enum consant variable
idObjectCell
 extends intCell
nameObjectCell
 extends stringCell
idEquationCell
 highlightScope text
nameEquationCell
 extends stringCell
katexCell
 extends stringCell
descriptionCell
 extends stringCell
modelingAndSimulationCell
 extends stringCell
idDataCell
 extends intCell
nameDataCell
 extends stringCell
sampleSizeCell
 extends numericCell
uncertaintyExperimentCell
 extends numericCell
valueCell
 extends numericCell
dataCollectionPeriodCell
 extends stringCell
notesCell
 extends stringCell
idPrincipleCell
 extends stringCell
idlawCell
 description Unique identifier for the law
 highlightScope text
nameLawCell
 description Name of the law
 highlightScope text
namePrincipleCell
 extends stringCell
nameTheoryCell
 extends stringCell
idExperimentCell
 description id of the experiments done to validate the law
 extends intCell
predictivePowerCell
 highlightScope text
controversiesCell
 extends stringCell
historyCell
 extends stringCell
lawCell
 extends stringCell
limitationCell
 extends stringCell
philosophyCell
 extends stringCell
scopeCell
 extends stringCell
massCell
 extends numericCell
volumeCell
 extends numericCell
densityCell
 extends numericCell
shapeCell
 extends stringCell
sizeCell
 extends numericCell
weightCell
 extends numericCell
colorCell
 extends stringCell
temperatureCell
 extends numericCell
electricChargeCell
 extends numericCell
electricCurrentCell
 extends numericCell
magneticFieldCell
 extends numericCell
magnetizationCell
 extends numericCell
refractiveIndexCell
 extends numericCell
hardnessCell
 extends numericCell
elasticityCell
 extends numericCell
conductivityCell
 extends numericCell
thermalConductivityCell
 extends numericCell
specificHeatCell
 extends numericCell
meltingPointCell
 extends numericCell
boilingPointCell
 extends numericCell
viscosityCell
 extends numericCell
surfaceTensionCell
 extends numericCell
chemicalCompositionCell
 extends stringCell
radioactivityCell
 extends numericCell
halfLifeCell
 extends numericCell
blankCell
anyCell
enumCell
boolCell
 extends enumCell
 enum true false
numberCell
intCell
 extends numberCell
 highlightScope constant.numeric.integer
floatCell
 extends numberCell
 highlightScope constant.numeric.float
percentCell
 highlightScope constant.numeric.integer
 regex \\d+%
countCell
 extends intCell
populationCountCell
 description A count of people.
 extends countCell
yearCell
 extends intCell
stringCell
 highlightScope string
wordCell
 extends stringCell
 description Any string except for a blank cell.
 regex .+
columnNameCell
 highlightScope keyword
 regex [a-zA-Z0-9]+
trueBaseIdCell
 description A global identifier for this entity in a TrueBase. Currently a very restricted character set to ensure compatibility between a wide variety of URLs and filesystems.
 regex [a-z0-9\\-\\.]+
 highlightScope string
 enum young
urlCell
 highlightScope constant.language
 regex (ftp|https?)://.+
externalGuidCell
 description A GUID from another site.
fileNameCell
 highlightScope string
unitParser
 catchAllCellType anyCell
 cells keywordCell
 cruxFromId
 inScope idUnitParser idBaseUnitParser symbolParser approxParser baseParser uncertaintyUnitParser systemUnitParser
idUnitParser
 description Unique identifier for the unit
 catchAllCellType idUnitCell
 cells keywordCell
 cruxFromId
idBaseUnitParser
 description The id of the base unit for a derived unit (null if base unit)
 catchAllCellType idBaseUnitCell
 cells keywordCell
 cruxFromId
symbolParser
 description Symbol for the unit (e.g. m for meter)
 catchAllCellType symbolCell
 cells keywordCell
 cruxFromId
approxParser
 description The level of uncertainty in the measurement (exact, approximate)
 catchAllCellType approxCell
 cells keywordCell
 cruxFromId
baseParser
 description The base unit (e.g. meter, kilogram)
 catchAllCellType baseCell
 cells keywordCell
 cruxFromId
uncertaintyUnitParser
 description The level of uncertainty in the measurement (exact, approximate)
 catchAllCellType uncertaintyUnitCell
 cells keywordCell
 cruxFromId
systemUnitParser
 description The measurement system to which the unit belongs (e.g. "SI", "Imperial")
 catchAllCellType systemUnitCell
 cells keywordCell
 cruxFromId
experimentParser
 inScope equationParser idExperimentParser nameExperimentParser dataAvailabilityParser dataTypeParser reproducibilityParser propositionParser hypothesisParser controlParser publicationParser
 catchAllCellType anyCell
 cells keywordCell
 cruxFromId
idExperimentParser
 description Unique identifier for the experiment
 catchAllCellType idExperimentCell
 cells keywordCell
 cruxFromId
nameExperimentParser
 description Name of the experiment
 catchAllCellType nameExperimentCell
 cells keywordCell
 cruxFromId
dataAvailabilityParser
 description Description of the data collected during the experiment
 catchAllCellType dataAvailabilityCell
 cells keywordCell
 cruxFromId
dataTypeParser
 description Description of the data collected during the experiment
 catchAllCellType dataTypeCell
 cells keywordCell
 cruxFromId
reproducibilityParser
 description Description of the reproducibility of the experiment
 catchAllCellType reproducibilityCell
 cells keywordCell
 cruxFromId
propositionParser
 description Description of the propositions made in the experiment
 catchAllCellType propositionCell
 cells keywordCell
 cruxFromId
hypothesisParser
 description Description of the hypothesis made in the experiment
 catchAllCellType hypothesisCell
 cells keywordCell
 cruxFromId 
controlParser
 description Description of the control used during the experiment
 catchAllCellType controlCell
 cells keywordCell
 cruxFromId
locationParser
 description Location where the experiment was conducted
 catchAllCellType locationCell
 cells keywordCell
 cruxFromId
publicationParser
 description Paper where experiment was published
 catchAllCellType publicationCell
 cells keywordCell
 cruxFromId 
interactionParser
 description Parsers for interactions between entities
 inScope idInteractionParser baseInteractionParser
 catchAllCellType anyCell
 cells keywordCell
 cruxFromId
idInteractionParser
 description Unique identifier for the interaction
 catchAllCellType idInteractionCell
 cells keywordCell
 cruxFromId
baseInteractionParser
 description The type of interaction (electromagnetic, gravitational, strong nuclear, weak nuclear)
 catchAllCellType baseInteractionCell
 cells keywordCell
 cruxFromId
stateParser
 catchAllCellType anyCell
 cells keywordCell
 cruxFromId
idStateParser
 description Unique identifier for the state
 catchAllCellType idStateCell
 cells keywordCell
 cruxFromId
baseStateParser
 description The state of the property (either variable or constant)
 catchAllCellType baseStateCell
 cells keywordCell
 cruxFromId
objectParser
 inScope interactionParser stateParser propertyParser idObjectParser nameObjectParser
 catchAllCellType anyCell
 cells keywordCell
 cruxFromId
idObjectParser
 catchAllCellType idObjectCell
 cells keywordCell
 cruxFromId
nameObjectParser
 catchAllCellType nameObjectCell
 cells keywordCell
 cruxFromId
equationParser
 inScope objectParser idEquationParser nameEquationParser mathemacticalFormulationParser mathFunctionsParser descriptionParser modelingAndSimulationParser
 catchAllCellType anyCell
 cells keywordCell
 cruxFromId
idEquationParser
 description Unique identifier for the equation
 catchAllCellType idEquationCell
 cells keywordCell
 cruxFromId
nameEquationParser
 description Common name for equation
 catchAllCellType nameEquationCell
 cells keywordCell
 cruxFromId
mathemacticalFormulationParser
 description Mathematical functions used in the equation (e.g. "f(x) = sin(x)")
 catchAllCellType katexCell
 cells keywordCell
 cruxFromId
mathFunctionsParser
 description Mathematical functions used in the equation (e.g. "f(x) = sin(x)")
 catchAllCellType katexCell
 cells keywordCell
 cruxFromId
descriptionParser
 description Description of the equation, including any assumptions and simplifications made
 catchAllCellType descriptionCell
 cells keywordCell
 cruxFromId
modelingAndSimulationParser
 description Description of any modeling and simulation done as part of the equation
 catchAllCellType modelingAndSimulationCell
 cells keywordCell
 cruxFromId
idDataParser
 inScope unitParser ValueParser
 catchAllCellType idDataCell
 cells keywordCell
 cruxFromId
nameDataParser
 inScope unitParser ValueParser
 catchAllCellType nameDataCell
 cells keywordCell
 cruxFromId
sampleSizeParser
 inScope unitParser ValueParser
 catchAllCellType sampleSizeCell
 cells keywordCell
 cruxFromId
uncertaintyExperimentParser
 inScope unitParser ValueParser
 catchAllCellType uncertaintyExperimentCell
 cells keywordCell
 cruxFromId
valueParser
 inScope unitParser ValueParser
 catchAllCellType valueCell
 cells keywordCell
 cruxFromId
dataCollectionPeriodParser
 inScope unitParser ValueParser
 catchAllCellType dataCollectionPeriodCell
 cells keywordCell
 cruxFromId
notesParser
 inScope unitParser ValueParser
 catchAllCellType notesCell
 cells keywordCell
 cruxFromId
predictivePowerParser
 catchAllCellType predictivePowerCell
 cells keywordCell
 cruxFromId
controversiesParser
 catchAllCellType controversiesCell
 cells keywordCell
 cruxFromId
historyParser
 catchAllCellType historyCell
 cells keywordCell
 cruxFromId
limitationParser
 catchAllCellType limitationCell
 cells keywordCell
 cruxFromId
philosophyParser
 catchAllCellType philosophyCell
 cells keywordCell
 cruxFromId
scopeParser
 catchAllCellType scopeCell
 cells keywordCell
 cruxFromId
newtondbParser
 root
 string fileExtension newtondb
 description Physics Databasing
 inScope lawParser theoryParser principleParser experimentParser equationParser objectParser stateParser interactionParser blankLineParser titleParser
 cruxFromId
 catchAllParser errorParser
abstractTrueBaseColumnParser
 cells columnNameCell
 string typeForCsvDocs unspecified
 cruxFromId
 boolean isColumn true
 single
 javascript
  get columnValue() {
   return this.content
  }
  get columnName() {
   return this.definition.cruxPathAsColumnName
  }
abstractStringColumnParser
 string typeForCsvDocs string
 catchAllCellType stringCell
 extends abstractTrueBaseColumnParser
titleParser
 extends abstractStringColumnParser
 description What is the title of this entry?
lawParser
 extends abstractStringColumnParser
 inScope experimentParser predictivePowerParser controversiesParser historyParser limitationParser philosophyParser scopeParser
 catchAllCellType idlawCell
 cells keywordCell
 cruxFromId
theoryParser
 extends abstractStringColumnParser
 inScope experimentParser predictivePowerParser controversiesParser historyParser limitationParser philosophyParser scopeParser
 catchAllCellType anyCell
 cells keywordCell
 cruxFromId
abstractStringListColumnParser
 string typeForCsvDocs string[]
 description A list of strings separated by the \`listDelimiter\`. The default \`listDelimiter\` is space.
 extends abstractStringColumnParser
 listDelimiter  
abstractTrueBaseLinksColumnParser
 description Links to other files in the TrueBase.
 catchAllCellType trueBaseIdCell
 string typeForCsvDocs trueBaseId[]
 extends abstractStringListColumnParser
 javascript
  get trueBaseIds() {
   return this.getWordsFrom(1)
  }
  updateTruebaseIds(oldTrueBaseId, newTrueBaseId) {
   this.setContent(
    this.getWordsFrom(1)
     .map((word) => (word === oldTrueBaseId ? newTrueBaseId : word))
     .join(" ")
   )
  }
abstractWordColumnParser
 description A single word.
 cells columnNameCell wordCell
 string typeForCsvDocs word
 extends abstractTrueBaseColumnParser
abstractEnumColumnParser
 string typeForCsvDocs enum
 cells columnNameCell enumCell
 extends abstractTrueBaseColumnParser
abstractStringBlobColumnParser
 string typeForCsvDocs multilineString
 extends abstractTrueBaseColumnParser
 baseParser blobParser
 javascript
  get columnValue() {
   return this.childrenToString()
  }
abstractDelimitedValuesBlobColumnParser
 description A CSV, TSV, or other delimited blob of text.
 // todo: figure out how we want to dump these in CSV export.
 extends abstractStringBlobColumnParser
abstractCodeColumnParser
 extends abstractStringBlobColumnParser
 baseParser blobParser
abstractBooleanColumnParser
 string typeForCsvDocs boolean
 cells columnNameCell boolCell
 extends abstractTrueBaseColumnParser
abstractNumericColumnParser
 string typeForCsvDocs number
 extends abstractTrueBaseColumnParser
abstractIntColumnParser
 string typeForCsvDocs integer
 cells columnNameCell intCell
 extends abstractNumericColumnParser
abstractCountColumnParser
 description A positive count of something. People, for example. Min is 0.
 cells columnNameCell countCell
 extends abstractIntColumnParser
abstractPopulationCountColumnParser
 extends abstractCountColumnParser
abstractComputedEstimateColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
 extends abstractCountColumnParser
abstractYearColumnParser
 cells columnNameCell yearCell
 extends abstractIntColumnParser
abstractComputedSumColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
 extends abstractIntColumnParser
abstractComputedRankColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
 extends abstractIntColumnParser
abstractFloatColumnParser
 cells columnNameCell floatCell
 extends abstractNumericColumnParser
abstractPercentageColumnParser
 cells columnNameCell percentCell
 extends abstractNumericColumnParser
abstractUrlColumnParser
 string typeForCsvDocs url
 cells columnNameCell urlCell
 extends abstractTrueBaseColumnParser
abstractUrlGuidColumnParser
 description A column containing a URL that is also a Globablly Unique Identifier (GUID) for an entity on that site.
 extends abstractUrlColumnParser
abstractOneWordGuidColumnParser
 string typeForCsvDocs guid
 cells columnNameCell externalGuidCell
 extends abstractTrueBaseColumnParser
 description Use when you have a column that serves as a Globally Unique Identifier (GUID) where the GUID does not contain spaces.
abstractMultiwordGuidColumnParser
 string typeForCsvDocs guid
 description Use when you have a column that serves as a Globally Unique Identifier (GUID) where the GUID can contain spaces.
 catchAllCellType externalGuidCell
 extends abstractTrueBaseColumnParser
abstractHashMapColumnParser
 string typeForCsvDocs multilineStringMap
 extends abstractTrueBaseColumnParser
 javascript
  get columnValue() {
   return this.childrenToString()
  }
abstractAnnualPopulationCountMapParser
 catchAllParser annualPopulationCountParser
 description A map of counts, one per year.
 extends abstractHashMapColumnParser
idlawParser
 inScope unitParser ValueParser
 catchAllCellType idlawCell
 cells keywordCell
 cruxFromId
nameLawParser
 inScope unitParser ValueParser
 catchAllCellType nameLawCell
 cells keywordCell
 cruxFromId
nameTheoryParser
 inScope unitParser ValueParser
 catchAllCellType nameTheoryCell
 cells keywordCell
 cruxFromId
principleParser
 inScope experimentParser predictivePowerParser controversiesParser historyParser limitationParser philosophyParser scopeParser
 catchAllCellType anyCell
 cells keywordCell
 cruxFromId
propertyParser
 inScope abstractPropertyParser
 catchAllCellType anyCell
 cells keywordCell
 cruxFromId
abstractPropertyParser
 cells keywordCell
 cruxFromId
massParser
 extends abstractPropertyParser
 inScope unitParser ValueParser
 catchAllCellType massCell
volumeParser
 inScope unitParser ValueParser
 catchAllCellType volumeCell
 extends abstractPropertyParser
densityParser
 inScope unitParser ValueParser
 catchAllCellType densityCell
 extends abstractPropertyParser
shapeParser
 inScope unitParser ValueParser
 catchAllCellType shapeCell
 extends abstractPropertyParser
sizeParser
 inScope unitParser ValueParser
 catchAllCellType sizeCell
 extends abstractPropertyParser
weightParser
 inScope unitParser ValueParser
 catchAllCellType weightCell
 extends abstractPropertyParser
colorParser
 inScope unitParser ValueParser
 catchAllCellType colorCell
 extends abstractPropertyParser
temperatureParser
 inScope unitParser ValueParser
 catchAllCellType temperatureCell
 extends abstractPropertyParser
electricChargeParser
 inScope unitParser ValueParser
 catchAllCellType electricChargeCell
 extends abstractPropertyParser
electricCurrentParser
 inScope unitParser ValueParser
 catchAllCellType electricCurrentCell
 extends abstractPropertyParser
magneticFieldParser
 inScope unitParser ValueParser
 catchAllCellType magneticFieldCell
 extends abstractPropertyParser
magnetizationParser
 inScope unitParser ValueParser
 catchAllCellType magnetizationCell
 extends abstractPropertyParser
refractiveIndexParser
 inScope unitParser ValueParser
 catchAllCellType refractiveIndexCell
 extends abstractPropertyParser
hardnessParser
 inScope unitParser ValueParser
 catchAllCellType hardnessCell
 extends abstractPropertyParser
elasticityParser
 inScope unitParser ValueParser
 catchAllCellType elasticityCell
 extends abstractPropertyParser
conductivityParser
 inScope unitParser ValueParser
 catchAllCellType conductivityCell
 extends abstractPropertyParser
thermalConductivityParser
 inScope unitParser ValueParser
 catchAllCellType thermalConductivityCell
 extends abstractPropertyParser
specificHeatParser
 inScope unitParser ValueParser
 catchAllCellType specificHeatCell
 extends abstractPropertyParser
meltingPointParser
 inScope unitParser ValueParser
 catchAllCellType meltingPointCell
 extends abstractPropertyParser
boilingPointParser
 inScope unitParser ValueParser
 catchAllCellType boilingPointCell
 extends abstractPropertyParser
viscosityParser
 inScope unitParser ValueParser
 catchAllCellType viscosityCell
 extends abstractPropertyParser
surfaceTensionParser
 inScope unitParser ValueParser
 catchAllCellType surfaceTensionCell
 extends abstractPropertyParser
chemicalCompositionParser
 inScope unitParser ValueParser
 catchAllCellType chemicalCompositionCell
 extends abstractPropertyParser
radioactivityParser
 inScope unitParser ValueParser
 catchAllCellType radioactivityCell
 extends abstractPropertyParser
halfLifeParser
 inScope unitParser ValueParser
 catchAllCellType halfLifeCell
 extends abstractPropertyParser
ValueParser
 catchAllCellType valueCell
 cells keywordCell
 cruxFromId
errorParser
 baseParser errorParser
blankLineParser
 description Blank lines are okay.
 cells blankCell
 compiler
  stringTemplate 
 pattern ^$
 tags doNotSynthesize
 boolean shouldSerialize false
trueBaseErrorParser
 baseParser errorParser
urlCitationParser
 description Can serve as a catch all for linking to a source for columns.
 cells urlCell
annualPopulationCountParser
 cells yearCell populationCountCell
 uniqueFirstWord`)
        get handGrammarProgram() {
          return this.constructor.cachedHandGrammarProgramRoot
      }
static rootParser = newtondbParser
    }

class abstractTrueBaseColumnParser extends GrammarBackedNode {
      get columnNameCell() {
      return this.getWord(0)
    }
get isColumn() { return true }
get typeForCsvDocs() { return `unspecified` }
get columnValue() {
 return this.content
}
get columnName() {
 return this.definition.cruxPathAsColumnName
}
    }

class abstractStringColumnParser extends abstractTrueBaseColumnParser {
      get stringCell() {
      return this.getWordsFrom(0)
    }
get typeForCsvDocs() { return `string` }
    }

class titleParser extends abstractStringColumnParser {
      
    }

class lawParser extends abstractStringColumnParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"experiment" : experimentParser,
"predictivePower" : predictivePowerParser,
"controversies" : controversiesParser,
"history" : historyParser,
"limitation" : limitationParser,
"philosophy" : philosophyParser,
"scope" : scopeParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get idlawCell() {
      return this.getWordsFrom(1)
    }
    }

class theoryParser extends abstractStringColumnParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"experiment" : experimentParser,
"predictivePower" : predictivePowerParser,
"controversies" : controversiesParser,
"history" : historyParser,
"limitation" : limitationParser,
"philosophy" : philosophyParser,
"scope" : scopeParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWordsFrom(1)
    }
    }

class abstractStringListColumnParser extends abstractStringColumnParser {
      get typeForCsvDocs() { return `string[]` }
    }

class abstractTrueBaseLinksColumnParser extends abstractStringListColumnParser {
      get trueBaseIdCell() {
      return this.getWordsFrom(0)
    }
get typeForCsvDocs() { return `trueBaseId[]` }
get trueBaseIds() {
 return this.getWordsFrom(1)
}
updateTruebaseIds(oldTrueBaseId, newTrueBaseId) {
 this.setContent(
  this.getWordsFrom(1)
   .map((word) => (word === oldTrueBaseId ? newTrueBaseId : word))
   .join(" ")
 )
}
    }

class abstractWordColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get wordCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `word` }
    }

class abstractEnumColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get enumCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `enum` }
    }

class abstractStringBlobColumnParser extends abstractTrueBaseColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
get typeForCsvDocs() { return `multilineString` }
get columnValue() {
 return this.childrenToString()
}
    }

class abstractDelimitedValuesBlobColumnParser extends abstractStringBlobColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
    }

class abstractCodeColumnParser extends abstractStringBlobColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
    }

class abstractBooleanColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get boolCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `boolean` }
    }

class abstractNumericColumnParser extends abstractTrueBaseColumnParser {
      get typeForCsvDocs() { return `number` }
    }

class abstractIntColumnParser extends abstractNumericColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get intCell() {
      return parseInt(this.getWord(1))
    }
get typeForCsvDocs() { return `integer` }
    }

class abstractCountColumnParser extends abstractIntColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get countCell() {
      return parseFloat(this.getWord(1))
    }
    }

class abstractPopulationCountColumnParser extends abstractCountColumnParser {
      
    }

class abstractComputedEstimateColumnParser extends abstractCountColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class abstractYearColumnParser extends abstractIntColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get yearCell() {
      return parseFloat(this.getWord(1))
    }
    }

class abstractComputedSumColumnParser extends abstractIntColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class abstractComputedRankColumnParser extends abstractIntColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class abstractFloatColumnParser extends abstractNumericColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get floatCell() {
      return parseFloat(this.getWord(1))
    }
    }

class abstractPercentageColumnParser extends abstractNumericColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get percentCell() {
      return this.getWord(1)
    }
    }

class abstractUrlColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get urlCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `url` }
    }

class abstractUrlGuidColumnParser extends abstractUrlColumnParser {
      
    }

class abstractOneWordGuidColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get externalGuidCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `guid` }
    }

class abstractMultiwordGuidColumnParser extends abstractTrueBaseColumnParser {
      get externalGuidCell() {
      return this.getWordsFrom(0)
    }
get typeForCsvDocs() { return `guid` }
    }

class abstractHashMapColumnParser extends abstractTrueBaseColumnParser {
      get typeForCsvDocs() { return `multilineStringMap` }
get columnValue() {
 return this.childrenToString()
}
    }

class abstractAnnualPopulationCountMapParser extends abstractHashMapColumnParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(annualPopulationCountParser, undefined, undefined)
  }
    }

class idlawParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get idlawCell() {
      return this.getWordsFrom(1)
    }
    }

class nameLawParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get nameLawCell() {
      return this.getWordsFrom(1)
    }
    }

class nameTheoryParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get nameTheoryCell() {
      return this.getWordsFrom(1)
    }
    }

class principleParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"experiment" : experimentParser,
"predictivePower" : predictivePowerParser,
"controversies" : controversiesParser,
"history" : historyParser,
"limitation" : limitationParser,
"philosophy" : philosophyParser,
"scope" : scopeParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWordsFrom(1)
    }
    }

class propertyParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"mass" : massParser,
"volume" : volumeParser,
"density" : densityParser,
"shape" : shapeParser,
"size" : sizeParser,
"weight" : weightParser,
"color" : colorParser,
"temperature" : temperatureParser,
"electricCharge" : electricChargeParser,
"electricCurrent" : electricCurrentParser,
"magneticField" : magneticFieldParser,
"magnetization" : magnetizationParser,
"refractiveIndex" : refractiveIndexParser,
"hardness" : hardnessParser,
"elasticity" : elasticityParser,
"conductivity" : conductivityParser,
"thermalConductivity" : thermalConductivityParser,
"specificHeat" : specificHeatParser,
"meltingPoint" : meltingPointParser,
"boilingPoint" : boilingPointParser,
"viscosity" : viscosityParser,
"surfaceTension" : surfaceTensionParser,
"chemicalComposition" : chemicalCompositionParser,
"radioactivity" : radioactivityParser,
"halfLife" : halfLifeParser}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWordsFrom(1)
    }
    }

class abstractPropertyParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
    }

class massParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get massCell() {
      return this.getWordsFrom(0)
    }
    }

class volumeParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get volumeCell() {
      return this.getWordsFrom(0)
    }
    }

class densityParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get densityCell() {
      return this.getWordsFrom(0)
    }
    }

class shapeParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get shapeCell() {
      return this.getWordsFrom(0)
    }
    }

class sizeParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get sizeCell() {
      return this.getWordsFrom(0)
    }
    }

class weightParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get weightCell() {
      return this.getWordsFrom(0)
    }
    }

class colorParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get colorCell() {
      return this.getWordsFrom(0)
    }
    }

class temperatureParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get temperatureCell() {
      return this.getWordsFrom(0)
    }
    }

class electricChargeParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get electricChargeCell() {
      return this.getWordsFrom(0)
    }
    }

class electricCurrentParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get electricCurrentCell() {
      return this.getWordsFrom(0)
    }
    }

class magneticFieldParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get magneticFieldCell() {
      return this.getWordsFrom(0)
    }
    }

class magnetizationParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get magnetizationCell() {
      return this.getWordsFrom(0)
    }
    }

class refractiveIndexParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get refractiveIndexCell() {
      return this.getWordsFrom(0)
    }
    }

class hardnessParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get hardnessCell() {
      return this.getWordsFrom(0)
    }
    }

class elasticityParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get elasticityCell() {
      return this.getWordsFrom(0)
    }
    }

class conductivityParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get conductivityCell() {
      return this.getWordsFrom(0)
    }
    }

class thermalConductivityParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get thermalConductivityCell() {
      return this.getWordsFrom(0)
    }
    }

class specificHeatParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get specificHeatCell() {
      return this.getWordsFrom(0)
    }
    }

class meltingPointParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get meltingPointCell() {
      return this.getWordsFrom(0)
    }
    }

class boilingPointParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get boilingPointCell() {
      return this.getWordsFrom(0)
    }
    }

class viscosityParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get viscosityCell() {
      return this.getWordsFrom(0)
    }
    }

class surfaceTensionParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get surfaceTensionCell() {
      return this.getWordsFrom(0)
    }
    }

class chemicalCompositionParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get chemicalCompositionCell() {
      return this.getWordsFrom(0)
    }
    }

class radioactivityParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get radioactivityCell() {
      return this.getWordsFrom(0)
    }
    }

class halfLifeParser extends abstractPropertyParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"unit" : unitParser,
"Value" : ValueParser}), undefined)
  }
get halfLifeCell() {
      return this.getWordsFrom(0)
    }
    }

class ValueParser extends GrammarBackedNode {
      get keywordCell() {
      return this.getWord(0)
    }
get valueCell() {
      return this.getWordsFrom(1)
    }
    }

class errorParser extends GrammarBackedNode {
      getErrors() { return this._getErrorParserErrors() }
    }

class blankLineParser extends GrammarBackedNode {
      get blankCell() {
      return this.getWord(0)
    }
get shouldSerialize() { return false }
    }

class trueBaseErrorParser extends GrammarBackedNode {
      getErrors() { return this._getErrorParserErrors() }
    }

class urlCitationParser extends GrammarBackedNode {
      get urlCell() {
      return this.getWord(0)
    }
    }

class annualPopulationCountParser extends GrammarBackedNode {
      get yearCell() {
      return parseFloat(this.getWord(0))
    }
get populationCountCell() {
      return parseFloat(this.getWord(1))
    }
    }

window.newtondbParser = newtondbParser
}