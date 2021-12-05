export function formatDate(date: string) {
  const formattedDate = new Date(date).toLocaleDateString('en-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formattedDate;
}
