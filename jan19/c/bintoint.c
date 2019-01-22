#include <stddef.h>

unsigned binary_array_to_numbers(const unsigned *bits, size_t count)
{
  int result = 0, i = 0;
  int pow = count;
  for (i = 0; i < count; i++) {
    if (bits[i] == 1) 
      result += expt(2, pow - 1);
    pow--;
  }
  return result;  
};
int expt(int b, int p) 
{
  if (p == 0)
    return 1;
  int result = b;
  while (p-- > 1)
    result *= b;
  return result;
}
