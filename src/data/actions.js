import { setUser } from "./userReducer";

export const loginUser = async (body, dispatch) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const data = await response.json();
            getUser(data.body.token, dispatch);
        } else {
            alert("Erreur lors de la connexion");
        }
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
};

export const getUser = async (token, dispatch) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(setUser({ token, user: data.body }));
        } else {
            alert("Erreur lors de la connexion");
        }
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
};

/** création de compte **/

export const newUser = async (body, goToLogin) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            goToLogin();

            alert("Welcome!");
        } else {
            alert("Something went wrong.Please try again.");
        }
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
};

/**Edit user name**/

export const EditProfile = async (body, token, dispatch, onClose) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            getUser(token, dispatch);
            onClose();
        }

        else {
            alert("Something went wrong.Please try again.");
        }
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
};
