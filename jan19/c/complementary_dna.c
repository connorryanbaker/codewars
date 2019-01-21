#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char * dna_strand(const char * dna)
{
  if (dna == NULL || strlen(dna) == 0)
    return NULL;
  int length = strlen(dna);
  printf("size: %d\n", length);
  char * complement = malloc( sizeof(char) * length);
  int i;
  for (i = 0; i != length; i++) {
      if (dna[i] ==  'A') {
        complement[i] = 'T';
      } else if (dna[i] == 'T') {
        complement[i] = 'A';
      } else if (dna[i] == 'C') {
        complement[i] = 'G';
      } else {
        complement[i] = 'C';
    }
  }
  while (i > length - 1) {
    complement[i] = '\0';
    i--;
  }
  return complement;
}

int main(void) 
{
  char * strand = "GTAT";
  dna_strand(strand);
  return 0;
  
}

