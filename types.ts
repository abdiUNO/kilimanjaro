interface IVendor {
    id: number;
    title: string;
    description: string;
    email: string;
    phone: string;
    profilePic: string;
    location: string;
}

type IProduct = {
    id: number;
    title: string;
    description: string;
    category: string;
    images: string[];
    price: string;
    vendor: IVendor;
};

export { IVendor, IProduct };
