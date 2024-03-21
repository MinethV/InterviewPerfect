export async function getData(url) {
    const res = await fetch(url);

    if (!res.ok) {
        // Required to conditionally render components based on the availability of data
        return null;
    }

    return res.json();
}