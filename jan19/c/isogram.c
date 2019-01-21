#include <ctype.h>
#include <stdio.h>

bool is_isogram(char * str)
{
  int i, j;
  for (i = 0; str[i] != '\0'; i++) {
    for (j = i + 1; str[j] != '\0'; j++) {
      if (tolower(str[j]) == tolower(str[i])) {
        return false;
      }
    }
  }
  return true;
}
