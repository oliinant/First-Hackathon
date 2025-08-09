export const sendAuthData = async (inputLoginValues, location) => {
    try {
        const response = await fetch(`http://localhost:5000${location}`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(inputLoginValues)
        });

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json()
            }
            catch {
                return {error: true, message: "Something went wrong"}
            }
            return errorData;
        }
        const result = await response.json();
        window.location.href = "/";
        

    } 
    catch(error) {
        return {error: true, message: error.message}
    }

}