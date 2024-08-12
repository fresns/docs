---
editLink: false
lastUpdated: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
        avatar: 'https://assets.fresns.com/images/wikis/avatars/jevan-tang.jpg',
        name: 'Jevan Tang',
        title: 'Creator',
        links: [
            { icon: 'github', link: 'https://github.com/jevantang' },
            { icon: 'twitter', link: 'https://x.com/JevanTang' },
        ]
    },
    {
        avatar: 'https://assets.fresns.com/images/wikis/avatars/mouyong.jpg',
        name: 'Yong Mou',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/mouyong' },
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
