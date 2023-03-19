'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]

try {
    data.forEach( (blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if(!blockObj.id) throw new SyntaxError(`In the data under no ${i+1} there is no id`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch (error) {
    console.error(error.name);
    console.log(error.message);
    console.log(error.stack);
}


console.log('enother examples');
const errDef = new Error('some defoult message');
const errSyn = new SyntaxError('some syntax message');

console.log(errDef.name, errDef.message, errDef.stack);
console.log(errSyn.name, errSyn.message, errSyn.stack);
