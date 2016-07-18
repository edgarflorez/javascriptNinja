function assert( value, desc ) {
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild( document.createTextNode( desc ) );
	document.getElementById("results").appendChild( li );
}
window.onload = function(){
	assert( true, "The test suite is running." );
};
// ASYNC TEST SUITE
(function(){
	var queue = [], paused = false;
	this.test = function(fn){
		queue.push( fn );
		runTest();
	};
	this.pause = function(){
		paused = true;
	};
	this.resume = function(){
		paused = false;
		setTimeout(runTest, 1);
	};
	function runTest(){
		if ( !paused && queue.length ) {
			queue.shift()();
			if ( !paused ) {
				resume();
			}
		}
	}
})();
