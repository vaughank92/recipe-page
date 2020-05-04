/**
 * holds the measurement units and abbreviations
 */

const measuresToFind = {
    "cup": "cup",
    "oz": "oz",
    "ounce": "oz",
    "tbs": "tbsp",
    "tbsp": "tbsp",
    "tb": "tbsp",
    "tbl": "tbsp",
    "tablespoon": "tbsp",
    "tsp": "tsp",
    "tp": "tsp",
    "teaspoon": "tsp",
    "pt": "pt",
    "pint": "pt",
    "lb": "lb",
    "pound": "lb"
}


const measuresToMap = {
    "cup": {
        single: "cup",
        plural: "cups"
    },
    "oz": {
        single: "ounce",
        plural: "ounces"
    },
    "tbsp": {
        single: "tablespoon",
        plural: "tablespoons"
    },
    "tsp": {
        single: "teaspoon",
        plural: "teaspoon"
    },
    "can": {
        single: "can",
        plural: "cans"
    },
    "bag": {
        single: "bag",
        plural: "bags"
    },
    "lb": {
        single: "pound",
        plural: "pounds"
    },
    "pt": {
        single: "pint",
        plural: "pints"
    }
}


module.exports = {
    measuresToFind,
    measuresToMap
}