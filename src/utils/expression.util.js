const getCronExpression = (timestamp) => {

    const date = new Date(timestamp);
    const minute = date.getMinutes();
    const hour = date.getHours();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${minute} ${hour} ${day} ${month} * ${year}`;
}

export {
    getCronExpression
}