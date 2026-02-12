// lib
import dayjs from '@lib/dayjs';

// ----------------------------------------------------------------------

let timeout1: NodeJS.Timeout | undefined;

const eventTypes = {
    nextBossSetting: 'next-boss-setting',
};

/**
 * 1분마다 다음보스를 재설정을 하기위해 이벤트 호출
 */
function nextBossSetting() {
    postMessage(eventTypes.nextBossSetting);

    const now = dayjs();
    const nextMinute = now.add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(now);

    timeout1 = setTimeout(nextBossSetting, delay);
}

/**
 * 워커 이벤트 처리
 */
addEventListener('message', (event: MessageEvent<string>) => {
    const type = event?.data;

    if (type === eventTypes.nextBossSetting) {
        nextBossSetting();
    } else if (type === 'clean') {
        clearTimeout(timeout1);
    }
});
