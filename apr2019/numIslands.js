const countIslands = (mapStr) => {
  const grid = mapStr.split("\n").map((row) => row.split(""));
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == '0') {
        count++;
        dfs(grid,i,j);
        console.log("");
        console.log(grid);
      }
    }
  }
  return count;
}

const dfs = (grid,x,y) => {
  if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] == '.') return;
  grid[x][y] = '.';
  dfs(grid,x-1,y);
  dfs(grid,x+1,y);
  dfs(grid,x,y-1);
  dfs(grid,x,y+1);
}

