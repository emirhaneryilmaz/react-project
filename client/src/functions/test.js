export const getTest = async () => {
    try {
        const res = await fetch('http://localhost:8080/test', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type" : "applications/json",

            },
        });

        return await res.json();

    } catch (err) {

    }
}