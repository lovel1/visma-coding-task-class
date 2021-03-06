export const isUuid = uuid => {
    const strUuid = '' + uuid
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    return strUuid.match(uuidRegex) ? true : false
}