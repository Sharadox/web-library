/** "HH:MM" on a 24-hour clock in a time zone, for example "17:28". */
export function formatTime(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(
    date,
  );
}
