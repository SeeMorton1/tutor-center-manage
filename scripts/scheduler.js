(scheduler =>{

    // class Appointment{
    //     constructor(tutor, studentName, note, date) {
    //         this.tutor= tutor;
    //         this.studentName = studentName;
    //         this.note = note;
    //         this.date = date;
    //     }
    // }

    class Tutor{
        constructor(tutorId,name,skills, appointments) {
            this.tutorId = tutorId;
            this.name = name;
            this.skills = skills;
            this.appointments = {};


        }
        addAppointment(newAppointment){
            this.appointments[newAppointment.date] = newAppointment;
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
    scheduler.inventory = {
        getTutors: () => tutors,
        getTutor: tutorId => tutors.find(x => x.tutorId === tutorId)
    };

}) (scheduler || (scheduler = {}));

//Just finished the buttons for make appointment, now it is time to add logic to change the view in calendar
//So that each day in calendar represents being taken up if it is.