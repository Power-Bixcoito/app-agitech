export function store_data(data, key) {
    if (!window.localStorage || !JSON || !key) {
        return;
    }
    localStorage.setItem(key, JSON.stringify(data));
}

export function get_data(key) {
    if (!window.localStorage || !JSON || !key) {
        return;
    }
    var item = localStorage.getItem(key);

    if (!item) {
        return;
    }

    return JSON.parse(item);
}

export function remove_data(key) {
    if (!window.localStorage || !JSON || !key) {
        return;
    }
    localStorage.removeItem(key);
}