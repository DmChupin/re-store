export default class BookstoreService {

    data = [
        {
            id:1,
            tittle:'Book 1 Prod',
            author:'Book 1 author',
            price: 43,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL.jpg',
        },
        {
            id:2,
            tittle:'Book 2 Prod',
            author:'Book 3 author',
            price: 44,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg',
        }
    ];

    getBooks() {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        }));
    }

}