export interface NavigationInterface {
    submenu: string;
    link: string
}

export interface HeroInterface {
    title: string;
    image: ImageInterface;
    contactButton: string;
    subtitle: string;

}

export interface ServicesInterface {
    image: ImageInterface ;
    title: string;
    description: string;
}


export interface ImageInterface {
    src: string;
    alt: string
}
