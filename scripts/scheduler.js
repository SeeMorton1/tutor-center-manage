(scheduler =>{

    class Appointment{
        constructor(tutorId, tutorName, studentName, date) {
            this.tutorId = tutorId;
            this.tutorName = tutorName;
            this.studentName = studentName;
            this.date = date;
        }
    }

    class Tutor{
        constructor(tutorId,name,skills, appointments) {
            this.tutorId = tutorId;
            this.name = name;
            this.skills = skills;
            this.appointments = appointments;
        }
    }
    let tutors  = [
        new Tutor(
            1,
            "John",
            [".NET","Angular"],
        ),
        new Tutor(
            2,
            "Frank",
            ["React","Node"]
        ),
        new Tutor(
            3,
            "Karen",
            ["Angular, View"]
        ),
        new Tutor(
            4,
            "Janice",
            ["REST Services", "SQL"]
        ),
        new Tutor(
            5,
            "David",
            [".NET"]
        )
    ];
    scheduler.availableTutors = {
        getTutors: () => tutors,
        getTutor: tutorId => tutors.find(x => x.tutorId === tutorId)
    };

}) (scheduler || (scheduler = {}));