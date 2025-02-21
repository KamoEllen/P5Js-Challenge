function setup() {
   noCanvas();
   let button = select('#submitbutton');
   let input = select('#wordinput');
}
function draw()
{
    background(200,100,230);
}
function makeAcrostic()
 {
    resultsDiv.html(''); 
    let word = input.value().toUpperCase();
    console.log(word);

    
}