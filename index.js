const valideasy = (body = {}, fields = []) => {
    if (typeof body !== 'object' || body === null) {
        throw new Error("The first argument must be an object.");
    }
    if (!Array.isArray(fields)) {
        throw new Error("The second argument must be an array.");
    }

    for (let field of fields) {
        if (!body[field] || body[field].toString().trim() === "") {
            return `${field} is required!`;
        }
    }

    return null;
};

export default valideasy