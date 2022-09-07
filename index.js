let randomizer = {

    randomize: function(listOfStudents) {
        
        let copy = [...listOfStudents]
        let result = []

        while(copy.length > 0) {
            
            let p1 = copy.splice(Math.floor(Math.random() * copy.length), 1).toString()

            let p2 = copy.splice(Math.floor(Math.random() * copy.length), 1).toString()

            let pairObject = {
                P1: p1,
                P2: p2
            }

            if(copy.length === 3) {
                let p3 = copy.splice(Math.floor(Math.random() * copy.length), 1).toString()

                let pairObject = {
                    P1: p1,
                    P2: p2,
                    P3: p3
                }
                result.push(pairObject)
            } else {
                result.push(pairObject)
            }

        }

        return result
    }

}

module.exports = randomizer

// Input ~ Array of up to 30 Students
// Output ~ Should return objects (indexes) with 2 or 3 students
// Contstraints ~
// EdgeCases ~ Empty array, Array of odd number of students