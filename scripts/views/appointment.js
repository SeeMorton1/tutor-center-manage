(scheduler => {
    class Appointment{
        constructor(tutorId, tutorName, studentName, date) {
            this.tutorId = tutorId;
            this.studentName = studentName;
            this.date = date;
        }
    }
    scheduler.appointment = {
        load() {
            let appt = new Appointment()
        }
    }
})