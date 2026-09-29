function formatearFechaParaMySQL(fecha) {
    return string(fecha).trim();
}

function formatearFechaLegible(fecha) {
    const [anio, mes, dia] = fecha.split('-');
    return `${dia}/${mes}/${anio}`;
}
module.exports = { formatearFechaParaMySQL, formatearFechaLegible };