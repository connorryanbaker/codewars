#include <stddef.h>

size_t get_count(const char *s)
{
  const char *vowels = "aeiou";
  int i, j;
  int count = 0;
  for (i = 0; s[i] != '\0'; i++) {
    for (j = 0; j < 5; j++) {
      if (vowels[j] == s[i]) {
        count++;
      }
    }
  }
  return count;
}

