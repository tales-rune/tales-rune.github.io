// lib
import dayjs from '@lib/dayjs';

// ----------------------------------------------------------------------

let timeout1: NodeJS.Timeout | undefined;
let timeout2: NodeJS.Timeout | undefined;

const eventTypes = {
    voiceNotification: 'voice-notification',
    buffNotification: 'buff-notification',
};

/**
 * 1분마다 다음 출현이 임박한 보스의 음성 및 푸쉬 알림을 보내기위해 이벤트 호출
 */
function voiceNotification() {
    postMessage(eventTypes.voiceNotification);

    const now = dayjs();
    const nextMinute = now.add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(now);

    timeout1 = setTimeout(voiceNotification, delay);
}

/**
 * 1초마다 보스가 출현하기전에 버프 사용을 하라는 알림을 보내기위해 이벤트 호출
 */
function buffNotification() {
    postMessage(eventTypes.buffNotification);

    const now = dayjs();
    const nextSecond = now.add(1, 'second').startOf('second');
    const delay = nextSecond.diff(now);

    timeout2 = setTimeout(buffNotification, delay);
}

/**
 * 워커 이벤트 처리
 */
addEventListener('message', (event: MessageEvent<string>) => {
    const type = event?.data;

    if (type === eventTypes.voiceNotification) {
        voiceNotification();
    } else if (type === eventTypes.buffNotification) {
        buffNotification();
    } else if (type === 'clean') {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
    }
});
