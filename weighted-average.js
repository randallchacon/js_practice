const notes = [
    {
        course: "Javascript programming",
        note: 10,
        credit: 2
    },
    {
        course: "C# programming",
        note: 8,
        credit: 5
    },
    {
        course: "Java programming",
        note: 7,
        credit: 5
    },
];

const notesWithCredit = notes.map(function(noteObj){
    return noteObj.note * noteObj.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const weightedAverageWithNotes = sumOfNotesWithCredit / sumOfCredits;