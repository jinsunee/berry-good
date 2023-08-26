import moment from 'moment';

export function calculateDays(startAt: Date, endAt: Date) {
  // 날짜 객체 생성
  const startDate = moment(startAt);
  const endDate = moment(endAt);
  const today = moment();

  // 유효성 검사
  if (
    !startDate.isValid() ||
    !endDate.isValid() ||
    startDate.isAfter(endDate)
  ) {
    return null;
  }

  // 전체 일수 계산
  const totalDays = endDate.diff(startDate, 'days') + 1;

  // 오늘까지의 일수 계산
  const daysPassed = today.diff(startDate, 'days') + 1;

  return {
    daysPassed,
    totalDays,
  };
}
