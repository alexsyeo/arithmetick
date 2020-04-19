import moment from 'moment';

// TODO: CHANGE BELOW DEFAULT TO 1:00
const startTime = "1:00";

export default (state = moment(startTime, "m:ss"), action) => {
    switch (action.type) {
        case 'TICK':
            if (state.isAfter(moment("0:00", "m:ss"))) {
                return moment(state).subtract(1, "second");
            }
        case 'RESET_TIMER':
            return moment(startTime, "m:ss");
        default:
            return state;
    }
};