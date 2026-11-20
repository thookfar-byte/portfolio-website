
async function fetchPortfolio() {
    try {
        console.log("===== MY PORTFOLIO =====");
        console.log("Fetching live user data...\n");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        console.log("===== USER INFORMATION =====");
        console.log("Name     :", data.name);
        console.log("Email    :", data.email);
        console.log("City     :", data.address.city);
        console.log("Company  :", data.company.name);

        console.log("\n===== FETCH SUCCESSFUL =====");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchPortfolio();
