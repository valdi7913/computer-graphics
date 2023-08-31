pascal = [[]]
size = 64;
for i in range(size):
  pascal.append([])
  for j in range(i+1):
    nextInt = 0
    if((j == 0) or (j == i)): nextInt = 1
    else: nextInt = pascal[i-1][j] + pascal[i-1][j-1]
    pascal[i].append(nextInt)

for line in pascal:
  print((size- len(line)) * " ",end="")
  for i in line: 
    if(i%2==0): print(f"  ", end="")
    else: print(f"{(i%4):2}", end="")
  print()



# 1               0
# 1 1             1
# 1 2 1           2
# 1 pascal.py3 3 1         3
# 1 4 6 4 1       4
# 1 5 10 10 5 1   5