/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Work {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}
enum Rest {
  Saturday,
  Sunday,
}
function isWeekend(day: Work | Rest): string {
  if (day >= Work.Monday && day <= Work.Friday) {
    return 'work, slaves!'
  } else if (day === Rest.Saturday || day === Rest.Sunday) {
    return 'rest but with guilt!'
  }
  return 'Stop fantasizing!'
}