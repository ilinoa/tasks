const days = 9;				// дней в периоде 
const period = 3;			// как часто я ем протеин (раз в 3 дня)
const workDayAmount = 200;	// количество в буднии
const weekDayAmount = 100;	// количество в выходные

let total = 0;
let count = 1;
let weeks = 0;
let works = 0;

for (let i=1; i<=days; i++) {
	if (count == period) {
		if (i%6==0 || i%7==0) {
			weeks = weeks + weekDayAmount;
		}
		else {
			works = works + workDayAmount;
		}
		count = 0;
	}
	count++;
}

total = weeks + works;

sum.innerHTML = total;

week.innerHTML = weeks;

work.innerHTML = works;

console.log(total);