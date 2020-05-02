const measures = require('../measurements');

const toMap = measures.measuresToMap;
const toFind = measures.measuresToFind;

exports.buildUrl = (name) => {
    return name.toLowerCase().replace(/\s/g, '-');
}

//replace/update when tags library is found
exports.formatKeywords = (keywords) => {
    let formattedKeywords = keywords.replace(',', '').split(' ');
    return formattedKeywords;
}

exports.formatDirections = (directions) => {
    let formattedDirections = directions.split('\n');
    return formattedDirections;
}

exports.formatIngredients = (ingredients) => {
    const ingredientArray = ingredients.split("\n");
    let ingredientObj = [];
    let measuresToFind = Object.keys(toFind);

    console.log(ingredients);
    
    //should match: 1 , 1oz , .15 , 1.5 , 1/5 , 1/5oz , 1 1/5 , 1-1/5   
    let amountRegex = /([0-9]*[\.]?)?[0-9]+(([\s-]+[0-9]*)?\/+[0-9]*)*/g;

    ingredientArray.forEach(ingredient => {

        //Will likely need to be reworked later for allowing math calculations on ingredients
        let match = ingredient.match(amountRegex);
        // let amount = ingredient.match(amountRegex)[0];
        let mappedMeasure = '';
        let finalAmount = '';
        let single = false;

        if(match !== null) {
            let amount = match[0];
            let brokenArray = amount.split(/[ -]+/);
            let amountArray = brokenArray.join(' ');
        
    
            /**
             * find the amount of the ingredient needed
             * Convert to fractions if needed
             * check if singlurlar or plural measure should be used
             * Then pull it off the ingredient string
             */
            if(amountArray.indexOf('.') != -1) {
                let decimalArray = amount.split('.');
                decimalArray = decimalArray.filter(num => num != '');
                let index = decimalArray.length -1;
                let decimal = parseInt(decimalArray[index]);
                if(decimal % 50 == 0) {
                    decimalArray[index] = '1/2';
                } else {
                    let top = decimal / 25;
                    decimalArray[index] = top+'/4';
                }
                finalAmount = decimalArray.join(' ');
    
                let singleCheck = parseFloat(amountArray);
                if(singleCheck <= 1){
                    single = true;
                }
            }
            else {
                finalAmount = amountArray;
                if(brokenArray.length == 1) {
                    let singleCheck = parseInt(brokenArray);
                    if(singleCheck <= 1) {
                        single = true;
                    }
                }
            }
    
            ingredient = ingredient.replace(amount, '').trim();
        }    

        /**
         * find the measure to be used
         * Ideally this is the immediate next thing in the string
         * some wiggle room given
         * if a measure is beyond the 0 or 1 index, do not grab it
         * This is to account for situations such as 1 8oz brick of cream cheese
         * 1 is the amount, no measure given, 8oz brick of cream cheese is the ingredient
         * 
         * remove the measure from the ingredient string
         */
        measuresToFind.forEach(measure => {
            let indexCheck = ingredient.toLowerCase().indexOf(measure);
            if(indexCheck > -1 && indexCheck < 2) {
                let mapKey = toFind[measure];
                if(single) {
                    mappedMeasure = toMap[mapKey].single;
                }
                else {
                    mappedMeasure = toMap[mapKey].plural;
                }
                let find = new RegExp('\\w*' + measure + '\\w*', 'i');
                ingredient = ingredient.toLowerCase().replace(find, '').trim();

                // if(ingredient.indexOf(measure) == 1) {
                //     ingredient = ingredient.replace(measure, '');
                // }
                // else {
                //     ingredient = ingredient.replace(measure, mappedMeasure);
                // }
            }
        });
        ingredientObj.push({
            ingredient: ingredient,
            amount: finalAmount,
            measure: mappedMeasure
            }
        );
        // console.log(ingredientObj);
    })

    return ingredientObj;
}