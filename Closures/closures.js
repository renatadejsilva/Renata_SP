function registerHandlers() {
	var as = document.getElementsByTagName('a');
	for (var i = 0; i < as.length; i++) {
		as[i].onclick = function() {
			for (var j = 0; j < as.length; j++) {
				if (as[j] == this){
					alert(j);
		  			return false;
				};
			};
		}
	}
};




