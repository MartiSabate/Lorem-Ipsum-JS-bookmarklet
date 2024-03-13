const button = document.getElementById("sendButton");

button.onclick = function(){
    var word = document.getElementById("word").value;
    console.log("The value is: " + word);
    sendToBackend(word);
}



function sendToBackend(word) {
    console.log('Function has been triggered');
    
    // Get all paragraph elements
    var paragraphs = document.querySelectorAll('p');
    
    // Define your regex pattern
    var regex = new RegExp('\\b' + word + '\\b', 'gi'); // Regex word match

        // Iterate through each paragraph and apply regex
        paragraphs.forEach(function(paragraph) {
        if (regex.test(paragraph.textContent)) {
            console.log('Match found in paragraph:', paragraph.textContent);
            paragraph.innerHTML = paragraph.innerHTML.replace(regex, '<mark style="background: #00ced1!important">'+ word + '</mark>');
        }
    });


};