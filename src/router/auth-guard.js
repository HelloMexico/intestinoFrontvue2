
const isAuthenticatedGuard = async( to, from, next ) => {

    return new Promise( () => {

        const isAuthenticated = !!localStorage.getItem('userId'); // Convertimos el resultado en un booleano

        if (isAuthenticated) {
            if (to.name === 'login') {
                // Si el usuario está autenticado y está intentando acceder a la pantalla de login, redirigir a otra ruta.
                next({ name: 'consultar' }); // Cambia 'dashboard' a la ruta que desees para usuarios autenticados.
            } else {
                next();
            }
        } else {
            if (to.name === 'login') {
                // Si ya estamos en la página de login y no estamos autenticados, simplemente seguimos adelante.
                next();
            } else {
                next({ name: 'login' });
            }
        }
        
    })
    
}

export default isAuthenticatedGuard
