describe('randomizer', () => {
    it('Should return a list of pair objects', () => {
        // Arrange
            /* Ideal result should look like the object below 
            let result = [
                {P1: STUDENT NAME, P2: STUDENT NAME},
                {P1: STUDENT NAME, P2: STUDENT NAME}
            ]
            */
            let students = ['Bob', 'Charles', 'Jeff', 'Mag']
        // Act
            let result = randomizer.randomize(students);
        // Assert
            expect(typeof result).toBe('Array')
    })
})