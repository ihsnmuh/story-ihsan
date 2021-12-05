import readingTime from 'reading-time';

export function timeReading(text: string) {
  const stats = readingTime(text);
  return stats.text;
}
