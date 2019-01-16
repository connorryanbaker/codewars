#include <stddef.h>

int find_smallest_int(int *vec, size_t len)
{
  int least;
  int i;
  for (i = 0; i < len; i++) {
    if (i == 0 || vec[i] < least) 
      least = vec[i];
  }
