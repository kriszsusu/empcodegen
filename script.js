document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
s
    var name = document.getElementById('name').value.trim();
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value.trim();
    var postalCode = document.getElementById('postalCode').value.trim();
    var workplace = document.getElementById('workplace').value.trim();

    var nameCode = '';
    if (name.length >= 1) {
        nameCode = name.charAt(0) + name.charAt(name.length - 1);
    }

    var postalCodeCode = '';
    if (postalCode.length >= 3) {
        postalCodeCode = postalCode.charAt(1) + postalCode.charAt(2);
    }

    var dobDigits = dob.replace(/-/g, '');
    var dobSum = dobDigits.split('').reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    while (dobSum > 9) {
        dobSum = dobSum.toString().split('').reduce(function(a, b) {
            return parseInt(a) + parseInt(b);
        }, 0);
    }
    var dobCode = dobSum.toString();

    var emailCode = '';
    var emailParts = email.split('@');
    if (emailParts.length == 2) {
        var domainParts = emailParts[1].split('.');
        if (domainParts.length >= 2) {
            emailCode = domainParts[domainParts.length - 1];
        }
    }

    var uniqueCode = nameCode + postalCodeCode + dobCode + emailCode;

    var resultDiv = document.getElementById('result');
    resultDiv.innerText = 'Az egyedi kód: ' + uniqueCode;
    resultDiv.classList.add('show');
});
