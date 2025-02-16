

 document.getElementById('sendCode').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (email) {
        // شبیه سازی ارسال کد تایید به ایمیل
        console.log(`کد تایید به ایمیل ${email} ارسال شد.`);

        // نمایش بخش کد تایید
        document.getElementById('codeSection').style.display = 'block';
    }
});

document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const code = document.getElementById('code').value;

    if (code === '123456') {  // این کد شبیه سازی شده است
        alert('تایید هویت موفقیت‌آمیز بود.');
    } else {
        alert('کد تایید اشتباه است.');
    }
}); 
    