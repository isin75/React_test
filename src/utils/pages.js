export const getPageCount = (pagesCount, limit) => {
    return Math.ceil(pagesCount/limit)
}

export const getPagesArray = (totalPages) => {
    let result = []
    for (let i = 0; 1 < totalPages; i++) {
        result.push(i + 1)
    }
    return result
}