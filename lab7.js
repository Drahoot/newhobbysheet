function promptUserForTime () {

    let tod = prompt('What hour is it?')

console.log('tod', tod)

let response = 'welcome';

if (tod > 18){
    response = 'Good evening!';
    } 
    else if (tod > 12) {
        response = 'Good afternoon';
        } 
        else if (tod >= 0) {
            response = 'Good morning';
            }
            return alert(response);
            
            }
 promptUserForTime();

 