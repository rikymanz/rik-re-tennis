export const toRealIsoDate = ( date ) => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const realDate = new Date( date )
    return `${realDate.getDate()}-${months[realDate.getMonth()]}-${realDate.getFullYear()} ${realDate.getHours()}:${realDate.getMinutes()} `
}