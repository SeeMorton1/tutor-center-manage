(scheduler =>{
    let selectedTutor;
    let calendarLoaded = false;
    scheduler.calendar = {
        load(tutorId){

            selectedTutor = scheduler.inventory.getTutor(tutorId);
            document.querySelector("#calendar_name").innerText = selectedTutor.name;
            let appointments = selectedTutor.appointments;
            let table = document.querySelector('#calendar_availableTimes');

            let template = table.querySelector('template');

            let tbody = table.querySelector('tbody');

            let fragment = document.createDocumentFragment();
            appointments.forEach(appt => {
                let clone = template.content.cloneNode(true);
                let a = clone.querySelector('a');
                a.innerText = appt.date;
                let availability = clone.querySelector('span');
                availability.innerText = appt.studentName;
                fragment.appendChild(clone);
            });

            while(tbody.firstChild){
                tbody.removeChild(tbody.firstChild);
            }
            tbody.appendChild(fragment);




            // document.querySelector('#calendar_skills').innerText = selectedTutor.skills;
            // document.querySelector('#calendar_appointments').innerText = selectedTutor.appointments;


            scheduler._changeView('calendar');
        },
        makeAppointment (){
            let date = document.getElementById('date');
            let appointments = selectedTutor.appointments;

        }


    };
})(scheduler || (scheduler = {}));
//FInishthis
