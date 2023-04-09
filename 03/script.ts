function mountMultiplicationTable(list: number[]) {
  list.forEach((num) => {
    for (let i = 0; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
    console.log("---------------\n");
  });
}

mountMultiplicationTable([1, 5, 2]);
