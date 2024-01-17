<script setup lang="ts">
import AboutUsBenefitsCard from '../AboutUsBenefitsCard/AboutUsBenefitsCard.vue'
import AboutUsOurBenefits from '@/shared/ui/Icons/AboutUsOurBenefits.vue'
import AboutUsOtherFlaws from '@/shared/ui/Icons/AboutUsOtherFlaws.vue'
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
  <div class="p-[70px] bg-blackBlack2 rounded-[60px] border border-white/[0.05] border-solid">
    <div class="gap-[50px] flex flex-row">
      <AboutUsBenefitsCard
        v-for="(item, index) in benefits"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        :text="item.ourBenefits"
        :variant="item.variant"
      />
    </div>
  </div>
</template>
