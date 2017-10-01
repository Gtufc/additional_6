module.exports = function zeros(expression) {
	function sum(x, y){
		var res = '0';
		for (var i=0; i<y; i++) {
			res = diff(res, "" + x);
		}
		return res;
	}

	function diff(max, min){
		if (+max < +min){
			var t = max;
			max = min;
			min = t;
		}

		max = max.split('').reverse();
		min = min.split('').reverse();
		var len = Math.max(max.length, min.length),
		result = [];
		for (var i=0, b=0, c=0; i<=len; i++){
			b = (+max[i] || 0) + (+min[i] || 0) + c;
			result[i] = b > 9 ? (c=1, b-10) : (c=0, b);
		}
		return result.reverse().join('').replace(/^0+/, '');
	}

	function getFactZeros(x){
		var z = 0;
		while (x){
			x = x/5 | 0;
			z += x;
		}
		return z;
	}

	var arr = expression.split('*');
	var val = '1';
	var length = arr.length;
	for (var k=0; k < length; k++){
		if (arr[k].substring(arr[k].length - 2) == '!!'){
			if (parseInt(arr[k]) % 2 == 0){
				for (var l=2; l<=parseInt(arr[k]); l = l + 2){
					val = sum(val, '' + l);
				}
			}
			else {
				for (var h=1; h<=parseInt(arr[k]); h = h + 2){
					val = sum(val, '' + h);
				}
			}
		}
		else {
			for (var i=2; i<=parseInt(arr[k]); i++){
				val = sum(val, '' + i);
			}
		}
	}
	var zeros = val;
	var count = 0;
	var zLength = zeros.length;
	for (var j = zLength - 1; j >= 0; j--){
		if (zeros[j] == 0){
			count++;
		}
		else {
			if (zeros[j] != 0) {
				break;
			}
		}
	}
	return count;
}