function validatePassword() {
    var password = document.getElementById("password").value;

    
    if (password.length < 8) {
        document.getElementById("validationResult").textContent = "A senha deve ter pelo menos 8 caracteres.";
        return;
    }
    
    if (!/[A-Z]/.test(password)) {
        document.getElementById("validationResult").textContent = "A senha deve conter letras maiúsculas.";
        return;
    }

    
    if (!/[a-z]/.test(password)) {
        document.getElementById("validationResult").textContent = "A senha deve conter letras minúsculas.";
        return;
    }
    
    if (!/\d/.test(password)) {
        document.getElementById("validationResult").textContent = "A senha deve conter números.";
        return;
    }

    
    if (!/[^A-Za-z0-9]/.test(password)) {
        document.getElementById("validationResult").textContent = "A senha deve conter caracteres especiais.";
        return;
    }

    
    document.getElementById("validationResult").textContent = "A senha é válida!";}