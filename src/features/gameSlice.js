import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    games:[
        {
            image: "https://infocity.az/wp-content/uploads/2022/06/Forza-Horizon-5-Hot-Wheels.jpg",
            title: 'Forza Horizon 5',
            genres: ['Yarış', 'Simulyator', 'açıq dünya'],
            price: 2343,
            video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
            id: 1,
            description: "Horizon macəralarının sonsuz kaleydoskopu sizi gözləyir! Tarixin ən böyük avtomobillərinin sükanı arxasında Meksikanın inanılmaz gözəl və orijinal dünyasında maraqlı səyahətlər edin. Oyunu istək siyahınıza əlavə etməklə Horizon macəranıza bu gün başlayın!",
        },
        {
            image: 'https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042GoldEdition_DICE_Editions_S1_2560x1440-98e3508c62e4d57c1ab8c109b49016a2_2560x1440-98e3508c62e4d57c1ab8c109b49016a2',
            title: 'Battlefield 2042',
            genres: ['Fəaliyyət', 'Atıcı', 'Müharibə'],
            video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
            price: 2433,
            id: 2,
            description: 'Battlefield™ 2042 seriyanı epik döyüş əfsanələrinə qaytaran birinci şəxs atıcıdır. Xaotik gələcəkdə öz heyətiniz və ən son texnologiya arsenalı ilə daim dəyişən döyüş meydanlarına uyğunlaşın və inkişaf edin.'
        },
        {
            image: 'https://ixbt.online/gametech/covers/2021/04/21/7Q1yPI2ARe9saRfGzS9v9uUXOgViKwJa9NIgAoO2.jpg',
            title: 'Life is Strange True Colors',
            genres: ['Dərin hekayə', 'Baş qəhrəman'],
            video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
            price: 3021,
            id: 3,
            description: 'Aleks Çen hər kəsdən öz "lənətini" - başqalarının güclü emosiyalarını oxumaq və onlara təsir etmək fövqəltəbii qabiliyyətini gizlədir. Lakin qardaşı öləndə - guya qəzada - Alex həqiqəti öyrənmək üçün ondan istifadə edir.'
        },
        {
            image: 'https://s2.gaming-cdn.com/images/products/10936/orig-fallback-v1/grand-theft-auto-v-xbox-series-x-s-xbox-series-x-s-game-microsoft-store-united-states-cover.jpg?v=1659340318',
            title: 'Grand Theft Auto V',
            genres: ['açıq dünya', 'Fəaliyyət'],
            video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
            price: 789,
            id: 4,
            description: 'PC üçün Grand Theft Auto V oyunçulara Los Santos və Blaine County-nin ikonik dünyasını 4k-a qədər və saniyədə 60 kadr sürətində kəşf etməyə imkan verir.'
        },
        {
            image: 'https://s1.gaming-cdn.com/images/products/1857/orig/tom-clancy-s-rainbow-six-siege-ultimate-edition-ultimate-edition-pc-game-ubisoft-connect-europe-cover.jpg?v=1649863250',
            title: 'Tom Clancy\'s Rainbow Six®',
            video: 'https://www.youtube.com/embed/6wlvYh0h63k',
            genres: ['Taktika', 'Atıcı'],
            price: 982,
            id: 5,
            description: 'Tom Clancy"s Rainbow Six Siege, Ubisoft Montreal tərəfindən hazırlanmış məşhur birinci şəxs atıcısının davamıdır.'
        },
        {
            image: 'https://s1.gaming-cdn.com/images/products/6147/orig/assassin-s-creed-valhalla-pc-game-ubisoft-connect-europe-cover.jpg?v=1650550345',
            title: 'Assassin’s Creed Valhalla',
            genres: ['parkur', 'РПГ', 'Açıq dünya'],
            video: 'https://www.youtube.com/embed/ssrNcwxALS4',
            price: 2863,
            id: 6,
            description: 'Assassin"s Creed Valhalla, Ubisoft Montreal tərəfindən hazırlanmış və Ubisoft tərəfindən nəşr edilmiş çox platformalı fəaliyyət/RPG video oyunudur. Bu, Assassin"s Creed seriyasının on ikinci hissəsidir.'
        },
    ],
    detailGame:[]
}

const gameSlice=createSlice({
    name:'games',
    initialState,
    reducers:{
        setDetailGame:(state,action) => {
            state.detailGame=action.payload
        }
    }
})

export const {setDetailGame} = gameSlice.actions
export default gameSlice.reducer