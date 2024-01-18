<script setup lang="ts">
import AboutUsBenefitsCard from '../AboutUsBenefitsCard/AboutUsBenefitsCard.vue'
import AboutUsOurBenefits from '@/shared/ui/Icons/AboutUsOurBenefits.vue'
import AboutUsOtherFlaws from '@/shared/ui/Icons/AboutUsOtherFlaws.vue'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'

const breakpoints = useBreakpoints()
const benefits = <Array<any>>[
  {
    id: 1,
    title: 'Tvoy VPN',
    icon: AboutUsOurBenefits,
    variant: 'primary',
    ourBenefits: [
      'Полная конфиденциальность',
      'Гарантия безопасности',
      'Отсутствие рекламы',
      'Неограниченное количество устройств',
      'Любое количество трафика',
      'Удобное управление подпиской в ЛК',
      'Стабильное подключение'
    ]
  },
  {
    id: 2,
    title: 'Другие VPN',
    icon: AboutUsOtherFlaws,
    variant: 'error',
    ourBenefits: [
      'Слив ваших данных',
      'Проблемы с безопасностью',
      'Навязчивая реклама',
      'Ограничение на количество устройств',
      'Маленькое количество трафика',
      'Неудобное управление подпиской',
      'Перебои в подключении'
    ]
  }
]
</script>
<template>
  <div
    class="flex bg-[#0C1022] border border-white/[0.05] border-solid"
    :class="
      breakpoints.isLg
        ? 'flex-row rounded-[60px] gap-[50px] p-[70px] '
        : 'flex-col gap-[30px] p-[30px] rounded-[30px] '
    "
  >
    <AboutUsBenefitsCard
      v-for="(item, index) in benefits"
      :key="index"
      :title="item.title"
      :icon="item.icon"
      :text="item.ourBenefits"
      :variant="item.variant"
      :size="
        breakpoints.isXXl
          ? 'big'
          : breakpoints.isLg
            ? 'medium'
            : breakpoints.isSm
              ? 'small'
              : 'small'
      "
    />
  </div>
</template>
