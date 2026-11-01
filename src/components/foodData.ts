interface HeaderData{
    header:{
        imgSrc: string
    },
    links:{
        linkName: string,
        url:string,
        type: "link" | "button";
        class?: string;
    }[]
    
}

const headerData: HeaderData = {
    header: {
        imgSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png',
        
    },
    links: [
        {
            linkName: 'Swiggy Corporate',
            url:'https://www.swiggy.com/corporate/',
            type: 'link'

        },
        {
            linkName: 'Partner with us',
            url:'https://www.swiggy.com/corporate/',
            type: 'link'

        },
        {
            linkName: 'Get the App',
            url:'https://www.swiggy.com/corporate/',
            type: 'button',
            class:"button-white",
        },
        {
            linkName: 'Sign in',
            url:'https://www.swiggy.com/corporate/',
            type: 'button',
            class:"button-black",
        }
    ],
}


export {headerData }
