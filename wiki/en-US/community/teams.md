<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
        avatar: 'https://files.fresns.org/wiki/avatars/jarvis-tang.jpg',
        name: 'Jarvis Tang',
        title: 'Creator',
        links: [
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22c18.2 6.8 31.3 24.4 31.3 45c0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7c54.4-11.4 98.3-55.4 109.7-109.7c17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9c129.4 7 233.4 112 240.9 241.5c.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9c76.8 6.3 138 68.2 144.9 145.2c.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3c-8.4-110.1-96.5-198.2-206.6-206.7z"/></svg>'
                },
                link: 'https://github.com/jarvis-tang'
            },
            { icon: 'github', link: 'https://github.com/jarvis-tang' },
            { icon: 'twitter', link: 'https://twitter.com/Jarvis_Tweet' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/jarvis-tang' },
        ]
    },
    {
        avatar: 'https://files.fresns.org/wiki/avatars/mouyong.jpg',
        name: 'Yong Mou',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/mouyong' },
        ]
    },
    {
        avatar: 'https://files.fresns.org/wiki/avatars/tracy-yuan.jpg',
        name: 'Tracy Yuan',
        title: 'Tester',
        links: [
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.171H9.384a58.104 58.104 0 0 1-.112 3.797h2.712c.388.023.393 1.251.393 1.266H9.183a9.223 9.223 0 0 1-.408 2.102l.757-.604c.452.456 1.512 1.712 1.906 2.177c.473.681.063 2.081.063 2.081l-2.794-3.382c-.653 2.518-1.845 3.607-1.845 3.607c-.523.468-1.58.82-2.64.516c2.218-1.73 3.44-3.917 3.667-6.497H4.491c0-.015.197-1.243.806-1.266h2.71c.024-.32.086-3.254.086-3.797H6.598c-.136.406-.158.447-.268.753c-.594 1.095-1.603 1.122-1.907 1.155c.906-1.821 1.416-3.6 1.591-4.064c.425-1.124 1.671-1.125 1.671-1.125zM13.078 6h6.377v11.33h-2.573l-2.184 1.373l-.401-1.373h-1.219zm1.313 1.219v8.86h.623l.263.937l1.455-.938h1.456v-8.86z"/></svg>'
                },
                link: 'https://www.zhihu.com/people/yuan-xin-2020'
            },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/tracy-yuanquan' },
        ]
    },
]

const oldMembers = [
]
</script>

# Teams

## Active Core Team Members

The development of Fresns and its ecosystem is guided by an international team, some of whom have chosen to be featured below.

<VPTeamMembers size="small" :members="members" />

## Core Team Emeriti

Here we honor some no-longer-active core team members who have made valuable contributions in the past.

<VPTeamMembers size="small" :members="oldMembers" />

## Community Partners

Some members of the Fresns community have so enriched it, that they deserve special mention. We've developed a more intimate relationship with these key partners, often coordinating with them on upcoming features and news.
