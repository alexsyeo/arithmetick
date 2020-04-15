import moment from 'moment';

// TODO: CHANGE BELOW DEFAULT TO 1:00

export default (state = moment("0:10", "m:ss"), action) => {
    switch (action.type) {
        case 'TICK':
            if (state.isAfter(moment("0:00", "m:ss"))) {
                return moment(state).subtract(1, "second");
            }
        default:
            return state;
    }
};