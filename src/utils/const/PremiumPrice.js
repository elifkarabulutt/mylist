import {Image} from "react-native";
export const premiuPackages = [
    {
        id: 1,
        title: "Aylık",
        price: "29.99 ₺ ",
        icon: <Image source={require('../../../assets/images/price.png')} style={{ width: 30, height: 30 }} />


    },
    {
        id: 2,
        title: "Yıllık",
        price: "299.99 ₺",
        icon: <Image source={require('../../../assets/images/price.png')} style={{ width: 30, height: 30 }} />

    },
    {
        id: 3,
        title: "Sınırsız",
        price: "399.99 ₺",
        icon: <Image source={require('../../../assets/images/price.png')} style={{ width: 30, height: 30 }} />

    }
]