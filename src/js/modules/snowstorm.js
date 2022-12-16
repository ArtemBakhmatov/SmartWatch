function snowstorm() {
    const snowstorm = document.createElement('div');
    snowstorm.classList.add('snowstorm');
    document.body.append(snowstorm);
    for(let i = 0; i <= 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowstorm.append(snowflake);
    }
}

export {snowstorm};