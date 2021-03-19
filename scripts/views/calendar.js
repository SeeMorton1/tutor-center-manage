(scheduler =>{
    let selectedTutor;
    let dateToPass;
    let calendarLoaded = false;
    scheduler.calendar = {
        load(tutorId){
            
            selectedTutor = scheduler.inventory.getTutor(tutorId);
            document.querySelector("#calendar_name").innerText = selectedTutor.name;
            let appointments = selectedTutor.appointments;
            let table = document.querySelector('#calendar_availableTimes');

            let template = table.querySelector('template');

            let tbody = table.querySelector('tbody');
            let dates = ["monday", "tuesday","wednesday","thursday"];
            if(appointments.length===0){

            }
            let fragment = document.createDocumentFragment();
            // appointments.forEach(appt => {
            //     let clone = template.content.cloneNode(true);
            //     let a = clone.querySelector('a');
            //     a.innerText = appt.date;
            //     let availability = clone.querySelector('span');
            //     availability.innerText = appt.studentName;
            //     fragment.appendChild(clone);
            // });
            dates.forEach(date => {
                let clone = template.content.cloneNode(true);
                let a = clone.querySelector('span');
                var btn = document.createElement('input');
                btn.type = "button";
                btn.className = "btn btn-secondary";
                btn.value = "Make Appointment";
                btn.onclick = () => scheduler.appointment.load(selectedTutor.tutorId,date);
                a.appendChild(btn);
                let dateText = clone.querySelector('a');
                dateText.innerText = date;
                fragment.appendChild(clone);
            });

            while(tbody.firstChild){
                tbody.removeChild(tbody.firstChild);
            }
            tbody.appendChild(fragment);




            


            scheduler._changeView('calendar');
        },
        makeAppointment (){
            let date = document.getElementById('date');
            let appointments = selectedTutor.appointments;

        }


    };
})(scheduler || (scheduler = {}));
//FInishthis
