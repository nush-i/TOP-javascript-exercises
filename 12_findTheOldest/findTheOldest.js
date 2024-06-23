const findAge = function(birthDate, deathDate){
    if (!deathDate) {
        deathDate = new Date().getFullYear();
    
    }
    return deathDate - birthDate;
};


const findTheOldest = function(people) {
    return people.reduce((oldest, findPerson) =>{
        const oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = findAge(findPerson.yearOfBirth, findPerson.yearOfDeath);
        if (oldestAge < currentAge) {
            return findPerson;
        }
        else {
            return oldest;
        }
    });

};


// Do not edit below this line
module.exports = findTheOldest;
