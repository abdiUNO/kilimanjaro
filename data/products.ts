import { IVendor, IProduct } from '../types';

const vendors: IVendor[] = [
    {
        id: 0,
        title: 'Kente Showcase',
        description: 'Hand-made Ghana made kente pieces in display 🇬🇭',
        email: 'kttemanu@gmail.com',
        phone: '512-705-4846',
        profilePic:
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,h_653,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FbatWsm6pAXwrqHyvZr9I.jpeg',
    },
    {
        id: 1,
        title: 'Manly Kente Wraps',
        description: 'A collection of pieces for men',
        email: 'pkwadzo54@gmail.com',
        phone: '6467555030',
        profilePic:
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,h_653,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F4qxX0cQzybBXwOwoSrKP.jpeg',
    },
];

const data = [
    {
        id: 0,
        title: 'African Colors Medley Scarf',
        description:
            "A scarf that displays a unique mix of Africa's gold, green, red and black. Throw it over your shoulder over a suit, a dress, a pantsuit, or over a regular t-shirt! \n" +
            '\n' +
            'Dimensions: 4 inches x 77 inches',
        category: 'Clothing',
        price: '$15.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FnJNWpY092bQAJ5Vz5D1X.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F1z1Ufd8Tt2zHFGUoD7sQ.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F88UZ1B3V4XeZiCzopB0l.jpeg',
        ],
        vendor: vendors[0],
    },
    {
        id: 1,
        title: 'African Colors Medley Scarf 2',
        description:
            "A second version of the African Colors Medley scarf that displays a unique mix of Africa's gold, green, red and black. You can throw it over your shoulder over a suit, a dress, a pantsuit, or over a regular t-shirt! \n" +
            '\n' +
            'Dimensions: 4 inches x 77 inches',
        category: 'Clothing',
        price: '$15.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FZWGidQUEZPYmP7pZwCJt.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FWCLSHzUfLwlA8rExgS3S.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FGehrtSalmwz8eLLsqtTT.jpeg',
        ],
        vendor: vendors[0],
    },
    {
        id: 2,
        title: 'Medley & Blue Scarf',
        description:
            "A version of the African Colors Medley scarf with a tinge of blue that still displays a unique mix of Africa's gold, green, red and black. You can throw this one too over your shoulder over a suit, a dress, a pantsuit, or over a regular t-shirt! \n" +
            '\n' +
            'Dimensions: 4 inches x 77 inches',
        category: 'Clothing',
        price: '$15.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F9iYc7LdIkWrxptkts6xV.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2Ff4EyI9KOhaWXxnel2aZ2.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2ForRiD3na1ER5ybRfTFc3.jpeg',
        ],
        vendor: vendors[0],
    },
    {
        id: 3,
        title: 'Medley Shade & Gold Waist Wrapper (Women)',
        description:
            'A medley of green, red, pink, white with golden stripes that women can wrap around their waist like skirt to different occasions.\n' +
            '\n' +
            'Dimensions: 50 inches x 77 inches',
        category: 'Clothing',
        price: '$150.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FolTezPz8M0fBFyf4uwZP.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FfoCYF848MRZUNyEY7NPb.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F4qr9W5WKRtydu3725b99.jpeg',
        ],
        vendor: vendors[0],
    },
    {
        id: 4,
        title: 'Chief Wrap (Red, Gold, Green & Black) ',
        description:
            'A piece for a chief - splendid with a unique mix of gold, red, green, and red. \n' +
            '\n' +
            "1. The gold for Ghana's abundance of natural gold, hence the country's former name of the Gold Coast\n" +
            '\n' +
            "2. Red represents the blood she'd by Ghana's forefathers for independence\n" +
            "3. Green for the fertility of the land and it's lush forestry\n" +
            '\n' +
            '4. Black for the being the black star of Africa, which the national soccer team is named after. \n' +
            '\n' +
            'Dimensions: 81 inches x 143 inches ',
        category: 'Clothing',
        price: '$450.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FMXvsSPkFRsgkcOLup7kf.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FGzLWk8Iy2AaYdQK1Fgs7.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2Fnpf3uehM4eS2fARUEnn6.jpeg',
        ],
        vendor: vendors[1],
    },
    {
        id: 5,
        title: 'Fatia Fata Nkrumah ',
        description:
            "Named for and used by the wife of Ghana's first president Kwame Nkrumah, Fatia Nkrumah, the name literally means Fatia (who was Egyptian) is fitting as a wife for the president. \n" +
            'Yet this piece is for kingly men with bold ambitions. \n' +
            '\n' +
            'Dimensions: 76 inches x 152 inches',
        category: 'Clothing',
        price: '$450.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F1OfJ0lgdhboylioIZXBQ.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FHwZNfem0RzykuyOBWGG9.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FaZnvFiVSKy67uTQOyCTk.jpeg',
        ],
        vendor: vendors[1],
    },
    {
        id: 6,
        title: 'African Colors Medley Scarf',
        description:
            "A scarf that displays a unique mix of Africa's gold, green, red and black. Throw it over your shoulder over a suit, a dress, a pantsuit, or over a regular t-shirt! \n" +
            '\n' +
            'Dimensions: 4 inches x 77 inches',
        category: 'Clothing',
        price: '$15.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FnJNWpY092bQAJ5Vz5D1X.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F1z1Ufd8Tt2zHFGUoD7sQ.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F88UZ1B3V4XeZiCzopB0l.jpeg',
        ],
        vendor: vendors[0],
    },
    {
        id: 7,
        title: 'African Colors Medley Scarf 2',
        description:
            "A second version of the African Colors Medley scarf that displays a unique mix of Africa's gold, green, red and black. You can throw it over your shoulder over a suit, a dress, a pantsuit, or over a regular t-shirt! \n" +
            '\n' +
            'Dimensions: 4 inches x 77 inches',
        category: 'Clothing',
        price: '$15.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FZWGidQUEZPYmP7pZwCJt.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FWCLSHzUfLwlA8rExgS3S.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FGehrtSalmwz8eLLsqtTT.jpeg',
        ],
        vendor: vendors[0],
    },
    {
        id: 8,
        title: 'Medley & Blue Scarf',
        description:
            "A version of the African Colors Medley scarf with a tinge of blue that still displays a unique mix of Africa's gold, green, red and black. You can throw this one too over your shoulder over a suit, a dress, a pantsuit, or over a regular t-shirt! \n" +
            '\n' +
            'Dimensions: 4 inches x 77 inches',
        category: 'Clothing',
        price: '$15.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F9iYc7LdIkWrxptkts6xV.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2Ff4EyI9KOhaWXxnel2aZ2.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2ForRiD3na1ER5ybRfTFc3.jpeg',
        ],
        vendor: vendors[0],
    },
    {
        id: 9,
        title: 'Medley Shade & Gold Waist Wrapper (Women)',
        description:
            'A medley of green, red, pink, white with golden stripes that women can wrap around their waist like skirt to different occasions.\n' +
            '\n' +
            'Dimensions: 50 inches x 77 inches',
        category: 'Clothing',
        price: '$150.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FolTezPz8M0fBFyf4uwZP.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FfoCYF848MRZUNyEY7NPb.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F4qr9W5WKRtydu3725b99.jpeg',
        ],
        vendor: vendors[0],
    },
    {
        id: 10,
        title: 'Chief Wrap (Red, Gold, Green & Black) ',
        description:
            'A piece for a chief - splendid with a unique mix of gold, red, green, and red. \n' +
            '\n' +
            "1. The gold for Ghana's abundance of natural gold, hence the country's former name of the Gold Coast\n" +
            '\n' +
            "2. Red represents the blood she'd by Ghana's forefathers for independence\n" +
            "3. Green for the fertility of the land and it's lush forestry\n" +
            '\n' +
            '4. Black for the being the black star of Africa, which the national soccer team is named after. \n' +
            '\n' +
            'Dimensions: 81 inches x 143 inches ',
        category: 'Clothing',
        price: '$450.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FMXvsSPkFRsgkcOLup7kf.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FGzLWk8Iy2AaYdQK1Fgs7.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2Fnpf3uehM4eS2fARUEnn6.jpeg',
        ],
        vendor: vendors[1],
    },
    {
        id: 11,
        title: 'Fatia Fata Nkrumah ',
        description:
            "Named for and used by the wife of Ghana's first president Kwame Nkrumah, Fatia Nkrumah, the name literally means Fatia (who was Egyptian) is fitting as a wife for the president. \n" +
            'Yet this piece is for kingly men with bold ambitions. \n' +
            '\n' +
            'Dimensions: 76 inches x 152 inches',
        category: 'Clothing',
        price: '$450.00',
        images: [
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F1OfJ0lgdhboylioIZXBQ.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FHwZNfem0RzykuyOBWGG9.jpeg',
            'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2FaZnvFiVSKy67uTQOyCTk.jpeg',
        ],
        vendor: vendors[1],
    },
];

export { vendors };
export default data;
