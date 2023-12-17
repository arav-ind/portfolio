export type CardType = {
    id: string,
    background: string,
    icon: any,
    title: string,
    tag: string,
}

export type Technology = {
    name: string,
    logo: string,
}
  
export type TechnologiesModalSourceType = {
    tier1: {
        title: string,
        data: Technology[],
    };
    tier2: {
        title: string,
        data: Technology[];
    };
    tier3: {
        title: string,
        data: Technology[];
    };
}