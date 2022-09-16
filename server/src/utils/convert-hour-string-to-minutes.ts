// 18:00 => ["18", "00"] => [18, 20] => 1080

export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)

  return hours * 60 + minutes
}
