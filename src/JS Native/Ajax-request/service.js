function getImages(pageNumber) {

    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);

    return promise;
}