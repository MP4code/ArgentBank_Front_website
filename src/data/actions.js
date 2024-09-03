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
            const contentType = response.headers.get("Content-Type");

            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();

                console.log(data.body.token);
                getUser(data.body.token, dispatch);
                if (body.rememberMe) {
                    localStorage.setItem("token", data.body.token);

                }

            } else {
                alert("Vos identifiants sont incorrects");
            }
        } else {
            alert("Erreur lors de la connexion");
        }
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
}

export const getUser = async (token, dispatch) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },

        });

        if (response.ok) {
            const contentType = response.headers.get("Content-Type");

            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();

                dispatch(setUser({ token, user: data.body }));


            } else {
                alert("Vos identifiants sont incorrects");
            }
        } else {
            alert("Erreur lors de la connexion");
        }
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
}

/** création de compte **/

export const newUser = async (body, dispatch) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const contentType = response.headers.get("Content-Type");

            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();


                alert("Welcome!");

            } else {
                alert("Something went wrong.Please try again.");
            }
        }
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
}

/**Edit user name**/


export const EditProfile = async (body, token) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const contentType = response.headers.get("Content-Type");

            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                console.log(data.body.userName);
                alert("Your username has been successfully updated.");


            } else {
                alert("Something went wrong.Please try again.");
            }
        }
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
}