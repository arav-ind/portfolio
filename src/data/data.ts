import scanner from '@/icons/adf_scanner.svg'
import sports from '@/icons/sports_cricket.svg'
import theatres from '@/icons/theaters.svg'
import translate from '@/icons/translate.svg'
import code from '@/icons/code.svg'
import terminal from '@/icons/terminal.svg'
import tv from '@/icons/tv.svg'
import technology from'@/icons/technology.svg'

import react from '@/icons/technologies/react.svg'
import javascript from '@/icons/technologies/javascript.svg'
import typescript from '@/icons/technologies/typescript.svg'
import html5 from '@/icons/technologies/html5.svg'
import aws from '@/icons/technologies/aws.svg'
import git from '@/icons/technologies/git.svg'
import java from '@/icons/technologies/java.svg'
import nextjs from '@/icons/technologies/nextjs.svg'
import nodejs from '@/icons/technologies/nodejs.svg'
import springboot from '@/icons/technologies/springboot.svg'
import angular from '@/icons/technologies/angular.svg'
import tailwind from '@/icons/technologies/tailwind.svg'
import docker from '@/icons/technologies/docker.svg'
import css from '@/icons/technologies/css.svg'
import { TechnologiesModalSourceType } from '@/types/types'

export const cardData = [
    {
        id: 'resume',
        title: 'Resume',
        icon: scanner,
        background: 'linear-gradient(122deg, #6e3d95 0%, rgba(68, 0, 141, 0.00) 189.13%)',
        tag: 'about'
    },
    {
        id: 'movies',
        title: 'Movies',
        icon: theatres,
        background: 'linear-gradient(95deg, #1DE3FF 0%, rgba(140, 210, 151, 0.13) 136.08%)',
        tag: 'extras'
    },
    {
        id: 'technologies',
        title: 'Technologies',
        icon: technology,
        background: 'linear-gradient(122deg, #835757 0%, rgba(141, 0, 0, 0.00) 189.13%)',
        tag: 'works'
    },
    {
        id: 'languages',
        title: 'Languages',
        icon: translate,
        background: 'linear-gradient(180deg, #9266FF 0%, rgba(255, 255, 255, 0.56) 100%)',
        tag: 'about'
    },
    {
        id: 'shows',
        title: 'Shows',
        icon: tv,
        background: 'linear-gradient(95deg, #1DFF93 0%, rgba(140, 210, 151, 0.13) 136.08%)',
        tag: 'extras'
    },
    {
        id: 'projects',
        title: 'My Projects',
        icon: code,
        background: 'linear-gradient(95deg, #AE0CA8 0%, rgba(210, 182, 140, 0.13) 136.08%)',
        tag: 'works'
    },
    {
        id: 'hobbies',
        title: 'Hobbies',
        icon: sports,
        background: 'linear-gradient(90deg, #FFA7C2 0%, rgba(244, 138, 14, 0.13) 128.62%)',
        tag: 'extras'
    },
    {
        id: 'contributions',
        title: 'Open Source',
        icon: terminal,
        background: 'linear-gradient(122deg, #00FFF0 0%, rgba(49, 88, 0, 0.00) 189.13%)',
        tag: 'works'
    },
]

// For Technologies Modal
export const technologiesModalSource: TechnologiesModalSourceType = {
    tier1: {
        title: '⭐⭐⭐⭐½',
        data: [
            {
                name: 'HTML5',
                logo: html5,
            },
            {
                name: 'CSS',
                logo: css,
            },
            {
                name: 'JavaScript',
                logo: javascript,
            },
            {
                name: 'ReactJS',
                logo: react,
            },
            {
                name: 'NextJS',
                logo: nextjs,
            },
            {
                name: 'Git',
                logo: git,
            },
            {
                name: 'TailwindCSS',
                logo: tailwind,
            },
        ],
    },
    tier2: {
        title: '⭐⭐⭐½',
        data: [
            {
                name: 'Java',
                logo: java,
            },
            {
                name: 'TypeScript',
                logo: typescript,
            },
            {
                name: 'Spring',
                logo: springboot,
            },
            {
                name: 'NodeJS',
                logo: nodejs,
            },
        ],
    },
    tier3: {
        title: '⭐⭐⭐',
        data: [
            {
                name: 'AWS',
                logo: aws,
            },
            {
                name: 'Docker',
                logo: docker,
            },
            {
                name: 'Angular',
                logo: angular,
            },
        ],
    }
}