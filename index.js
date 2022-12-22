const employee = {
    name: "Sam",
    streetAddress: "11 Broadway" 
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    obj = {...employee};
    obj[key] = value;
    return obj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key){
    obj = {...employee};
    delete obj.name;
    return obj;
};

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj.name;
    return obj;
}

beforeEach()
updateEmployeeWithKeyAndValue()
beforeEach()
destructivelyUpdateEmployeeWithKeyAndValue()
beforeEach()
deleteFromEmployeeByKey()
beforeEach()
destructivelyDeleteFromEmployeeByKey()