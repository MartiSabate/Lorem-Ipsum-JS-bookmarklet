


(function () {
    console.log('Function has been triggered');
    
    // Get all paragraph elements
    var paragraphs = document.querySelectorAll('p');
    
    // Define your regex pattern
    var regex = new RegExp('\\b' + "ipsum" + '\\b', 'gi'); // Regex word match

        // Iterate through each paragraph and apply regex
        paragraphs.forEach(function(paragraph) {
        if (regex.test(paragraph.textContent)) {
            console.log('Match found in paragraph:', paragraph.textContent);
            paragraph.innerHTML = paragraph.innerHTML.replace(regex, '<mark style="background: #00ced1!important">'+ "ipsum" + '</mark>');
        }
    });


})();