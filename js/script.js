function myAge() {
    var actualDate = new Date(Date.now());
    var myBirthDate = new Date(1999, 02, 25, 20, 25);
    
    var diff = new Date(actualDate.getTime() - myBirthDate.getTime());
    var age = diff.getUTCFullYear() - 1970;

    document.getElementById("myAge").innerHTML = age;
}