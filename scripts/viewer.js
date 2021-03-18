(scheduler => {
    scheduler._changeView = viewId => {
        document.querySelectorAll('main > .active').forEach(element => {
            element.classList.remove('active');
        });
        document.getElementById(viewId).classList.add('active');
    };
    scheduler._appointments = [];
    // scheduler._updateAppointments = () => {
    //     document.getElementById('')
    // }
}) (scheduler || (scheduler = {}));
