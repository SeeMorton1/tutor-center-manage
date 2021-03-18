


(scheduler => {
    class Appointment{
        constructor(tutor, studentName, note, date) {
            this.tutor= tutor;
            this.studentName = studentName;
            this.note = note;
            this.date = date;
        }
    }
    let newAppointment;
    let selectedTutor;
    let tutorsLoaded = false;
    scheduler.appointment = {

        load(tutorId, date) {
            let userName = document.getElementById('userName');
            let userNote = document.getElementById('userNote');
            selectedTutor = scheduler.inventory.getTutor(tutorId);
            newAppointment = new Appointment(selectedTutor, userName,userNote,date);

        },
        bookAppointment(){
            scheduler._appointments.push(newAppointment);
            selectedTutor.addAppointment(newAppointment);
            scheduler.calendar.load(selectedTutor.tutorId);
        }
    }


}) (scheduler || (scheduler = {}));
