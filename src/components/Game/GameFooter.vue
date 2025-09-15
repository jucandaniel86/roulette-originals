<script setup lang="ts">
import SettingsIcon from '../Shared/Icons/SettingsIcon.vue'
// import { onClickOutside } from '@vueuse/core'
import { computed, onMounted, ref, watch, useTemplateRef } from 'vue'
import useModalStore from '@/stores/modal'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'
import { useSessionStore } from '@/stores/session'
import Provider from '@/core/core.Provider'
import Tooltip from '../Core/tooltip/Tooltip.vue'
import { useStatusStore } from '@/stores/status'

const settingsOpen = ref<boolean>(false)
const volume = ref()
const settingsBtn = useTemplateRef('settingsBtn')

const toggleSettingsOpen = () => (settingsOpen.value = !settingsOpen.value)
const { openGameInfoModal } = useModalStore()
const { setMaxBet, betLevels } = useSessionStore()
const { t } = useI18n()
const settingsStore = useSettingsStore()
const { setStatusData } = useStatusStore()

const toggleInstantBet = () => {
  settingsStore.updateSettings({
    INSTANT_BET: !settingsStore.settings.INSTANT_BET,
  })
}

watch(volume, () => {
  settingsStore.updateSettings({
    VOLUME_MUSIC: volume.value,
  })
})

const maxBet = () => {
  setMaxBet()
  setStatusData({
    bet: betLevels[betLevels.length - 1],
  })
}

const volumePercentage = computed(() => volume.value * 100)
const volumeIcon = computed(() => {
  const classes = ['icon']
  if (parseFloat(volume.value) === 0) {
    classes.push('volume-disabled-icon')
    return classes.join(' ')
  }
  classes.push('volume-icon')
  return classes.join(' ')
})

// onClickOutside(popup, () => (settingsOpen.value = false))

onMounted(() => {
  volume.value = settingsStore.settings.VOLUME_MUSIC
})
</script>
<template>
  <div class="game-footer">
    <div class="content">
      <button class="transition settings-btn" @click.prevent="toggleSettingsOpen" ref="settingsBtn">
        <SettingsIcon />
      </button>
      <Tooltip :show="settingsOpen" :target="settingsBtn" @onClose="toggleSettingsOpen">
        <div class="settings-volume-wrapper action-on">
          <button class="volume-button transition">
            <div :class="volumeIcon" />
          </button>
          <div
            class="volume-input-wrapper"
            :style="`--settings-volume-current: ${volumePercentage}%`"
          >
            <input type="range" min="0" max="1" step="0.05" v-model="volume" />
          </div>
        </div>
        <button
          class="settings-button-wrapper"
          :class="{
            'action-off': !settingsStore.settings.INSTANT_BET,
            'action-on': settingsStore.settings.INSTANT_BET,
          }"
          @click.prevent="toggleInstantBet"
        >
          <div class="icon instant-bet-icon"></div>
          <span>{{ t('components.settings.instantBet') }}</span>
        </button>
        <button class="settings-button-wrapper action-off" @click.prevent="maxBet">
          <div class="icon max-bet-icon"></div>
          <span>{{ t('components.settings.maxBet') }}</span>
        </button>
        <button
          class="settings-button-wrapper action-off"
          @click="openGameInfoModal({ title: '', content: '' })"
        >
          <div class="icon game-info-icon"></div>
          <span>{{ t('components.settings.gameInfo') }}</span>
        </button>
        <button
          class="settings-button-wrapper action-off"
          @click.prevent="Provider.goToExternalHistory"
        >
          <div class="icon exit-icon"></div>
          <span>{{ t('components.settings.history') }}</span>
        </button>
      </Tooltip>
    </div>
  </div>
</template>
