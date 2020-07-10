import { userNavBar, adminNavBar, nonUserNavBar, homeNavBar } from "./navbar.js";

const api = 'https://us-central1-nih-nci-dceg-episphere-dev.cloudfunctions.net/';
// const api = 'http://localhost:8010/nih-nci-dceg-episphere-dev/us-central1/';

export const validateUser = async () => {
    const idToken = await getIdToken();
    const response = await fetch(`${api}biospecimen?api=validateUsers`, {
        method: "GET",
        headers: {
            Authorization:"Bearer "+idToken
        }
    });
    return await response.json();
}

export const getIdToken = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            unsubscribe();
            if (user) {
                user.getIdToken().then((idToken) => {
                    resolve(idToken);
            }, (error) => {
                resolve(null);
            });
            } else {
            resolve(null);
            }
        });
    });
};

export const showAnimation = () => {
    if(document.getElementById('loadingAnimation')) document.getElementById('loadingAnimation').style.display = '';
}

export const hideAnimation = () => {
    if(document.getElementById('loadingAnimation')) document.getElementById('loadingAnimation').style.display = 'none';
}

export const userAuthorization = (auth, route) => {
    auth.onAuthStateChanged(async user => {
        if(user){
            const idTokenResult = await auth.currentUser.getIdTokenResult()
            showAnimation();
            const response = await validateUser();
            hideAnimation();
            if(response.code === 200) {
                const role = response.data.role;
                if(role === 'admin') document.getElementById('navbarNavAltMarkup').innerHTML = adminNavBar();
                else document.getElementById('navbarNavAltMarkup').innerHTML = userNavBar();
                toggleCurrentPage(route);
                return role;
            }
            else if(response.code === 401) {
                document.getElementById('navbarNavAltMarkup').innerHTML = nonUserNavBar();
                document.getElementById('root').innerHTML = 'You do not have required permission to access this dashboard';
                toggleCurrentPage(route);
            }
        }
        else{
            document.getElementById('navbarNavAltMarkup').innerHTML = homeNavBar();
            window.location.hash = '#';
        }
    });
}


export const toggleCurrentPage = async (route) => {
    const IDs = ['dashboard', 'manageUsers'];
    IDs.forEach(id => {
        const element = document.getElementById(id);
        if(!element) return;
        element.addEventListener('click', () => {
            removeActiveClass('navbar-nav', 'current-page');
            element.parentNode.parentNode.classList.add('current-page');
            toggleNavbarMobileView();
        });
    });

    if(route === '#dashboard') document.getElementById('dashboard').click();
    if(route === '#manage_users') document.getElementById('manageUsers').click();
}

export const removeActiveClass = (className, activeClass) => {
    let fileIconElement = document.getElementsByClassName(className);
    Array.from(fileIconElement).forEach(elm => {
        elm.classList.remove(activeClass);
    });
}

export const toggleNavbarMobileView = () => {
    const btn = document.querySelectorAll('.navbar-toggler');
    if(btn && btn[0]){
        if(!btn[0].classList.contains('collapsed')) btn[0].click();
    }
}