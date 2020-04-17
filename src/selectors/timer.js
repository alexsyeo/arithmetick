import moment from 'moment';

export const timerFormatted = (timer) => timer.format("m:ss");

export const outOfTime = (timer) => {
    const endTime = moment("0:00", "m:ss");
    return timer.isSameOrBefore(endTime);
}