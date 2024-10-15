export const fetchCompanyName = async (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dominguez & Co.");
        }, 1000); // 1 seconds delay
    });
};