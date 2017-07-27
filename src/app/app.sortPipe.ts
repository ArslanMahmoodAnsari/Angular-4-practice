import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
	name:'sort'
})

export class SortPipe implements PipeTransform {
	transform(value: any[], args: string):any{
		if(args === "asscending")
		{
			return value.sort();
		}
		else if (args ==="descending")
		{
			return value.sort().reverse();
		}
	}
}