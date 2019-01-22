#include <stdbool.h>
#include <string.h>

bool xo (const char* str)
{
  int i = 0, x = 0, o = 0;
  bool result;
  for (; str[i] != '\0'; i++) {
    if (str[i] == 'x' || str[i] == 'X')
      x++;
    else if (str[i] == 'o' || str[i] == 'O')
      o++;
  }
  result = (x == o ? true : false);
  return result;
}
