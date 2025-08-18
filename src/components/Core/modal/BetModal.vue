<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import CurrencyConverter from '@/core/core.CurrencyConvertor'
import type { PastResultType } from '@/stores/game'
import useModalStore from '@/stores/modal'
import { computed, ref, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import moment from 'moment'
import { GAME_NAME } from '@/config/app.config'
import CloseIcon from '@/components/Shared/Icons/CloseIcon.vue'
import BetIcon from '@/components/Shared/Icons/BetIcon.vue'
import { useFindBoardItem } from '@/composables/useFindBoardItem'
import { BOARD_LAYOUT } from '@/config/board.config'
import BoardButton from '@/components/Game/Board/BoardButton.vue'
const props = defineProps<PastResultType>()

const { table } = useFindBoardItem()
const { closeModal } = useModalStore()
const { t } = useI18n()
const betModal = useTemplateRef('betModal')
const { buttons, numbers } = table()

const bets = ref(props.prizes.map((el) => ({ ...el, chips: 1 })))

onClickOutside(betModal, () => closeModal())

const formatDate = (date: string) => moment(date).format('L HH:mm:ss')
const getCurrentBet = (betID: number) => bets.value.find((bet) => bet.index === betID)

//computed
const layout = computed(() => BOARD_LAYOUT.mobile)
const width = 'max-content'
</script>
<template>
  <div class="wrapper wrapper-transition scrollX scrollY keno">
    <div class="bet-card" ref="betModal">
      <div class="modal-header">
        <h2>
          <BetIcon />
          <span>{{ t('betModal.bet') }}</span>
        </h2>
        <button @click.prevent="closeModal">
          <CloseIcon />
        </button>
      </div>
      <div class="modal-content">
        <div class="title-wrap">
          <h2>{{ GAME_NAME }}</h2>
          <div class="id-wrap">
            <h2>{{ props.id }}</h2>
          </div>
        </div>
        <div class="placed-wrap">
          <span>{{ formatDate(props.date) }}</span>
        </div>
      </div>
      <div class="bet-modal-content">
        <!-- BET-MODAL_DETAILS -->
        <div class="bet-modal_details">
          <div class="col">
            <span class="bet-modal_label">{{ t('betModal.bet') }}</span>
            <span class="bet-modal_value">{{
              CurrencyConverter.Convert(props.playerResults.totalBet, true)
            }}</span>
          </div>
          <div class="col">
            <span class="bet-modal_label">{{ t('betModal.multiplier') }}</span>
            <span class="bet-modal_value">{{ props.playerResults.multiplier }}x</span>
          </div>
          <div class="col">
            <span class="bet-modal_label">{{ t('betModal.payout') }}</span>
            <span
              class="bet-modal_value"
              :class="{ lose: !props.playerResults.isWon, win: props.playerResults.isWon }"
              >{{ CurrencyConverter.Convert(props.playerResults.totalWin, true) }}</span
            >
          </div>
        </div>
        <!-- /BET-MODAL_DETAILS -->

        <!-- PLAYTABLE-PREVIEW -->
        <div class="playtable-preview">
          <div class="wrap">
            <div
              class="board"
              :style="{
                width: width,
                gridTemplateAreas: layout,
                justifySelf: 'flex-start',
              }"
            >
              <BoardButton
                v-for="(item, i) in buttons"
                :key="`BoardButton${i}`"
                :item="item"
                :bet="getCurrentBet(item.betID)"
                class="preview"
                :isWinner="item.betID === props.result"
                :isDisabled="false"
              />

              <BoardButton
                v-for="(item, i) in numbers"
                :key="`BoardButton${i}`"
                :item="item"
                :bet="getCurrentBet(item.betID)"
                class="preview"
                :isWinner="item.betID === props.result"
                :isDisabled="false"
              />
            </div>
          </div>
        </div>
        <!-- /PLAYTABLE-PREVIEW -->

        <!-- FOOTER-INFO -->
        <div class="footer-info">
          <button class="transition classic" @click.prevent="closeModal">
            {{ t('betModal.playRoulette') }}
          </button>
        </div>
        <!-- /FOOTER-INFO -->
      </div>
    </div>
  </div>
</template>
