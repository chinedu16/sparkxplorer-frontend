import { ref } from 'vue';

export function useDateFormatter() {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  /**
   * Function to format a date based on options
   * @param {string} date - The date string (ISO format)
   * @param {Intl.DateTimeFormatOptions} options - Optional formatting options
   * @param {string} locale - Locale (default: 'en-US')
   * @returns {string} - The formatted date string
   */
  const formatDate = (
    date: string,
    options: Intl.DateTimeFormatOptions = defaultOptions,
    locale: string = 'en-US'
  ) => {
    const parsedDate = new Date(date);
    return new Intl.DateTimeFormat(locale, options).format(parsedDate);
  };

  return {
    formatDate,
  };
}
