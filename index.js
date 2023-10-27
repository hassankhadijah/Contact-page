$(document).ready(function() {
    $("#custom-button").click(function() {
        // input values from the form
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();
        // message to display
        const contactMessage = `<div>
        <p><strong>name:</strong> ${name}</p>
        <p><strong>email:</strong> ${email}</p>
        <p><strong>message:</strong> ${message}</P>
        </div>`;
        $("#contact-details").html(contactMessage);

    });
});











