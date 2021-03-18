(scheduler =>{
    let selectedTutor;
    scheduler.calendar = {
        load(tutorId){
            selectedTutor = scheduler.inventory.getTutor(tutorId);

            document.querySelector("#calendar_name").innerText = selectedTutor.name;
            // document.querySelector('#calendar_skills').innerText = selectedTutor.skills;
            // document.querySelector('#calendar_appointments').innerText = selectedTutor.appointments;

            scheduler._changeView('calendar');
        }


    };
})(scheduler || (scheduler = {}));
//FInishthis
