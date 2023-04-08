const liveHost = "https://us-central1-mealstogo-78f60.cloudfunctions.net";
const localHost = "http://127.0.0.1:5001/mealstogo-78f60/us-central1";

export const isDevelopement = process.env.NODE_ENV === "developement";
export const host = isDevelopement ? localHost : liveHost;
