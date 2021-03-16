(scheduler => {
    let tutorsLoaded = false;

    scheduler.availableTutors = {
        load() {
            if(!tutorsLoaded){
                let tutors = scheduler.availableTutors.getTutors();

                let fragment = document.createDocumentFragment();

                tutors.forEach(tutor=>{
                    let li = document.createElement('li');
                    li.innerText = tutor.name;
                    li.classList.add('list-group-item');
                    li.onclick = () => {
                        //scheduler.tutorDetails.load(tutor.tutorId);
                    };
                    fragment.appendChild(li);
                });
                document.querySelector('#availableTutors_tutors').appendChild(fragment);
                tutorsLoaded = true;
            }
            scheduler._changeView('availableTutors');
        }
    };


}) (scheduler || (scheduler = {}));