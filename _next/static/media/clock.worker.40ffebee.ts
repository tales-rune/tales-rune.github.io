// lib
import dayjs from '@lib/dayjs';

// ----------------------------------------------------------------------

let timeout1: NodeJS.Timeout | undefined;

const eventTypes = {
    currentTimeSetting: 'current-time-setting',
};

/**
 * 1초마다 현재시간 함수 호출 명령
 */
function currentTimeSetting() {
    clearTimeout(timeout1);

    postMessage(eventTypes.currentTimeSetting);
    const now = dayjs().tz();
    const nextSecond = dayjs().tz().add(1, 'second').startOf('second');
    const delay = nextSecond.diff(now);

    timeout1 = setTimeout(currentTimeSetting, delay);
}

/**
 * event 처리
 */
addEventListener('message', (event: MessageEvent<string>) => {
    const type = event?.data;

    if (type === eventTypes.currentTimeSetting) {
        currentTimeSetting();
    }
});
