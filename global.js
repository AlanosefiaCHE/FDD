// POST form data to zapier on submit
$(document).ready(function (e) {
    $("#myForm").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://hooks.zapier.com/hooks/catch/11197801/bhqe0y3/",
            type: "post",
            data: $("#myForm").serialize(),
            success: function () {
                // Redirect to another success page
                window.location = "index.html";
            }
        });
    });

    // zet op elke input en textarea in de form een 'touched' class nadat de 
    // gebruiker het element bezocht heeft
    $('form input, form textarea').focus(function(e) {
        e.target.classList.add('touched');
    });
});

