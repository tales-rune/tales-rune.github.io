// lib
import dayjs from '@lib/dayjs';

// ----------------------------------------------------------------------

let timeout1: NodeJS.Timeout | undefined;

const eventTypes = {
    remainingTimeSetting: 'remaining-time-setting',
};

/**
 * 1초마다 다음보스의 출현시간까지 남은시간을 설정하기위해 이벤트 호출
 */
function remainingTimeSetting() {
    postMessage(eventTypes.remainingTimeSetting);

    const now = dayjs();
    const nextSecond = now.add(1, 'second').startOf('second');
    const delay = nextSecond.diff(now);

    timeout1 = setTimeout(remainingTimeSetting, delay);
}

/**
 * 워커 이벤트 처리
 */
addEventListener('message', (event: MessageEvent<string>) => {
    const type = event?.data;

    if (type === eventTypes.remainingTimeSetting) {
        remainingTimeSetting();
    } else if (type === 'clean') {
        clearTimeout(timeout1);
    }
});
