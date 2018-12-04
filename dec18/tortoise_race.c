int* race(int v1, int v2, int g) {
  int *new_arr = malloc(3*sizeof(int));
    if (v1 >= v2) {
      int i;
      for(i = 0; i < 3; i++)
        new_arr[i] = -1;
    } else {
      float time = (float)g / (v2 - v1);
      int min = (int)(time * 60) % 60;
      int seconds = (int)(time * 3600) % 60;
      new_arr[0] = (int)time;
      new_arr[1] = min;
      new_arr[2] = seconds;
   }
   return new_arr;
}
