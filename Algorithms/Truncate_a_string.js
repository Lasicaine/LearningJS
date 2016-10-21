
truncateString("A-tisket a-tasket A green and yellow basket", 11);

function truncateString(str, num) {
  if (str.length <= num || num < 0) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
