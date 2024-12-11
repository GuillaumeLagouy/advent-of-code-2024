- Seperate input in two pieces : page ordering rules and update sequences

- For each X|Y row, get every Y pages who come before X :
  {page: 75, before: [29, 53, 47, 61, 13]}

- Iterate through update sequence

- For the current page, if one of the other page is not include in the before array so update sequence is wrong

- If update sequence is right, get the middle page
