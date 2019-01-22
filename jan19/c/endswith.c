#include <stdbool.h>
#include <string.h>

bool solution(const char *string, const char *ending)
{
    int idx = strlen(string) - strlen(ending);
    if (idx < 0)
      return false;
    int eidx = 0;
    for (; string[idx] != '\0'; idx++) {
      if (string[idx] != ending[eidx])
        return false;
      eidx++;
    }
    return true;
}
