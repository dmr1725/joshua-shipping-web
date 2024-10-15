export const fetchCompanyName = async (): Promise<string> => {
    console.log("hey")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dominguez & Co.");
        }, 5000); // 5 seconds delay
    });
};