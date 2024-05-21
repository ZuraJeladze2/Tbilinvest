function sendEmail() {
    (function () {
        emailjs.init({
            publicKey: "QZ2uBoElmMkzk2gQP",
        });
    })();
    const serviceId = 'service_jilennu'
    const templateId = 'template_ctelpoy'
    const form = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    if (form.name.length && form.email.length && form.message.length) {
        emailjs.send(serviceId, templateId, form).then(x => {
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('message').value = ''
            console.log(x);
            const submit = document.getElementById('submit')
            submit.innerText = 'Message sent!'
            setTimeout(() => {
                submit.innerText = 'Send'
            }, 2000);
        }).catch(err => {
            console.log(err);
        })
    }
}