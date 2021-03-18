(scheduler => {
    let tutorsLoaded = false;

    scheduler.tutorList = {
        load() {
            if(!tutorsLoaded){
                let tutors = scheduler.inventory.getTutors();

                let fragment = document.createDocumentFragment();

                tutors.forEach(tutor=>{
                    let li = document.createElement('li');
                    li.innerText = tutor.name;
                    li.classList.add('list-group-item');
                    li.onclick = () => {
                        scheduler.calendar.load(tutor.tutorId);
                    };
                    fragment.appendChild(li);
                });
                document.querySelector('#tutorList_tutors').appendChild(fragment);
                tutorsLoaded = true;
            }
            scheduler._changeView('tutorList');
        }
    };


}) (scheduler || (scheduler = {}));
