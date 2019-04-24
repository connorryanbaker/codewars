const countIslands = (image) => {
  let count = 0;
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] != 0) {
        count++;
        dfs(image,i,j);
      }
    }
  }
  return count;
}

const dfs = (grid,x,y) => {
  if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] === 0) return;
  grid[x][y] = 0;
  dfs(grid,x-1,y);
  dfs(grid,x-1,y-1);
  dfs(grid,x-1,y+1);
  dfs(grid,x+1,y);
  dfs(grid,x+1,y-1);
  dfs(grid,x+1,y+1);
  dfs(grid,x,y-1);
  dfs(grid,x,y+1);
}
