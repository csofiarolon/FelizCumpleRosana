const getRemainTime = (deadline) => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000;
    
    let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    let remainMinutes = ('0' + Math.floor((remainTime / 60) % 60)).slice(-2);
    let remainHours = ('0' + Math.floor((remainTime / 3600) % 24)).slice(-2);
    let remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    };
};

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);
    
    // Inicializa la opacidad del contador
    el.style.opacity = 0; // Hace que el contador sea invisible al principio

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

        // Cambia la opacidad a 1 después de un pequeño retraso
        if (t.remainTime > 0) {
            el.style.opacity = 1; // Hace visible el contador
        }

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }

    }, 1000);
};

// Llama a la función countdown al cargar la ventana
window.onload = function() {
    countdown('Oct 11 2024 22:00:00 GMT-0300', 'clock', 'Feliz cumple Ro!');
};

