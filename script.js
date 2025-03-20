$(document).ready(function () {
    // Highlight the active tab in the navbar
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active'); // Remove active class from all tabs
        $(this).addClass('active'); // Add active class to the clicked tab
    });

    // Regex patterns for validation
    const emailRegex = /^[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{2,}\.[A-Za-z]{2,}$/;
    const usernameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    // Combined form submission handler
    $('.login-form form').submit(function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const email = $('.login-form input[type="email"]').val().trim();
        const username = $('.login-form input[type="text"]').val().trim();
        const password = $('.login-form input[type="password"]').val().trim();

        let isValid = true;

        // Validate email
        if (!emailRegex.test(email)) {
            alert('❌ Invalid Email Address.\n(e.g., example@domain.com)');
            isValid = false;
        }

        // Validate username (if applicable)
        if (username && !usernameRegex.test(username)) {
            alert('❌ Invalid Username.\n(e.g., John Doe)');
            isValid = false;
        }

        // Validate password
        if (!passwordRegex.test(password)) {
            alert('❌ Password must meet the following requirements:\n' +
                '- At least 8 characters and at most 20 characters\n' +
                '- At least one uppercase letter\n' +
                '- At least one lowercase letter\n' +
                '- At least one digit\n' +
                '- At least one special character (@$!%*?&)');
            isValid = false;
        }

        // If all fields are valid, submit the form
        if (isValid) {
            window.location.href = 'loginmsg.html';
        }
    });
});

// ................................................. for ok btn on verification page

document.querySelector('.btn-warning').addEventListener('click', function() {
    window.location.href = 'index.html'; // Change 'index.html' to your homepage
});
