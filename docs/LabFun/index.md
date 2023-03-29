---
home: true
---


![](https://images.squarespace-cdn.com/content/v1/5aa84edaf793922ad7a32f48/1531012699145-IY8GR88G8LEYAFVKSNQB/AdobeStock_128680431+play.jpg?format=2500w)


# Work Hard, Play Hard!

**希望你乘兴而来，尽兴而归**

### Mar 2023

![BMDMC](/BMDMC4_20230324-26-600.jpg "广西南宁市-第四届全国生物医学数据挖掘与计算学术会议（BMDMC）")

![BMDMC2 ](/BMDMC4_20230326_bowuguan-600.jpg  "广西壮族自治区博物馆")


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/BMDMC4_20230326_bowuguan-600.jpg',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: '/BMDMC4_20230326_bowuguan-600.jpg' },
      { icon: 'twitter', link: '/BMDMC4_20230326_bowuguan-600.jpg' }
    ]
  },
  ...
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
