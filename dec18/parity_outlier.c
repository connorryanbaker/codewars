#include <stdlib.h>

int find_outlier(const int *values, size_t count) {
  int even = 0, odd = 0, i = 0, bool = 0;
  int res;
  for (i=0; i < count; i++) { 
    if (values[i] % 2 == 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }
  }
  bool = even > odd ? bool : 1;
  for (i = 0; i < count; i++) {
    if (bool == 0) {
      if (values[i] % 2 != 0)
      res = values[i];
    } else {
      if (values[i] % 2 == 0 && values[i] != 0) 
        res = values[i];
      }
    }
  return res;
}
